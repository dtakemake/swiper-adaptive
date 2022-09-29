# Swiper-adaptive

Activation and deactivation of the [Swiper](https://github.com/nolimits4web/swiper) plugin depending on the breakpoint

```

$ npm install swiper-adaptive

```

### How to use

```ts

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

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'down', // 'down' | 'up' | 'center' | 'between'
  breakpoint: 991    // number or [number, number]
})

```

#### Examples

if you need to run Swiper when screen width >=576px

```js

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'up',
  breakpoint: 576
})

```


if you need to run Swiper when screen width <576px

```js

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'down',
  breakpoint: 575
})

```


if you need to run Swiper when screen width >=576px && <1200

```js

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'center',
  breakpoint: [576, 1199]
})

```


if you need to run Swiper when screen width <576px || >=1200

```js

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'between',
  breakpoint: [575, 1200]
})

```


#### More examples

All demos located in ./demos folder.

```js

$ git clone https://github.com/dtakemake/swiper-adaptive.git

$ npm install

$ npm run demos

```

After installation open files from demos folder in browser.
