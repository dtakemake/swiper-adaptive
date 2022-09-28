# Swiper-adaptive

Activation and deactivation of the [Swiper](https://github.com/nolimits4web/swiper) plugin depending on the breakpoint

```
$ npm install swiper-adaptive
```

### How to use

```js
import { Pagination, SwiperOptions } from 'swiper'
import swiperAdaptive from 'swiper-adaptive'

// example
const options: SwiperOptions = { 
  loop: true, 
  modules: [Pagination], 
  pagination: { 
    el: '.swiper-pagination', 
    dynamicBullets: true
  } 
}

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'down', // 'down' | 'up' | 'center' | 'between'
  breakpoint: 991
})
```
