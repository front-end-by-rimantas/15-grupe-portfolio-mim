class SimpleSlider {
    constructor( itemsCnt) {
        this.cnt = itemsCnt;
        this.navButtons1 = document.querySelector(".dot.first-bar");
        this.navButtons2 = document.querySelector(".dot.second-bar");
        this.navButtons3 = document.querySelector(".dot.third-bar");
        this.longBox = document.querySelector('.review-inner-box');
        this.longBoxScroll = document.querySelector('.review-box-outer');
        this.init();
    }

    init() {

        let turn = 2;

        let switcheris = setInterval(()=>{
            if(turn === 1){
                this.navButtons1.classList.add("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.remove("activeBar");
                let positionToScroll = 0;
                let scrollPositionNow = this.longBoxScroll.scrollLeft;
            
                this.scrollToPosition(scrollPositionNow, positionToScroll);
                return turn++;
            }
            if(turn === 2){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.add("activeBar");
                this.navButtons3.classList.remove("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);
                let scrollPositionNow = this.longBoxScroll.scrollLeft;
            
                this.scrollToPosition(scrollPositionNow, positionToScroll);
                return turn++;
            }
            if(turn === 3){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.add("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
                let scrollPositionNow = this.longBoxScroll.scrollLeft;
            
                this.scrollToPosition(scrollPositionNow, positionToScroll);
                return turn = 1;
            }
        },3000);

        this.navButtons1.addEventListener('click', ()=>{
            this.navButtons1.classList.add("activeBar");
            this.navButtons2.classList.remove("activeBar");
            this.navButtons3.classList.remove("activeBar");
            let positionToScroll = 0;
            let scrollPositionNow = this.longBoxScroll.scrollLeft;

            this.scrollToPosition(scrollPositionNow, positionToScroll);
            
            clearInterval(switcheris);
        })  
        this.navButtons2.addEventListener('click', ()=>{
            this.navButtons1.classList.remove("activeBar");
            this.navButtons2.classList.add("activeBar");
            this. navButtons3.classList.remove("activeBar");

            let positionToScroll = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);
            let scrollPositionNow = this.longBoxScroll.scrollLeft;

            this.scrollToPosition(scrollPositionNow, positionToScroll);

            clearInterval(switcheris);
        })  
        this.navButtons3.addEventListener('click', ()=>{
            this.navButtons1.classList.remove("activeBar");
            this.navButtons2.classList.remove("activeBar");
            this.navButtons3.classList.add("activeBar");
        
            let positionToScroll = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
            let scrollPositionNow = this.longBoxScroll.scrollLeft;

            this.scrollToPosition(scrollPositionNow, positionToScroll);

            clearInterval(switcheris);
        })

        let isDown = false;
        let startX;
        let scrolledLeft;

        this.longBoxScroll.addEventListener('mousedown', (e)=>{
            isDown = true;
            startX = e.pageX - this.longBoxScroll.offsetLeft;
            scrolledLeft = this.longBoxScroll.scrollLeft;

            turn = 0;
        })

        this.longBoxScroll.addEventListener('mouseleave', ()=>{
            isDown = false;

            let positionToScroll2 = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);
            let positionToScroll3 = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
            
            let scrollPositionNow = Math.floor(this.longBoxScroll.scrollLeft);
            let puseBoxo = this.longBoxScroll.offsetWidth/2;

            if(scrollPositionNow < positionToScroll2 - puseBoxo){

                this.navButtons1.classList.add("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.remove("activeBar");
                let positionToScroll = 0;

                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }

            if(scrollPositionNow >= positionToScroll2 - puseBoxo  && scrollPositionNow < positionToScroll3 - puseBoxo){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.add("activeBar");
                this. navButtons3.classList.remove("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);

                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }

            if(scrollPositionNow >= positionToScroll3 - puseBoxo){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.add("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }
        })

        this.longBoxScroll.addEventListener('mouseup', ()=>{
            isDown = false

            let positionToScroll2 = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);
            let positionToScroll3 = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
            
            let scrollPositionNow = Math.floor(this.longBoxScroll.scrollLeft);
            let puseBoxo = this.longBoxScroll.offsetWidth/2;

            if(scrollPositionNow < positionToScroll2 - puseBoxo){

                this.navButtons1.classList.add("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.remove("activeBar");
                let positionToScroll = 0;

                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }

            if(scrollPositionNow >= positionToScroll2 - puseBoxo  && scrollPositionNow < positionToScroll3 - puseBoxo){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.add("activeBar");
                this. navButtons3.classList.remove("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - (this.longBoxScroll.offsetWidth*2);

                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }

            if(scrollPositionNow >= positionToScroll3 - puseBoxo){
                this.navButtons1.classList.remove("activeBar");
                this.navButtons2.classList.remove("activeBar");
                this.navButtons3.classList.add("activeBar");
            
                let positionToScroll = this.longBox.offsetWidth - this.longBoxScroll.offsetWidth;
                this.scrollToPosition(scrollPositionNow, positionToScroll);
            }

        })

        this.longBoxScroll.addEventListener('mousemove', (e)=>{
            if(!isDown){
                return;
            }
            e.preventDefault();
            
            let x = e.pageX - this.longBoxScroll.offsetLeft;

            let move =  x - startX;

            this.longBoxScroll.scrollLeft = scrolledLeft - move;
        })
    }

    scrollToPosition(positionNow, scrollTo){

        let addOnIteration = Math.floor((scrollTo - positionNow)/24);
        let currentValue = positionNow + addOnIteration;

        let interval =  setInterval(() => {
            if(addOnIteration == 0){
                clearInterval(interval);
                this.longBoxScroll.scrollLeft = scrollTo;
                return;
            }
            this.longBoxScroll.scrollLeft += addOnIteration;
            currentValue += addOnIteration;

            if(addOnIteration < 0){
                if(currentValue<scrollTo){
                    this.longBoxScroll.scrollLeft = scrollTo;
                    clearInterval(interval);
                }
            }

            if(addOnIteration > 0 ){
                if(currentValue > scrollTo){
                    this.longBoxScroll.scrollLeft = scrollTo;
                    clearInterval(interval);
                }
            }
        }, 16);
    }
}

export default SimpleSlider;