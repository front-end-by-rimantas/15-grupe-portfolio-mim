"use strict"

import skills from './data.js';

import progressBars from './components/progress-bar.js';

const progressBarsSelector = '#skills .bars';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);