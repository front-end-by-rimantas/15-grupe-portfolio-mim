class blogRenderBlock {
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
                    <div class="text">
                    ${this.data.title}
                    </div>
                    <div class="icon">
                        <a href="#">
                            <i class="fa fa-plus"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>`;

        this.container.insertAdjacentHTML('beforeend', HTML);
    }
}

export default blogRenderBlock;