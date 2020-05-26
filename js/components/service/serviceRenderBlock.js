class serviceRenderBlock {
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
}

export default serviceRenderBlock;