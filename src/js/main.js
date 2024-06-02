import "../scss/styles.scss";
import * as bootstrap from "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { productsFunc } from "./slider-list-products";

productsFunc()
  .then((result) => {
    return result;
  })
  .catch((err) => {
    console.log(err);
  });

////Modal
document.getElementById('accountButton').addEventListener('click', function(event) {
  event.preventDefault();
  let myModal = new bootstrap.Modal(document.getElementById('loginModal'));
  myModal.show();
});

document.getElementById('showRegister').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('registerForm').style.display = 'block';
});

document.getElementById('showLogin').addEventListener('click', function(event) {
  event.preventDefault();
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('registerForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let email = document.getElementById('registerEmail').value;
  let password = document.getElementById('registerPassword').value;
  let confirmPassword = document.getElementById('registerConfirmPassword').value;

  if (password !== confirmPassword) {
    alert('Passwords do not match');
    return;
  }

  alert('Registration successful');
  document.getElementById('registerForm').reset();
  document.getElementById('registerForm').style.display = 'none';
  document.getElementById('loginForm').style.display = 'block';
});

document.getElementById('loginForm').addEventListener('submit', function(event) {
  event.preventDefault();
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;

  alert('Login successful');
  document.getElementById('loginForm').reset();
  const myModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
  myModal.hide();
});




