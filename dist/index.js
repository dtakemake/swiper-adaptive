import Swiper from "swiper";
const swiperAdaptive = (
  selector,
  options,
  breakpoint = 0,
  direction = "down"
) => {
  // we can't call the Swiper if the breakpoint less 320px
  if (breakpoint < 320) {
    new Swiper(selector, options);
  }
  let instance = undefined;
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