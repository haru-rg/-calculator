const display = document.getElementById("display");

function edit(elem) {
    display.value = display.value + elem.value;
    console.log(display.value);
}

function calc() {
    display.value = eval(display.value);
}

function clearAC() {
    display.value = "";
}