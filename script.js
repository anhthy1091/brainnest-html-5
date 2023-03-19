var display = document.getElementsByClassName("display")[1]
var formula = document.getElementsByClassName("display")[0]
var currentOperator = ""
var currentNumber = ""
var prevNumber = ""


document.getElementById("clr").addEventListener("click",function(){
    currentNumber="0";
    update(currentNumber)})

document.getElementById("ac").addEventListener("click",function(){
    currentNumber="0";prevNumber="0"
    update(currentNumber)})

document.getElementById("del").addEventListener("click",function(){
    currentNumber = currentNumber.substring(0,currentNumber.length - 1);
    update(currentNumber)})

document.getElementById("point").addEventListener("click",function(){
    if(!(currentNumber.includes(".")))
    {currentNumber += "."}
    update(currentNumber)
})

Array.from(document.getElementsByClassName("number")).forEach(num => num.addEventListener("click",number))

Array.from(document.getElementsByClassName("operator")).forEach(op => op.addEventListener("click",operator))

document.getElementById("equal").addEventListener("click",calc)


function number(elem){
    if(display.textContent[0] == "0")
    {   currentNumber = elem.target.textContent}

    else
    {if(currentNumber.length < 6)
    {currentNumber += elem.target.textContent}}

    update(currentNumber)
}

function operator(elem){
    prevNumber = currentNumber
    currentNumber = "0"
    currentOperator = elem.target.textContent
    updateFormula()
    update(currentNumber)
}

function calc()
{
    updateFormula()
    switch(currentOperator){
        case "/":
            currentNumber = (parseFloat(prevNumber) / parseFloat(currentNumber)).toString()
            break;
        case "x":
            currentNumber = (parseFloat(currentNumber) * parseFloat(prevNumber)).toString()
            break;
        case "+":
            currentNumber = (parseFloat(currentNumber) + parseFloat(prevNumber)).toString()
            break;
        case "-":
            currentNumber = (parseFloat(prevNumber) - parseFloat(currentNumber)).toString()
            break;
    }
    currentNumber = (Math.floor(parseFloat(currentNumber)*100)/100).toString()
    prevNumber = "0"
    update(currentNumber)
}

function update(numberToDisplay){
    if(currentNumber == ""){
        currentNumber = "0";
        numberToDisplay=currentNumber
    }
    updateFormula()
    display.textContent = numberToDisplay
}
function updateFormula(){
    formula.textContent = prevNumber + currentOperator + currentNumber
}