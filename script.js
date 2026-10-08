const myButton = document.querySelector('#reveal-btn');
const myMessage = document.querySelector('#special-message');

myButton.addEventListener('click', function() {
    myMessage.classList.toggle("hidden");
});