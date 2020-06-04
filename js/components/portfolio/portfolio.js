"use strict"

const data = [   
    {
        img: 'a1',
        title1: 'New Portfolio',
        title2: 'Garden',
        tags: ['design', 'new'],
    },
    {
        img: 'a5',
        title1: 'Mim Contrary To three',
        title2: 'Poster',
        tags: ['design', 'print'],
    },
    {
        img: 'a2',
        title1: 'Portfolio One',
        title2: 'Fliyer',
        tags: ['print', 'new'],
    },
    {
        img: 'a3',
        title1: 'Contrary To Popular Belie',
        title2: 'Book Cover',
        tags: ['print', '3D work'],
    },
    {
        img: 'a4',
        title1: 'Contrary To Popular Belief',
        title2: 'HTML',
        tags: ['blabla'],
    },
    {
        img: 'a6',
        title1: 'Popular Belief Three',
        title2: 'Graphics',
        tags: ['web', 'new', '3D work'],
    }
];

function renderPortfolio() {

    let container = document.querySelector( '.filters' );
    
    let res = [];
        
    for ( let i=0; i<data.length; i++ ) {
        const tags = data[i].tags;
        for (let t = 0; t < tags.length; t++) { 
            if (res.indexOf(tags[t].toLowerCase()) === -1) {
                res.push(tags[t].toLowerCase());
            } 
        }
    }

    res.sort();

    for (let i = 0; i < res.length; i++) {
        const filterHTML = `<li class="click">${res[i]}</li>`;
        container.insertAdjacentHTML('beforeend', filterHTML); 
    }    
    
    let click = document.querySelectorAll('.click');

    for (let i=0; i<click.length; i++) {       
        click[i].addEventListener('click', filterGallery);
    }  

    const container2 = document.querySelector( '.portfolio' );

    for (let i=0; i<data.length; i++) {
        const get = data[i];
        const folioHTML = `
        <div class="col-3" data-tags="${get.tags}">
            <div class="img">
                <a href="#"><i class="fa fa-link"></i></a>
                <div class="title">${get.title1}<br><span> ${get.title2}</span></div>
                <img src="./img/portfolio/${get.img}.jpg" alt="${get.img}">
            </div>
        </div>`;
        container2.insertAdjacentHTML('beforeend', folioHTML);
    }

    return;
}

function filterGallery( event ) {
    //console.log( data);
    //console.log(event.target.textContent.toLowerCase());
    console.log('design-2, new-3, print-3, 3D-2, web-1 , blabla-1' );

    const tag = event.target.textContent.toLowerCase();

    const works = document.querySelectorAll('.portfolio > .col-3');
    
    if (tag === 'all') {
        for (let i = 0; i <works.length; i++) {
            //works[i].classList.remove('hide');
            works[i].style.display = "block";
        }
        return;
    }

    //const works2 = document.querySelectorAll('.portfolio > .col-3');

    for (let i = 0; i < works.length; i++) {
        
        const hasTags = works[i].dataset.tags.toLowerCase().split(',').indexOf(tag);
        if (hasTags >= 0) {
            //works.classList.remove('hide');
            works[i].style.display = "block";
        } else {
            //works.classList.add('hide');
            works[i].style.display = 'none';
        }
    }
}

function setUpPortfolio() {
    renderPortfolio();   
}

export default setUpPortfolio;