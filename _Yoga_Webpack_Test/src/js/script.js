window.addEventListener('DOMContentLoaded', () => {

  'use strict';
  let tabs = require('./parts/tabs.js'),
    timer = require('./parts/timer.js'),
    slider = require('./parts/slider.js'),
    calc = require('./parts/calc.js'),
    form = require('./parts/form.js'),
    modal = require('./parts/modal.js');

  calc();
  form();
  slider();
  tabs();
  timer();
  form();
  modal();

});