import { auth, signInWithEmailAndPassword } from "./firebase.js";

const form = document.querySelector(".login-form");
const emailInput = document.querySelector(".email");
const passwordInput = document.querySelector(".password");
const button = document.querySelector(".button01");

// console.log(form,emailInput,passwordInput,button);
form.addEventListener("submit", async (event) => {
  event.preventDefault();
  button.innerText = "loading...";
  const email = emailInput.value;
  const password = passwordInput.value;

  try {
    button.value = "loading...";
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    // const user = userCredential.user;
    console.log("user...", userCredential);

    window.location.href = "../pages/dashboard.html";

    form.reset();
  } catch (error) {
    button.innerText = "Login form";
    console.log(error);
    Swal.fire({
      title: "Wrong",
      text: error,
      icon: "error",
      footer: error.message,
    });
  }
});
