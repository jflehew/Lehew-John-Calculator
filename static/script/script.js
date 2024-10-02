let valuesArray = [];
let operator = "";
let index = 0;


function press(value){

    if(index === 0){
        if(value === "."){
            displayText.innerText = `${display.innerText}${value}`;
        }
        else if(displayText.innerText !== "0"){
            displayText.innerText = `${display.innerText}${value}`;
        }
        else if(displayText.innerText === "0"){
            displayText.innerText = value;
        }
        valuesArray[index] = display.innerText;
    }
    if(index === 1){
        if(displayText.innerText !== "+" && display.innerText !== "-" && displayText.innerText !== "/" && display.innerText !== "*"){
            displayText.innerText = `${display.innerText}${value}`;
        }    
        if(displayText.innerText === "+" || display.innerText === "-" || displayText.innerText === "/" || display.innerText === "*"){
            displayText.innerText = value;
        }
        valuesArray[index] = display.innerText;
    }
    console.log(valuesArray);
    // console.log(displayText.innerText);
}


function setOP(op){
    operator = op;
    // console.log(operator);
    displayText.innerText = operator;
    while(index < 1){
        index++;
    }


}

function clr(element){
    displayText.innerText = "0"
    valuesArray = [];
    console.log(valuesArray);
    index = 0;
}

function calculate(){
    value1 = parseFloat(valuesArray[0]);
    value2 = parseFloat(valuesArray[1]);
    console.log(operator);

    if(operator === "+"){
        let sum = value1 + value2;
        console.log(sum);
        displayText.innerText = sum;
        valuesArray.pop();
        valuesArray[0] = sum;
        operator = "";
    }
    if(operator === "-"){
        let difference = value1 - value2;
        console.log(difference);
        displayText.innerText = difference;
        valuesArray.pop();
        valuesArray[0] = difference;
        operator = "";
    }
    if(operator === "/"){
        let quotient = value1 / value2;
        console.log(quotient);
        displayText.innerText = quotient;
        valuesArray.pop();
        valuesArray[0] = quotient;
        operator = "";
    }
    if(operator === "*"){
        let product = value1 * value2;
        console.log(product);
        displayText.innerText = product;
        valuesArray.pop();
        valuesArray[0] = product;
        operator = "";
    }
}