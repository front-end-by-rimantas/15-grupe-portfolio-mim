"use strict"

import skills from './data.js';

import progressBars from './components/progress-bar.js';

console.log(progressBars);

const progressBarsSelector = '#skills .col-5';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);