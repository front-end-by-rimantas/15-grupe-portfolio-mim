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

        if ( this.htmlSection === 'portfolio' ) {
            this.uniqueValueRender();
            this.clickPut();
        } else {
            console.error(`Method ${this.htmlSection}Render() not exists!`);
        }
    }

    uniqueValueRender() {
       const dataCnt = this.data.length;
       const filterArr = [];

        for ( let i=0; i<dataCnt; i++ ) {
            const data = this.data[i];
            const tagsCnt = data.tags.length;
            for ( let y = 0; y < tagsCnt; y++ ) { 
                if ( filterArr.indexOf(data.tags[y].toLowerCase()) === -1 ) {
                    filterArr.push(data.tags[y].toLowerCase());
                } 
            }
        }

        const filterArrCnt = filterArr.length;

        for (let i = 0; i < filterArrCnt; i++) {
            const HTML = `<li class="click">${filterArr[i]}</li>`;
            this.container.insertAdjacentHTML('beforeend', HTML); 
        }
    }

    clickPut() {    
        const filterContainers = document.querySelectorAll('.click');
        const filterContainersCnt = filterContainers.length;

        for (let i=0; i<filterContainersCnt; i++) {       
            filterContainers[i].addEventListener('click', this.clickGet, false);
        }  
    }

    clickGet( event){
        const filterContainerInner = event.target.textContent.toLowerCase();
        const htmlBlock = document.querySelectorAll('.portfolio > .col-3');
        const htmlBlockCnt = htmlBlock.length;
    
        if ( filterContainerInner === 'all' ) {
            for ( let i=0; i<htmlBlockCnt; i++ ) {
                htmlBlock[i].classList.remove('hide');
                htmlBlock[i].classList.remove('hider');
                setTimeout(function(){ 
                    htmlBlock[i].classList.add('hider');
                }, 100); 
            }
            return;
        }

        for ( let i = 0; i<htmlBlockCnt; i++ ) {       
            const checkTags = htmlBlock[i].dataset.tags.toLowerCase().split(',').indexOf(filterContainerInner);
            
            htmlBlock[i].classList.remove('hider');

            if ( checkTags >= 0 ) {
                htmlBlock[i].classList.remove('hide');
                setTimeout(function(){ 
                    htmlBlock[i].classList.add('hider');
                }, 100);   
            } else {
                htmlBlock[i].classList.add('hide');
            }
        }
    }
}

export default UniqueRender;