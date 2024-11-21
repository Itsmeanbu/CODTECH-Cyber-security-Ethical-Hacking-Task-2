function checkPasswordStrength() {
    const password = document.getElementById("password").value;
    const strengthMessage = document.getElementById("strength-message");
    const strengthBar = document.getElementById("strength-level");

    let strength = 0;
    const lengthCriteria = password.length >= 8;
    const lowercaseCriteria = /[a-z]/.test(password);
    const uppercaseCriteria = /[A-Z]/.test(password);
    const numberCriteria = /[0-9]/.test(password);
    const specialCharCriteria = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    // Check for criteria
    if (lengthCriteria) strength += 1;
    if (lowercaseCriteria) strength += 1;
    if (uppercaseCriteria) strength += 1;
    if (numberCriteria) strength += 1;
    if (specialCharCriteria) strength += 1;

    // Determine strength level
    if (strength <= 2) {
        strengthMessage.textContent = "Weak password";
        strengthBar.style.width = "25%";
        strengthBar.style.backgroundColor = "red";
    } else if (strength === 3) {
        strengthMessage.textContent = "Moderate password";
        strengthBar.style.width = "50%";
        strengthBar.style.backgroundColor = "orange";
    } else if (strength === 4) {
        strengthMessage.textContent = "Strong password";
        strengthBar.style.width = "75%";
        strengthBar.style.backgroundColor = "yellowgreen";
    } else if (strength === 5) {
        strengthMessage.textContent = "Very strong password";
        strengthBar.style.width = "100%";
        strengthBar.style.backgroundColor = "green";
    } else {
        strengthMessage.textContent = "Password too short";
        strengthBar.style.width = "0%";
    }
}
