function btnClick(val){
    let display = document.getElementById('display');
    if (display.value === "0") {
        display.value = val;
    } else {
        display.value += val;
    }
}

function clearBtn(){
    document.getElementById('display').value = "";
}

function eqlBtn(){
    let txt = document.getElementById('display').value;
    let result = eval(txt.replace('x','*'));
    document.getElementById('display').value = result
}

function backBtn(){
    var display = document.getElementById('display');
    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } else {
        display.value = "0";
    }
}
