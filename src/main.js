const email = document.querySelector('input[type="email"]');
const password = document.getElementById("password");
const submit = document.getElementById("submit");
const submit2 = document.getElementById("submit2");
const login = document.getElementById("login");
const extra = document.getElementById("extra");
const extra1 = document.getElementById("extra1");
const account =   document.getElementById("account");
const submitbutton = document.getElementById("submitbutton");

login.addEventListener("click", () => {
account.textContent = "Login to your account";
    extra.classList.add("hidden");
  extra1.classList.remove("hidden");
  submitbutton.textContent = "Login";


})

signup.addEventListener("click", () => {
  account.textContent = "Create an account";
  extra.classList.remove("hidden");
  extra1.classList.add("hidden");
  submitbutton.textContent = "Submit";

})



