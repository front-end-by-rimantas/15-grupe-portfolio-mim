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

/* Service generator */

import serviceData from './data/serviceData.js';
import serviceRender from './components/service/serviceRender.js';
new serviceRender( '.services' , serviceData );

/* Experience generator */

import experienceData from './data/experienceData.js';
import experienceRender from './components/experience/experienceRender.js';
new experienceRender( '.my-experience' , experienceData );

/* Portfolio generator */

import portfolioData from './data/portfolioData.js';
import portfolioRender from './components/portfolio/portfolioRender.js';
new portfolioRender( '.portfolio' , portfolioData );