import swiperAdaptive from './../src/index'

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
  swiperAdaptive('.swiper', {
    slidesPerView: 1
  }, 575.98, 'up')
})
