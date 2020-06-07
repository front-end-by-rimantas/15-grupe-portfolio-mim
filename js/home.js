"use strict"

/* Progress bars */

import skills from './data.js';
import progressBars from './components/progress-bar.js';

const progressBarsSelector = '#skills .bars';
progressBars.renderProgressBar(progressBarsSelector, skills);
progressBars.animateProgressBars(progressBarsSelector);

/* Form validation */

import { valid } from './components/form-validation/form-validation.js';
valid();

/* Slider */

import SimpleSlider from './components/testimonial/testimonial.js';
document.addEventListener("DOMContentLoaded", init);

function init() {
    const longBox = document.querySelectorAll('.review-inner-box > .item');
    new SimpleSlider(longBox.length);
}

/* Html generators */

import DataRender from './components/html-render/DataRender.js';

import experienceData from './data/experienceData.js';
new DataRender( '.my-experience', experienceData, 'experience' );

import portfolioData from './data/portfolioData.js';
new DataRender( '.portfolio', portfolioData, 'portfolio' );

import UniqueRender from './components/unique-render/UniqueRender.js';
new UniqueRender( '.filters', portfolioData, 'portfolio' );

import serviceData from './data/serviceData.js';
new DataRender( '.services', serviceData, 'services' );

import blogData from './data/blogData.js';
new DataRender( '.my-blog', blogData, 'blog' );

import testimonialData from './data/testimonialData.js';
new DataRender( '.review-inner-box', testimonialData, 'testimonial' );