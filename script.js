const myCounter = () => {
    let counter = localStorage.getItem('counter') || 0;
    const buttons = document.querySelectorAll('.btn');

    const updateCounter = () => {
        const counterValue = document.querySelector('#value');
        if (counter > 0) {
            counterValue.style.color = 'green';
        }
        if (counter < 0) {
            counterValue.style.color = 'red';
        }
        if (counter === 0) {
            counterValue.style.color = '#222';
        }
        counterValue.textContent = counter;
        localStorage.setItem('counter', counter);
    };

    const handleButtonClick = (event) => {
        const counterButtonStyles = event.currentTarget.classList;
        counterButtonStyles.contains('decrease')
            ? counter--
            : counterButtonStyles.contains('increase')
            ? counter++
            : (counter = 0);
        updateCounter();
    };

    buttons.forEach(function (button) {
        button.addEventListener('click', handleButtonClick);
    });

    const loadCounterValue = () => {
        const savedCounterValue = localStorage.getItem('counter');
        document.querySelector('#value').textContent = savedCounterValue;
        document.querySelector(
            '#saved_value'
        ).textContent = `Value saved: ${savedCounterValue}`;
    };

    const loadButton = document.querySelector('#load_button');
    loadButton.addEventListener('click', loadCounterValue);

    const incrementCounter = () => {
        counter++;
        document.querySelector(
            '#auto_counter'
        ).textContent = `Auto counter: ${counter}`;
    };
    //auto increment every 1 second
    setInterval(function () {
        incrementCounter();
    }, 1000);
};

myCounter();