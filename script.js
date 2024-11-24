

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickButton');
    const inputField = document.getElementById('keyboardInput');
    const keyDisplay = document.getElementById('keyDisplay');
    const form = document.getElementById('simpleForm');
    const formMessage = document.getElementById('formMessage');
    const focusBlurInput = document.getElementById('focusBlurInput');
    const focusBlurMessage = document.getElementById('focusBlurMessage');
    const buttonContainer = document.getElementById('buttonContainer');
    const delegationMessage = document.getElementById('delegationMessage');


    if (button) {
        button.addEventListener('mouseover', function () {
            this.textContent = 'Mouse is hovering';
        });

        button.addEventListener('mouseout', function () {
            this.textContent = 'Here is the button again';
        });

        // Handle click event 
        button.addEventListener('click', function () {
            alert('You clicked the button!');
            this.style.backgroundColor = 'lightblue';
        });
    }
    if (inputField && keyDisplay) {
        inputField.addEventListener('keydown', function (event) {
            keyDisplay.textContent = event.key;
        });
    }
    if (form) {
        form.addEventListener('submit', function (event) {
            event.preventDefault(); 
            if (formMessage) {
                formMessage.textContent = 'Good choice!';
                formMessage.classList.remove('hidden'); 
            }
        });
    }
    if (focusBlurInput && focusBlurMessage) {
        focusBlurInput.addEventListener('focus', function () {
            focusBlurMessage.textContent = 'Box is Blue.';
        });

        focusBlurInput.addEventListener('blur', function () {
            focusBlurMessage.textContent = "Box isn't blue";
        });
    }
    if (buttonContainer && delegationMessage) {
        buttonContainer.addEventListener('click', function (event) {
            if (event.target.tagName === 'BUTTON') {
                const message = event.target.dataset.message;
                delegationMessage.textContent = message;
            }
        });
    }
});
