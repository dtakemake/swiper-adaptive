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

const toggleInstance: PreInitToggleInstance = (selector, options) => 
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
type SwiperAdaptiveArgs = {
  selector: string, 
  options: SwiperOptions, 
  direction: "up" | "down", 
  breakpoint: number
} | {
  selector: string, 
  options: SwiperOptions, 
  direction: "center" | "between", 
  breakpoint: [number, number]
}

const swiperAdaptive: ( args: SwiperAdaptiveArgs ) => void = ({
  selector,
  options,
  direction,
  breakpoint
}) => {
  // if document don't have an element, exit the function
  if (!document.querySelector(selector)) return

  // we will not call the Swiper if the breakpoint less 320px
  if (breakpoint < 320) new Swiper(selector, options)

  // Swiper instance
  let instance: SwiperInstance = undefined

  // preinit
  const toggle = toggleInstance(selector, options)

  const initSwiper = () => {
    const documentWidth = document.documentElement.clientWidth

    if (direction === "down") {
      instance = toggle(instance, documentWidth <= breakpoint)
    } else if(direction === "up") {
      instance = toggle(instance, documentWidth >= breakpoint)
    } else if (direction === "center") {
      instance = toggle(instance, documentWidth >= breakpoint[0] && documentWidth <= breakpoint[1])
    } else if(direction === "between") {
      instance = toggle(instance, documentWidth <= breakpoint[0] || documentWidth >= breakpoint[1])
    }
  }

  initSwiper()
  window.addEventListener("resize", initSwiper)
}

export default swiperAdaptive
