const screen = document.querySelector(".black");
let currVal = 0;
let output = "0";
let func;


function updateScreen() {
    screen.innerText = output;
}

function enterInput(input) {
    if (isNaN(parseInt(input))) {
        saveSymb(input);
    } else {
        updateNum(input);
    }
    updateScreen();
}

function saveSymb(input) {
    switch (input) {
        case "C":
            output = "0";
            currVal = 0;
            break;
        case "←":
            if (buffer.length > 1) {
                output = output.substring(0, buffer.length - 1);
            } else {
                output = "0";
            }
            break;
        case "+":
        case "-":
        case "×":
        case "÷":
            doMath(input);
            output = "0";
            break;
        case "=":
            if (func != null) {
                doMath(input);
                output = currVal;
                currVal = 0;
                func = null;
            }
    }
}

function doMath(input) {
    let convertedOutput = parseInt(output);
    if (output != "0") {
        if (input != "=") {
            if (currVal === 0) {
                currVal = convertedOutput
                func = input;
                return;
            }
        }

        switch(func) {
            case "-":
                currVal -= convertedOutput;
                break;
            case "+":
                currVal += convertedOutput;
                break;
            case "÷":
                currVal /= convertedOutput;
                break;
            case "×":
                currVal *= convertedOutput;
                break;
        }

        if (input != "=") {
            func = input;
        }
    }
}

function updateNum(input) {
    if (output === "0") {
        output = input;
    } else {
        output += input;
    }
}

function init() {
    document.querySelector(".allbut").addEventListener("click",
        function(event){ enterInput(event.target.innerText); });
}

init();