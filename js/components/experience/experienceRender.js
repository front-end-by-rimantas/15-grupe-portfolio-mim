import experienceRenderBlock from './experienceRenderBlock.js';

class experienceRender {
    constructor( selector, data) {
        this.DOM = null;
        this.selector = selector;
        this.data = data;   
        this.init();
    }

    init() {
        if ( !this.isValidSelector() ) {
            throw 'ERROR: double check if wanted location exists...';
        }
        
        this.render();
    }

    isValidSelector() {
        const DOM = document.querySelector( this.selector );

        if ( DOM ) {
            this.DOM = DOM;
            return true;
        }
        
        return false;
    }

    render() {
        for ( let i=0; i<this.data.length; i++ ) {
            new experienceRenderBlock( this.DOM, this.data[i] );        
        }
    }
}

export default experienceRender;