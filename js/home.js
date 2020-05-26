"use strict"

/* Progress bars */

import skills from './data.js';
import progressBars from './components/progress-bar.js';
progressBars;
const progressBarsSelector = '#skills .col-5';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);

/* Form validation */

import { valid } from './components/form-validation/form-validation.js';
valid();

/* Blog generator */

import blogData from './data/blogData.js';
import blogRender from './components/blog/blogRender.js';
new blogRender( '.my-blog' , blogData );