function myCounter() {
    let counter = 0;
    const buttons = document.querySelectorAll('.btn');

    function updateCounter(updatedValue) {
        const counterValue = document.querySelector('#value');
        if (updatedValue > 0) {
            counterValue.style.color = "green";
        }
        if (updatedValue < 0) {
            counterValue.style.color = "red";
        }
        if (updatedValue === 0) {
            counterValue.style.color = "#222";
        }
        counterValue.textContent = updatedValue;
        localStorage.setItem('counter', updatedValue);
    }

    function handleButtonClick(event) {
        const counterButtonStyles = event.currentTarget.classList;
        counterButtonStyles.contains("decrease") ? counter-- :
        counterButtonStyles.contains("increase") ? counter++ :
        counter = 0;
        updateCounter(counter);
    }

    buttons.forEach(function(button) {
        button.addEventListener('click', handleButtonClick);
    });
    
    function loadCounterValue() {
        const savedCounterValue = localStorage.getItem('counter');
        document.querySelector('#value').textContent = savedCounterValue;
        document.querySelector('#saved_value').textContent = `Value saved: ${savedCounterValue}`;
    }
    
    const loadButton = document.querySelector('#load_button');
    loadButton.addEventListener('click', loadCounterValue);
    
    function incrementCounter() {
        counter++;
        document.querySelector('#auto_counter').textContent = `Auto counter: ${counter}`;
    }
    //auto increment every 1 second
    setInterval(function() {
        incrementCounter();
    }, 1000);

}

myCounter();