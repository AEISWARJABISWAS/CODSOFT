var display = document.getElementById('result')


function calculate(val) {
    var x = document.getElementsByClassName('display')
    if (display.value == undefined) {
        display.value = ''
    }
    display.value += val

}

function clr() {
    display.value = ''
}

function operator() {
    var n1 = display.value;
    var n2 = eval(n1);
    if (n2 == 0.30000000000000004) {
        n2 = 0.3
    }
    // display.value = round(n2,2);
    display.value=n2
}
function percentage(){
    display.value=display.value/100
    
}
// function round(value, decimalPlaces) {
//     var multiplier = Math.pow(10, decimalPlaces);
//     return Math.round(value * multiplier) / multiplier;
// }


function backspace() {
    var eq = document.getElementsByClassName('display')
    display.value = display.value.slice(0, -1)
}


