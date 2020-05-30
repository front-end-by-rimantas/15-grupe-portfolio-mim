const navButtons1 = document.querySelector(".dot.first-bar")
const navButtons2 = document.querySelector(".dot.second-bar")
const navButtons3 = document.querySelector(".dot.third-bar")

const longBox = document.querySelector('.review-inner-box')
const longBoxScroll = document.querySelector('.review-box-outer')

let turn = 2

let switcheris = setInterval(()=>{
    if(turn === 1){
        navButtons1.classList.add("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.remove("activeBar")
        let positionToScroll = 0
        let scrollPositionNow = longBoxScroll.scrollLeft
    
        scrollToPosition(scrollPositionNow, positionToScroll)
        return turn++
    }
    if(turn === 2){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.add("activeBar")
        navButtons3.classList.remove("activeBar")
    
        let positionToScroll = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)
        let scrollPositionNow = longBoxScroll.scrollLeft
    
        scrollToPosition(scrollPositionNow, positionToScroll)
        return turn++
    }
    if(turn === 3){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.add("activeBar")
       
        let positionToScroll = longBox.offsetWidth - longBoxScroll.offsetWidth
        let scrollPositionNow = longBoxScroll.scrollLeft
    
        scrollToPosition(scrollPositionNow, positionToScroll)
        return turn = 1
    }
},3000)

navButtons1.addEventListener('click', ()=>{
    navButtons1.classList.add("activeBar")
    navButtons2.classList.remove("activeBar")
    navButtons3.classList.remove("activeBar")
    let positionToScroll = 0
    let scrollPositionNow = longBoxScroll.scrollLeft

    scrollToPosition(scrollPositionNow, positionToScroll)
    
    clearInterval(switcheris)
})  
navButtons2.addEventListener('click', ()=>{
    navButtons1.classList.remove("activeBar")
    navButtons2.classList.add("activeBar")
    navButtons3.classList.remove("activeBar")

    let positionToScroll = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)
    let scrollPositionNow = longBoxScroll.scrollLeft

    scrollToPosition(scrollPositionNow, positionToScroll)

    clearInterval(switcheris)
})  
navButtons3.addEventListener('click', ()=>{
    navButtons1.classList.remove("activeBar")
    navButtons2.classList.remove("activeBar")
    navButtons3.classList.add("activeBar")
   
    let positionToScroll = longBox.offsetWidth - longBoxScroll.offsetWidth
    let scrollPositionNow = longBoxScroll.scrollLeft

    scrollToPosition(scrollPositionNow, positionToScroll)

    clearInterval(switcheris)
})

let isDown = false
let startX
let scrolledLeft

longBoxScroll.addEventListener('mousedown', (e)=>{
    isDown = true
    startX = e.pageX - longBoxScroll.offsetLeft
    scrolledLeft = longBoxScroll.scrollLeft

    turn = 0
})

longBoxScroll.addEventListener('mouseleave', ()=>{
    isDown = false

    let positionToScroll2 = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)
    let positionToScroll3 = longBox.offsetWidth - longBoxScroll.offsetWidth
    
    let scrollPositionNow = Math.floor(longBoxScroll.scrollLeft) 
    let puseBoxo = longBoxScroll.offsetWidth/2

    if(scrollPositionNow < positionToScroll2 - puseBoxo){

        navButtons1.classList.add("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.remove("activeBar")
        let positionToScroll = 0

        scrollToPosition(scrollPositionNow, positionToScroll)
    }

    if(scrollPositionNow >= positionToScroll2 - puseBoxo  && scrollPositionNow < positionToScroll3 - puseBoxo){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.add("activeBar")
        navButtons3.classList.remove("activeBar")
    
        let positionToScroll = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)

        scrollToPosition(scrollPositionNow, positionToScroll)
    }

    if(scrollPositionNow >= positionToScroll3 - puseBoxo){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.add("activeBar")
       
        let positionToScroll = longBox.offsetWidth - longBoxScroll.offsetWidth
        scrollToPosition(scrollPositionNow, positionToScroll)
    }
})

longBoxScroll.addEventListener('mouseup', ()=>{
    isDown = false

    let positionToScroll2 = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)
    let positionToScroll3 = longBox.offsetWidth - longBoxScroll.offsetWidth
    
    let scrollPositionNow = Math.floor(longBoxScroll.scrollLeft) 
    let puseBoxo = longBoxScroll.offsetWidth/2

    if(scrollPositionNow < positionToScroll2 - puseBoxo){

        navButtons1.classList.add("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.remove("activeBar")
        let positionToScroll = 0

        scrollToPosition(scrollPositionNow, positionToScroll)
    }

    if(scrollPositionNow >= positionToScroll2 - puseBoxo  && scrollPositionNow < positionToScroll3 - puseBoxo){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.add("activeBar")
        navButtons3.classList.remove("activeBar")
    
        let positionToScroll = longBox.offsetWidth - (longBoxScroll.offsetWidth*2)

        scrollToPosition(scrollPositionNow, positionToScroll)
    }

    if(scrollPositionNow >= positionToScroll3 - puseBoxo){
        navButtons1.classList.remove("activeBar")
        navButtons2.classList.remove("activeBar")
        navButtons3.classList.add("activeBar")
       
        let positionToScroll = longBox.offsetWidth - longBoxScroll.offsetWidth
        scrollToPosition(scrollPositionNow, positionToScroll)
    }

})

longBoxScroll.addEventListener('mousemove', (e)=>{
    if(!isDown){
        return
    }
    e.preventDefault()
    
    let x = e.pageX - longBoxScroll.offsetLeft

    let move =  x - startX

    longBoxScroll.scrollLeft = scrolledLeft - move
})

function scrollToPosition(positionNow, scrollTo){

    let addOnIteration = Math.floor((scrollTo - positionNow)/24)
    let currentValue = positionNow + addOnIteration

    let interval =  setInterval(() => {
        if(addOnIteration == 0){
            clearInterval(interval)
            longBoxScroll.scrollLeft = scrollTo
            return
        }
        longBoxScroll.scrollLeft += addOnIteration  
        currentValue += addOnIteration

        if(addOnIteration < 0){
            if(currentValue<scrollTo){
                longBoxScroll.scrollLeft = scrollTo
                clearInterval(interval)
            }
        }

        if(addOnIteration > 0 ){
            if(currentValue > scrollTo){
                longBoxScroll.scrollLeft = scrollTo
                clearInterval(interval)
            }
        }
    }, 16);
}