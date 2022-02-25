import Swiper, {Pagination} from "swiper";

let brandSlider = null;
const mediaQuerySize = 768;

function SlidersInit () {
  if (!brandSlider) {
    brandSlider = new Swiper('.swiper', {
      modules: [Pagination],
      pagination: {
        el: '.swiper-pagination',
      },
      slidesPerView: "auto",
      spaceBetween: 16
    });
  }
}

function SlidersDestroy () {
  if (brandSlider) {
    brandSlider.destroy();
    brandSlider = null;
  }
}

export function manageSlidesShow() {
  window.innerWidth < mediaQuerySize ? SlidersInit() : SlidersDestroy();
}
