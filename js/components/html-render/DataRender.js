import HtmlRender from './HtmlRender.js';

class DataRender {
    constructor( selector, data, htmlSection ) {
        this.selector = selector;
        this.container = null;
        this.data = data;
        this.htmlSection = htmlSection;
        this.init();
    }

    init() {  

        this.container = document.querySelector(this.selector);
        
        if ( !this.container ) {
            console.error(`Container not exists!` );
            return false;
        }

        this.render();
    }

    render() {
        if ( !Array.isArray(this.data) ) {
            console.error('ERROR: duomenys turi buti array tipo!');
        }

        for ( let i=0; i<this.data.length; i++ ) {
            new HtmlRender(this.container, this.data[i],  this.htmlSection);
        }
    }
}

export default DataRender;