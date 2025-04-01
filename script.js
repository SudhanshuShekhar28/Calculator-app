let display = document.getElementById('display');

function appendToDisplay(value) {
    if (display.innerText === '0' && value !== '.') {
        display.innerText = value;
    } else {
        display.innerText += value;
    }
}

function clearDisplay() {
    display.innerText = '0';
}

function calculate() {
    try {
        // Replace × with * for calculation
        let expression = display.innerText.replace(/×/g, '*');
        let result = eval(expression);
        
        // Display result or error
        if (isFinite(result)) {
            display.innerText = result.toString();
        } else {
            display.innerText = 'Error';
        }
    } catch (error) {
        display.innerText = 'Error';
    }
}