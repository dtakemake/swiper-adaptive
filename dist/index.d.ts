import { SwiperOptions } from "swiper";
/**
 * enables and/or disables the swiper plugin depending on screen width
 * @param selector - a valid dom selector
 * @param options - the SwiperOptions
 * @param breakpoint - switching point
 * @param direction - direction of enable
 * @return void
 */
declare type SwiperAdaptiveArgs =
  | {
      selector: string;
      options: SwiperOptions;
      direction: "up" | "down";
      breakpoint: number;
    }
  | {
      selector: string;
      options: SwiperOptions;
      direction: "center" | "between";
      breakpoint: [number, number];
    };
declare type SwiperAdaptive = {
  (args: SwiperAdaptiveArgs): void;
};
declare const swiperAdaptive: SwiperAdaptive;
export default swiperAdaptive;
export type { SwiperAdaptive, SwiperAdaptiveArgs };
