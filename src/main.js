const signupForm = document.getElementById('signupform');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const confirmPasswordInput = document.getElementById('confirmPasswordInput');
const account = document.getElementById('account');
const extra = document.getElementById('extra');
const successMessage = document.getElementById('success');
const submitButton = document.getElementById('submitbutton');
const login = document.getElementById('login');
const signup = document.getElementById('signup');

login.addEventListener("click", () => {
    account.textContent = "Login to your account";
    extra.classList.add("hidden");
    submitButton.textContent = "Login";
});

signup.addEventListener("click", () => {
    account.textContent = "Create an account";
    extra.classList.remove("hidden");
    submitButton.textContent = "Submit";
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = emailInput.value;
    const password = passwordInput.value;
    const confirmPassword = confirmPasswordInput ? confirmPasswordInput.value : '';

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (submitButton.textContent === "Submit") {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        const userExists = users.find(user => user.email === email);

        if (userExists) {
            alert("User already exists! Please login.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Sign up successful! You can now log in.");
        window.location.href = 'chat.html'; 
    } else {
        const authenticatedUser = users.find(user => user.email === email && user.password === password);

        if (authenticatedUser) {
            window.location.href = 'chat.html'; 
        } else {
            alert("Invalid email or password! Please try again.");
        }
    }
});
