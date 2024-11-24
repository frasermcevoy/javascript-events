

document.addEventListener('DOMContentLoaded', function () {
    const button = document.getElementById('clickButton');
    const inputField = document.getElementById('keyboardInput');
    const keyDisplay = document.getElementById('keyDisplay');


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
});
