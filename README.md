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

swiperAdaptive({
  selector: '.swiper',
  options,
  direction: 'down', // 'down' | 'up' | 'center' | 'between'
  breakpoint: 991    // number or [number, number]
})

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

```


#### Examples

```js

swiperAdaptive({
  selector: '.swiper',
  options,

  // if you need to run Swiper when screen width >=576px
  direction: 'up',
  breakpoint: 576,

  // if you need to run Swiper when screen width <576px
  direction: 'down',
  breakpoint: 575,

  // if you need to run Swiper when screen width >=576px && <1200
  direction: 'center',
  breakpoint: [576, 1199],

  // if you need to run Swiper when screen width <576px || >=1200
  direction: 'between',
  breakpoint: [575, 1200],
})

```


#### More examples

All demos located in ./demos folder.

```

$ git clone https://github.com/dtakemake/swiper-adaptive.git
$ cd swiper-adaptive
$ npm install
$ npm run demos

```

After installation open files from demos folder in browser.
