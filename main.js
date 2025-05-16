// === TO DO ===
// - Prevent operator input if an operator is already on the display
// - Create `this.equalsClick()`:
//     • Takes `this.previousNumber`, `this.operator`, and `this.currentDisplay`
//     • Performs the correct calculation
//     • Updates `this.currentDisplay` with the result
//     • Sets `this.previousNumber = this.currentDisplay`
//     • Resets `this.operator` to an empty string
// - Add functionality for the decimal point ('.') button:
//     • If `!this.currentDisplay.includes('.')`, add '.'
//     • Else, do nothing








class Calculator{
    constructor(currentDisplay,previousNumber,displayScreen){
        this.currentDisplay = currentDisplay
        this.previousNumber = previousNumber
        this.displayScreen = displayScreen
        this.operator = ''
        
        
    }
    numClick(e){
        //Checking to see if the display is currently holding at least 1 element, and that element is NOT a number (confirming it's an operator basically)
        if (this.operator !== '' && isNaN(displayScreen.innerText)){
            this.displayScreen.innerText = ''
        }
        //Limits the number of characters on my display screen so it doesn't run out of the screen, kind of "rolls" the numbers by slicing the first one if a number is entered after the length is already max to mimick an actual calculator
        if (this.displayScreen.innerText.length >= 6){
            this.displayScreen.innerText = this.displayScreen.innerText.slice(1)
            this.displayScreen.innerText += e.target.value
        }
        //basically checking if there's either nothing, or less than 6 numbers on the display
        else{
            this.displayScreen.innerText += e.target.value
        }
        
    }
    operatorClick(e){
        // Setting the operator to the value of the operator button clicked, then setting the previous number to what's currently on the screen (should be a number of maximum 6 numbers in length), then sets the inner text value to the current operator
        this.operator = e.target.value
        this.previousNumber = this.displayScreen.innerText
        this.displayScreen.innerText = this.operator
        console.log(`Previous number: ${this.previousNumber} \n Operator: ${this.operator}`)
        
    }
    equalsClick(e){
        
    }
}
console.log(isNaN('+'))
const displayScreen = document.getElementById('displayScreen')
let numButtons = document.querySelectorAll('.numButton')
let operatorButtons = document.querySelectorAll('.operator')
const calculator = new Calculator('',0,displayScreen)

numButtons.forEach((button) => button.addEventListener('click',(e) => calculator.numClick(e)))
operatorButtons.forEach((button)=> button.addEventListener('click', (e)=> calculator.operatorClick(e)))