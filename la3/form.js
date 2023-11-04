document.getElementById("registrationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting normally
    // Get form elements
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const termsCheckbox = document.getElementById("terms");
    // Validate form elements
    if (nameInput.value.trim() === "") {
        alert("Please enter your name.");
        nameInput.focus();
        return;
    }
    if (emailInput.value.trim() === "") {
        alert("Please enter your email address.");
        emailInput.focus();
        return;
    }
    // Simple email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        alert("Please enter a valid email address.");
        emailInput.focus();
        return;
    }
    if (passwordInput.value.trim() === "") {
        alert("Please enter a password.");
        passwordInput.focus();
        return;
    }
    if (!termsCheckbox.checked) {
        alert("Please agree to the Terms and Conditions.");
        return;
    }
    // If all validations pass, show a confirmation message and reset the form
    const isConfirmed = confirm("Are you sure you want to submit this form?");
    if (isConfirmed) {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
    }
})
