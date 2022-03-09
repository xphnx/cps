import 'swiper/swiper.scss';
import 'swiper/modules/pagination/pagination.scss';
import '../scss/style.scss';

import {manageSlidesShow} from "./slidersFunctions";
import {fixViewportUnits, manageModalBehavior} from "./modalsInMobileBrowsers";
import {manageGoFurtherButtonsBehavior} from "./goFurtherButtons";

window.addEventListener('DOMContentLoaded', () => {
  manageModalBehavior();
  fixViewportUnits();
  manageGoFurtherButtonsBehavior();
  manageSlidesShow();
});

window.addEventListener('resize', () => {
  fixViewportUnits();
  manageSlidesShow();
});

