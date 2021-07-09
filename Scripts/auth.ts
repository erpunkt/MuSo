let signupForm: HTMLElement = document.querySelector("#signup-form");
signupForm?.addEventListener("submit", (e) => {
e.preventDefault();

//get user info

//let email = signupForm['signup-email'].value;

const email: HTMLElement = document.getElementById("signup-email");

//let password = signupForm['signup-password'].value;
const password: Element = document.getElementById("signup-password");

//signup the user
auth.createUserWithEmailandPassword(email, password);
const form: void = document.querySelector("#signup-form");

signupForm.reset();

});
