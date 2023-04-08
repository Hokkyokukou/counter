let counter = 0;

const counterControlButtons = document.querySelectorAll('.btn');
const counterValue = document.querySelector('#value');


function updateCounter(updatedValue) {
    if (updatedValue > 0) {
        counterValue.style.color = "green";
    }
    if (updatedValue < 0) {
        counterValue.style.color = "red";
    }
    if (updatedValue === 0) {
        counterValue.style.color = "#222";
    }
    counterValue.textContent = counter;
    localStorage.setItem('counter', counter);
}

function handleButtonClick(event) {
    const counterButtonStyles = event.currentTarget.classList;
    counterButtonStyles.contains("decrease") ? counter-- :
    counterButtonStyles.contains("increase") ? counter++ :
    counter = 0;
    updateCounter(counter);
}

for (counterButtonIndex = 0; counterButtonIndex < counterControlButtons.length; counterButtonIndex++) {
    counterControlButtons[counterButtonIndex].addEventListener('click', handleButtonClick);
}

function loadCounterValue() {
    const savedCounterValue = localStorage.getItem('counter');
    document.querySelector('#value').textContent = savedCounterValue;
    document.querySelector('#saved_value').textContent = `Value saved: ${savedCounterValue}`;
}

const loadButton = document.querySelector('#load_button');
loadButton.addEventListener('click', loadCounterValue);


//auto increment 1 second
var counterElement = document.createElement("div");
counterElement.id = "counter";
document.body.appendChild(counterElement);

function incrementCounter() {
    counter++;
    document.getElementById("counter").innerHTML = counter;
}

setInterval(incrementCounter, 1000);