const signupForm = document.getElementById('signupform');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');
const account = document.getElementById('account');
const extra = document.getElementById('extra');
const extra1 = document.getElementById('extra1');
const successMessage = document.getElementById('success');
const submitButton = document.getElementById('submitbutton');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const sign = document.getElementById("sign");


login.addEventListener("click", () => {
    account.textContent = "Login to your account";
    extra.classList.add("hidden");   
    extra1.classList.remove("hidden"); 
    submitButton.textContent = "Login"; 
});

signup.addEventListener("click", () => {
    account.textContent = "Create an account";
    extra.classList.remove("hidden");   
    extra1.classList.add("hidden");  
    submitButton.textContent = "Sign Up";  
});

signupForm.addEventListener('submit', (e) => {
    e.preventDefault();  

    const email = emailInput.value;
    const password = passwordInput.value;

    let users = JSON.parse(localStorage.getItem('users')) || [];

    if (submitButton.textContent === "Sign Up") {
        const userExists = users.find(user => user.email === email);

        if (userExists) {
            alert("User already exists! Please login.");
            return;
        }

        users.push({ email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert("Sign up successful! You can now log in.");
        signupForm.reset();  
    } else {
        const authenticatedUser = users.find(user => user.email === email && user.password === password);

        if (authenticatedUser) {
            sign.classList.add("hidden");
            successMessage.classList.remove('hidden');
        } else {
            alert("Invalid email or password! Please try again.");
        }
    }
});
