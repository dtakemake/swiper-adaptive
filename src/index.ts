"use strict"

import Swiper, { SwiperOptions } from "swiper"

// instance
type SwiperInstance = Swiper | undefined

// toggle instance
type ToggleInstance = {
  ( instance: SwiperInstance, conditionToInit: boolean ): SwiperInstance
}

// preinit
type PreInitToggleInstance = {
  ( selector: string, options: SwiperOptions ): ToggleInstance
}

const preInitToggleInstance: PreInitToggleInstance = (selector, options) => 
  (instance, conditionToInit) => {
    if(conditionToInit && instance === undefined) {
      instance = new Swiper(selector, options)
    } else if(!conditionToInit && instance !== undefined) {
      instance.destroy()
      instance = undefined
    }
    return instance
  }

/**
 * enables and/or disables the swiper plugin depending on screen width
 * @param selector - a valid dom selector
 * @param options - the SwiperOptions
 * @param breakpoint - switching point
 * @param direction - direction of enable
 * @return void
*/

// a discriminated union
type BreakpointArgs = {
  direction: "up" | "down", 
  breakpoint: number
} | {
  direction: "center" | "between", 
  breakpoint: [number, number]
}

type SwiperAdaptiveArgs = {
  selector: string, 
  options: SwiperOptions
} & BreakpointArgs

type SwiperAdaptive = {
  ( args: SwiperAdaptiveArgs ): void
}

const swiperAdaptive: SwiperAdaptive = ({
  selector,
  options,
  direction,
  breakpoint
}) => {
  // if the document doesn't have the element, exit the function
  if (!document.querySelector(selector)) return

  // we will call the Swiper by default if the breakpoint is less than 320px
  if ( typeof breakpoint === 'number' && breakpoint < 320 ) {
    new Swiper(selector, options)
    return
  }

  // Swiper adaptive instance
  let instance: SwiperInstance = undefined

  // preinit
  const toggleInstance = preInitToggleInstance(selector, options)

  const initSwiper = () => {
    const documentWidth = document.documentElement.clientWidth
    let conditionToInit = true

    if (direction === "down") {
      conditionToInit = documentWidth <= breakpoint
    } else if(direction === "up") {
      conditionToInit = documentWidth >= breakpoint
    } else if (direction === "center") {
      conditionToInit = documentWidth >= breakpoint[0] && documentWidth <= breakpoint[1]
    } else if(direction === "between") {
      conditionToInit = documentWidth <= breakpoint[0] || documentWidth >= breakpoint[1]
    }

    instance = toggleInstance(instance, conditionToInit)
  }

  initSwiper()
  window.addEventListener("resize", initSwiper)
}

export default swiperAdaptive

export type {
  BreakpointArgs,
  SwiperAdaptiveArgs,
  SwiperAdaptive
}
