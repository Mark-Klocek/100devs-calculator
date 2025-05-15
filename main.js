let numButtons = document.querySelectorAll('button')
numButtons.forEach((button) => button.addEventListener('click',numberClick))

let displayScreen = document.getElementById("displayScreen")

function numberClick(e){
    if (displayScreen.innerText.length < 8){
        displayScreen.innerText += e.srcElement.innerText
        console.log(displayScreen.innerText)
    }
    else {
       displayScreen.innerText= displayScreen.innerText.slice(1)
       displayScreen.innerText += e.srcElement.innerText
    }
    
}