import Swiper, { SwiperOptions } from "swiper";

type ToggleDirection = "up" | "down";

/**
 * enables and/or disables the swiper plugin depending on screen width
 * @param selector - the valid dom selector
 * @param options - the SwiperOptions
 * @param breakpoint - on/off point
 * @param direction - direction of disable
 * @return void
 */
type SwiperAdaptive = {
  (
    selector: string,
    options: SwiperOptions,
    breakpoint?: number,
    direction?: ToggleDirection
  ): void;
};

const swiperAdaptive: SwiperAdaptive = (
  selector,
  options,
  breakpoint = 0,
  direction = "down"
) => {
  // if document don't have an element, exit the function
  if (!document.querySelector(selector)) return;

  // we will not call the Swiper if the breakpoint less 320px
  if (breakpoint < 320) new Swiper(selector, options);

  // Swiper instance
  let instance: Swiper | undefined = undefined;

  const initSwiper = () => {
    const documentWidth = document.documentElement.clientWidth;

    if (direction === "down") {
      if (documentWidth > breakpoint && instance === undefined) {
        instance = new Swiper(selector, options);
      } else if (documentWidth <= breakpoint && instance !== undefined) {
        instance.destroy();
        instance = undefined;
      }
    } else {
      if (documentWidth <= breakpoint && instance === undefined) {
        instance = new Swiper(selector, options);
      } else if (documentWidth > breakpoint && instance !== undefined) {
        instance.destroy();
        instance = undefined;
      }
    }
  };

  initSwiper();

  window.addEventListener("resize", initSwiper);
};

export default swiperAdaptive;
