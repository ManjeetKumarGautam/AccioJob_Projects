let num = 0
let res = document.getElementById("num");
const incrementBtn = document.getElementById("increment");
const decrementBtn = document.getElementById("decrement");
const clearBtn = document.getElementById("clear");
const warn = document.querySelector("#warn");


function updateDisplay() {
    res.textContent = num;

    // decrement.disabled = num == 0;
    // if (num == 0) {
    //     decrement.style.opacity = decrement.disabled ? 0.6 : 1;
    // }


}

incrementBtn.addEventListener("click", () => {
    num++;
    updateDisplay();
    if (num > 0) {
        warn.style.display = "none"
    }
});
decrementBtn.addEventListener("click", () => {
    if (num > 0) {
        num--;
        updateDisplay();
    }
    else {
        warn.style.display = "block"
    }
});
clearBtn.addEventListener("click", () => {
    num = 0;
    res.textContent = num;
})
updateDisplay();