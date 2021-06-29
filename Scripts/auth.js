"use strict";
const signupForm = document.querySelector("#signup-form");
signupForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    //get user info
    //let email = signupForm['signup-email'].value;
    const email = document.getElementById("signup-email");
    //let password = signupForm['signup-password'].value;
    const password = document.getElementById("signup-password");
    //signup the user
    auth.createUserWithEmailandPassword(email, password);
    const form = document.querySelector("#signup-form");
    signupForm.reset();
});
//# sourceMappingURL=auth.js.map