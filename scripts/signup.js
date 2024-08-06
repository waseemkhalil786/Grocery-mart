import {createUserWithEmailAndPassword,auth } from "./firebase.js";

const form = document.querySelector(".signup-form");
const button = document.querySelector(".button-001");
const user = document.querySelector(".email");
const userPassword = document.querySelector(".password");

// console.log(form,button);
// console.log(user.value,userPassword);

form.addEventListener("submit", async (e) => {
  event.preventDefault();
  const userValue = user.value;
  const password = userPassword.value;
  // console.log(userValue);
  // console.log(password);
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      userValue,
      password
    );

    window.location.href = "../pages/login.html";
    // Get user from the userCredential
    const user = userCredential.user;
    // console.log(user);
    await user.updateProfile({
      displayName: fullName,
    });

    form.reset();
  } catch (error) {
    console.log(error);
    Swal.fire({
      title: "Wrong",
      text: error,
      icon: "error",
      footer: error.message,
    });
  }
});
