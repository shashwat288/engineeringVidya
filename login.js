
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword ,createUserWithEmailAndPassword,signOut,onAuthStateChanged} 
from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
 const firebaseConfig = {
   apiKey: "AIzaSyCzrsQdyqgnEG-Zru_Su3XoK4PRw6tLwRg",
   authDomain: "loginwith-40b3c.firebaseapp.com",
   projectId: "loginwith-40b3c",
   storageBucket: "loginwith-40b3c.appspot.com",
   messagingSenderId: "327718707105",
   appId: "1:327718707105:web:cd89eef58f9a924d2c35e0"
 };
 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);

// listen for the status changes 

// sign up form 
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit',(e)=>{
    e.preventDefault();

// geut user info
const email = signupForm['signup-email'].value;
const password = signupForm['signup-password'].value;
const name = signupForm['signup-name'].value;
console.log(name,email,password);
// SignUp The user  

createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    console.log(userCredential);
    const user = userCredential.user;
    const modal = document.querySelector('#modal-signup');
    // M.modal.getInstance(modal).close();
    signupForm.reset();
    location.replace("login.html");
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    // ..
  });

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    // get user info 
const email= loginForm['login-email'].value;
const password= loginForm['login-password'].value;
console.log(email,password);

signInWithEmailAndPassword(auth, email, password).then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...close the login modal and reset form
    const modal = document.querySelector('#modal-login');
    // M.modal.getInstance(modal).close();
    location.replace("https://shashwat288.github.io/engineeringVidya/");
    loginForm.reset();
    // console.log("login succesfull");
    // ...
   

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });


})


})