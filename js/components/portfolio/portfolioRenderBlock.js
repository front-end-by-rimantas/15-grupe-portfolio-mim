class portfolioRenderBlock {
    constructor( container, data) {
        this.container = container;
        this.data = data;
        this.init();
    }
    
    init() {
        this.render();
    }

    render() {

        const HTML = `
            <div class="col-3">
                <div class="img">
                    <a href="#">
                        <i class="fa fa-link"></i>
                    </a>
                    <div class="title">
                    ${this.data.title1}<br>
                        <span> ${this.data.title2}</span>
                    </div>
                    <img src="./img/portfolio/${this.data.img}.jpg" alt="${this.data.img}">
                </div>
            </div>`;

        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default portfolioRenderBlock;