"use strict";

function renderProgressBar(selector, data){
    // validacija 
    const DOM = document.querySelector(selector);

    if (!DOM) {
        throw 'ERROR: Could not find element to render new content.'
    }
    
   
    // logika 
    let HTML = '';
    for ( let i=0; i<data.length; i++ ){
        const skill = data[i]
        HTML+= `
        <div class="progress-bar-container" 
            data-animated="false"
            data-value="${skill.value}%">
                    <div class="barText">
                        <div class="label">${skill.label}</div>
                    </div>
                    <div class="bar" style="width: 100%;">
                        <div class="value loading" style="width: 0%;">
                            <div class="value1">0%</div>
                            <div class="load"></div>
                        </div>
                    </div>
                </div>` ;
    // rezultato grazinimas
    DOM.innerHTML = HTML;        
    }
    return;
}

function animateProgressBars(progressBarsSelector){

const progressBars = document.querySelectorAll(progressBarsSelector + ' > .progress-bar-container');

window.addEventListener('scroll', () => {
    const windowBottomHeight = window.scrollY + window.innerHeight;

        for (let i=0; i<progressBars.length; i++){
            const pg = progressBars[i];
            const value = pg.querySelector('.loading');
            const DOMvalue = value.querySelector('.value1');
            const pgBottomHeight = pg.offsetTop + pg.offsetHeight;
    
            if (pgBottomHeight<windowBottomHeight &&
                pg.dataset.animated === 'false'){
                pg.dataset.animated = 'true';
                value.style.width = pg.dataset.value;
                value.style.transition = '2s';
                animateProgressBarTextValue(DOMvalue, pg.dataset.value);
            }
        }    
    });
}

function animateProgressBarTextValue(element, value){
    const number = parseInt(value);
    const time = 2000;
    const fps = 30;
    const refreshTime = 1000 / fps;
    const totalSteps = time / refreshTime
    let step = 0;


    const timer = setInterval(() => {
        step++;
        element.innerText = Math.round(step / totalSteps * number) + '%';

        if (step>=totalSteps){
           clearInterval(timer);
        }
    }, refreshTime);
}

export default {
    renderProgressBar,
    animateProgressBars
};