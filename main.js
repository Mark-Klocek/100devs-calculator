class Calculator{
    constructor(currentDisplay,previousNumber,displayScreen){
        this.currentDisplay = currentDisplay
        this.previousNumber = previousNumber
        this.displayScreen = displayScreen
        
        
    }
    numClick(e){
        console.log(this.previousNumber)
        this.currentDisplay += e.target.value
        this.displayScreen.innerText = this.currentDisplay
        
    }
    operatorClick(e){
        this.previousNumber = this.currentDisplay
        this.currentDisplay = e.target.value
        this.displayScreen.innerText = this.currentDisplay
    }
}

const displayScreen = document.getElementById('displayScreen')
let numButtons = document.querySelectorAll('.numButton')
let operatorButtons = document.querySelectorAll('.operator')
const calculator = new Calculator('',0,displayScreen)

numButtons.forEach((button) => button.addEventListener('click',(e) => calculator.numClick(e)))
operatorButtons.forEach((button)=> button.addEventListener('click', (e)=> calculator.operatorClick(e)))