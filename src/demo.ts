"use strict"
import { Pagination, SwiperOptions } from 'swiper'
import swiperAdaptive from './index'

type ReadyCallbackFn = () => void

// запуск
const ready = (callback: ReadyCallbackFn) => {
  if(document.readyState !== 'loading') {
    callback()
  } else {
    document.addEventListener('DOMContentLoaded', callback)
  }
}

ready(() => {
  const options: SwiperOptions = { 
    loop: true, 
    modules: [Pagination], 
    pagination: { 
      el: '.swiper-pagination', 
      dynamicBullets: true 
    } 
  }

  // enadled down
  swiperAdaptive({ selector: '.swiper-575-down', options, direction: 'down', breakpoint: 575 })
  swiperAdaptive({ selector: '.swiper-767-down', options, direction: 'down', breakpoint: 767 })
  swiperAdaptive({ selector: '.swiper-991-down', options, direction: 'down', breakpoint: 991 })
  swiperAdaptive({ selector: '.swiper-1199-down', options, direction: 'down', breakpoint: 1199 })
  swiperAdaptive({ selector: '.swiper-1399-down', options, direction: 'down', breakpoint: 1399 })

  // enabled up
  swiperAdaptive({ selector: '.swiper-576-up', options: { ...options, slidesPerView: 2 }, direction: 'up', breakpoint: 576 })
  swiperAdaptive({ selector: '.swiper-768-up', options: { ...options, slidesPerView: 2 }, direction: 'up', breakpoint: 768 })
  swiperAdaptive({ selector: '.swiper-992-up', options: { ...options, slidesPerView: 3 }, direction: 'up', breakpoint: 992 })
  swiperAdaptive({ selector: '.swiper-1200-up', options: { ...options, slidesPerView: 3 }, direction: 'up', breakpoint: 1200 })
  swiperAdaptive({ selector: '.swiper-1400-up', options: { ...options, slidesPerView: 3 }, direction: 'up', breakpoint: 1400 })

  // enabled center
  swiperAdaptive({ selector: '.swiper-576-1199-center', options, direction: 'center', breakpoint: [576, 1199] })
  swiperAdaptive({ selector: '.swiper-768-1399-center', options, direction: 'center', breakpoint: [768, 1399] })

  // enabled between
  swiperAdaptive({ selector: '.swiper-575-1200-between', options, direction: 'between', breakpoint: [575, 1200] })
  swiperAdaptive({ selector: '.swiper-767-1400-between', options, direction: 'between', breakpoint: [767, 1400] })
})
