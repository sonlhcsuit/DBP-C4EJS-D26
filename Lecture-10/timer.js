let start_btn = document.querySelector("#start")
let stop_btn = document.querySelector("#stop")
let time = document.querySelector("#time")
let display = document.querySelector("#display")
let interval = null;


function change(value){
    let remain = parseInt(display.innerHTML)
    if (remain == 0 ){
        clearInterval(interval)
        interval = null
        alert("Time Up!")
        // stop timer?
    }else{
        display.innerHTML = remain + value
    }
}
function tick(){
    console.log("Run timer")
    change(-1)
}
// setInterval()
// clearInterval()

start_btn.addEventListener("click",()=>{
    display.innerHTML = time.value
    // start_btn.disabled = true
    if (interval == null){
        interval = setInterval(tick,1000)
    }
})

stop_btn.addEventListener("click",()=>{
    clearInterval(interval)
    interval = null
})
