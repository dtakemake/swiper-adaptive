import { SwiperOptions } from "swiper";
declare type ToggleDirection = "up" | "down";
/**
 * enables and/or disables the swiper plugin depending on screen width
 * @param selector - the valid dom selector
 * @param options - the SwiperOptions
 * @param breakpoint - on/off point
 * @param direction - direction of disable
 */
declare type SwiperAdaptive = {
    (selector: string, options: SwiperOptions, breakpoint?: number, direction?: ToggleDirection): void;
};
declare const swiperAdaptive: SwiperAdaptive;
export default swiperAdaptive;
