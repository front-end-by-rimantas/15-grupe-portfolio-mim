class experienceRenderBlock {
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

        <div class="col-2">
            <div class="info-left">
                <h3>${this.data.h3}</h3>
                <p>${this.data.date}</p>
            </div>
            <div class="info-right ${this.data.class}"> 
                <i class="fa fa-check"></i>             
                <h2>${this.data.title}</h2>
                <p>
                ${this.data.text}
                </p>
            </div>
        </div>`;

        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default experienceRenderBlock;