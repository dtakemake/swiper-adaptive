import Swiper from "swiper";
const toggleInstance = (selector, options) => (instance, conditionToInit) => {
    if (conditionToInit && instance === undefined) {
        instance = new Swiper(selector, options);
    }
    else if (!conditionToInit && instance !== undefined) {
        instance.destroy();
        instance = undefined;
    }
    return instance;
};
const swiperAdaptive = ({ selector, options, direction, breakpoint }) => {
    // if document don't have an element, exit the function
    if (!document.querySelector(selector))
        return;
    // we will not call the Swiper if the breakpoint less 320px
    if (breakpoint < 320)
        new Swiper(selector, options);
    // Swiper instance
    let instance = undefined;
    // preinit
    const toggle = toggleInstance(selector, options);
    const initSwiper = () => {
        const documentWidth = document.documentElement.clientWidth;
        if (direction === "down") {
            instance = toggle(instance, documentWidth <= breakpoint);
        }
        else if (direction === "up") {
            instance = toggle(instance, documentWidth >= breakpoint);
        }
        else if (direction === "center") {
            instance = toggle(instance, documentWidth >= breakpoint[0] && documentWidth <= breakpoint[1]);
        }
        else if (direction === "between") {
            instance = toggle(instance, documentWidth <= breakpoint[0] || documentWidth >= breakpoint[1]);
        }
    };
    initSwiper();
    window.addEventListener("resize", initSwiper);
};
export default swiperAdaptive;
