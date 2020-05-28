class HtmlRender {
    constructor( container, data, htmlSection ) {
        this.container = container;
        this.data = data;
        this.htmlSection = htmlSection;
        this.init();
    }

    init() {
        this.render();
    }

    render() {
        if ( this.htmlSection === 'experience') {
            this.experienceRender();
        }
        else if ( this.htmlSection === 'portfolio') {
            this.portfolioRender();
        }
        else if ( this.htmlSection === 'services') {
            this.servicesRender();
        }
        else if ( this.htmlSection === 'blog') {
            this.blogRender();
        }
        else {
            console.error(`Method ${this.htmlSection}Render() not exists!` );
        }
    }

    experienceRender() {
        const HTML = `
            <div class="col-2">
                <div class="info-left">
                    <h3>${this.data.h3}</h3>
                    <p>${this.data.date}</p>
                </div>
                <div class="info-right ${this.data.class}"> 
                    <i class="fa fa-check"></i>             
                    <h2>${this.data.title}</h2>
                    <p>${this.data.text}</p>
                </div>
            </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }

    portfolioRender() {
        const HTML = `
            <div class="col-3">
                <div class="img">
                    <a href="#"><i class="fa fa-link"></i></a>
                    <div class="title">${this.data.title1}<br><span> ${this.data.title2}</span></div>
                    <img src="./img/portfolio/${this.data.img}.jpg" alt="${this.data.img}">
                </div>
            </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }

    servicesRender() {
        const HTML = `
            <div class="col-4">
                <div class="item">
                    <i class="fa ${this.data.fa}"></i>      
                    <h5>${this.data.title}</h5>
                    <hr class="hrs">
                    <p>${this.data.text}</p>
                </div>
            </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }

    blogRender() {    
        const HTML = `
            <div class="col-3">
                <div class="item">
                    <img src="./img/portfolio/${this.data.img}" alt="a">     
                    <div class="left">
                        <i class="fa fa-calendar"></i>
                        ${this.data.date}
                    </div> 
                    <div class="right">
                        <i class="fa fa-comments"></i>
                        ${this.data.comment} Comments
                    </div>    
                    <div class="text-block">
                        <div class="text">${this.data.title}</div>
                        <div class="icon"><a href="#"><i class="fa fa-plus"></i></a></div>
                    </div>
                </div>
            </div>`;
        this.container.insertAdjacentHTML('beforeend', HTML);
    }

}

export default HtmlRender;