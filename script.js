let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");
let displayValue = "";  // Store the current display value

// Loop through all buttons and add click event listeners
buttons.forEach(button => {
    button.addEventListener("click", function() {
        let buttonText = button.innerText;

        if (buttonText === "AC") {
            // Clear display
            displayValue = "";
            display.value = displayValue;
        } 
        else if (buttonText === "+/-") {
            // Toggle between positive and negative
            if (displayValue) {
                displayValue = String(-parseFloat(displayValue));
                display.value = displayValue;
            }
        }
        else if (buttonText === "%") {
            // Percentage calculation
            displayValue = (parseFloat(displayValue) / 100).toString();
            display.value = displayValue;
        }
        else if (buttonText === "=") {
            try {
                displayValue = displayValue.replace("÷", "/").replace("X", "*");
                displayValue = eval(displayValue); // Evaluate the expression
                display.value = displayValue;
            } catch (error) {
                display.value = "Error";
                displayValue = "";
            }
        }
        else {
            // Append clicked button value to displayValue
            if (buttonText === "÷" || buttonText === "X" || buttonText === "+" || buttonText === "-" || buttonText === ".") {
                displayValue += buttonText;
            } else {
                displayValue += buttonText;
            }
            display.value = displayValue; // Update display
        }
    });
});