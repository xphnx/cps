import Swiper, {Pagination} from "swiper";

  const sliders = [
  {selector: '.brands__list'},
  {selector: '.services__list'},
  {selector: '.prices__list'}
];

const mediaQuerySize = 768;

function SlidersInit (sliders) {
  sliders.forEach(slider => {
      if (!slider.slider) {
        slider.slider = new Swiper(slider.selector, {
          modules: [Pagination],
          pagination: {
            el: '.swiper-pagination',
          },
          slidesPerView: "auto",
          spaceBetween: 16
        });
      }
  });
}

function SlidersDestroy (sliders) {
  sliders.forEach(slider => {
    if (slider.slider) {
      slider.slider.destroy();
      slider.slider = null;
    }
  });
}

export function manageSlidesShow() {
  window.innerWidth < mediaQuerySize ? SlidersInit(sliders) : SlidersDestroy(sliders);
}
