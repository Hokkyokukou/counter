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

