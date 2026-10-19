const form = document.getElementById('form');

const name = document.getElementById('name');
const email = document.getElementById('email');
const message = document.getElementById('message');

const nameError = document.getElementById('name-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('message-error');

const successMessage = document.getElementById('success-message');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;
    nameError.innerHTML = "";
    emailError.innerHTML = "";
    messageError.innerHTML = "";
    if (name.value.length === 0) {
        nameError.innerHTML = "Name field should not be empty!";
        name.classList.add("input-error");
        valid = false;
    } else if (name.value.length < 2) {
        nameError.innerHTML = "Name field should not be less than 2 characters!";
        name.classList.add("input-error");
        valid = false;
    } else {
        name.classList.remove("input-error");
    }

    if (email.value.length === 0) {
        emailError.innerHTML = "Email field should not be empty!";
        email.classList.add("input-error");
        valid = false;
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
        emailError.innerHTML = "This is not a valid email form!";
        email.classList.add("input-error");
        valid = false;
    } else {
        email.classList.remove("input-error");
    }

    if (message.value.length === 0) {
        messageError.innerHTML = "Message field should not be empty!";
        message.classList.add("input-error");
        valid = false;
    } else if (message.value.length < 10) {
        messageError.innerHTML = "Message field should not be less than 10 characters!";
        message.classList.add("input-error");
        valid = false;
    } else {
        message.classList.remove("input-error");
    }
    if (valid) {
        form.classList.add("hidden");
        successMessage.classList.remove("hidden")

    }
})