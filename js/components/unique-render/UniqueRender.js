class UniqueRender {
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

        if ( this.htmlSection === 'portfolio') {
            this.uniqueValueRender();
            this.clickPut();
        }else {
            console.error(`Method ${this.htmlSection}Render() not exists!` );
        }
    }

    uniqueValueRender() {

        /* ----- Fine Classic style --------------
        
        let res = [];

        for ( let i=0; i<this.data.length; i++ ) {
            const tags = this.data[i].tags;
            res3.push(tags);

            for (let t = 0; t < tags.length; t++) { 
                if (res.indexOf(tags[t].toLowerCase()) === -1) {
                    res.push(tags[t].toLowerCase());
                } 
            }
        }
        */
       
        /* ----- Modern style ------------------ */
        
        const arr = [];
        
        for ( let i=0; i<this.data.length; i++ ) {
            arr.push(this.data[i].tags);
        }

        const mer = arr.flat(1);
        const res = [...new Set(mer)];

        /* ------------------------------------ */

        for (let i = 0; i < res.length; i++) {
            const HTML = `<li class="click">${res[i]}</li>`;
            this.container.insertAdjacentHTML('beforeend', HTML); 
        }
    }

    clickPut() {
        let click = document.querySelectorAll('.click');

        for (let i=0; i<click.length; i++) {       
            click[i].addEventListener('click', this.clickGet, false);
        }  
    }

    clickGet( event){
        console.log(event.target.textContent.toLowerCase());
        console.log( this.data);
    }
   
}

export default UniqueRender;