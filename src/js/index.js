import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';

import {manageSlidesShow} from "./slidersFunctions";
import {fixViewportUnits, manageMenuBehavior} from "./menuInMobileBrowsers";

window.addEventListener('DOMContentLoaded', () => {
  manageMenuBehavior();
  fixViewportUnits();
  manageSlidesShow();
});

window.addEventListener('resize', () => {
  fixViewportUnits();
  manageSlidesShow();
});

