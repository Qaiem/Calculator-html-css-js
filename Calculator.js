// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {

    // Get reference to the input field
    var inputField = document.getElementById('calinp');

    // Get all the buttons
    var buttons = document.getElementsByClassName('buttons');

    // Attach click event listeners to all buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
            var buttonText = this.innerHTML;

            // Handle button actions based on button text
            switch (buttonText) {
                case '+':
                case '-':
                case '*':
                case '/':
                    inputField.value += ' ' + buttonText + ' ';
                    break;
                case '=':
                    try {
                        inputField.value = eval(inputField.value); // Using eval for simplicity; consider safer alternatives in production
                    } catch (e) {
                        inputField.value = 'Error';
                    }
                    break;
                case 'C':
                    inputField.value = '';
                    break;
                default:
                    inputField.value += buttonText;
                    break;
            }
        });
    }

});

