console.log('hello word')

// Slide Responsivo

import SlideNav from "./slide.js";

const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
slide.addControl('.custom-controls');

