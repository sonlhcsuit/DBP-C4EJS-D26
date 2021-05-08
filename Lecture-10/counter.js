let buttons = document.querySelectorAll(".btn")
let output = document.querySelector("#display")
let incr_btn = buttons[0]
let decr_btn = buttons[1]


function change(value) {
    output.innerHTML = parseInt(output.innerHTML) + value
}

incr_btn.addEventListener("click", function () {
    change(1)
})

decr_btn.addEventListener("click", () => {
    change(-1)
})
