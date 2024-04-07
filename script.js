const header = document.querySelector("header");

window.addEventListener("scroll",function() {
    header.classList.toggle("sticky", window.scrollY > 60)
});
// Select elements
const emailForm = document.getElementById('email-form');
const emailInput = document.getElementById('email');


// Submit form and handle redirection
emailForm.addEventListener('submit', function(event) {
  event.preventDefault();
  const enteredEmail = emailInput.value;
  redirectToLogin(enteredEmail);
});
