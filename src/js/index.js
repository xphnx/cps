import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';

import {manageSlidesShow} from "./slidersFunctions";
import {fixViewportUnits, manageModalBehavior} from "./modalsInMobileBrowsers";

window.addEventListener('DOMContentLoaded', () => {
  manageModalBehavior();
  fixViewportUnits();
  manageSlidesShow();
});

window.addEventListener('resize', () => {
  fixViewportUnits();
  manageSlidesShow();
});

