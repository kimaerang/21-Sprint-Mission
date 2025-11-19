import { validateEmail, validatePassword, setupPasswordToggle } from './validation.js';

// 요소 
const loginForm = document.getElementById('loginForm');
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');
const emailError = document.getElementById('email-error');
const passwordError = document.getElementById('password-error');
const loginButton = document.querySelector('.btn-login');
const pwHideButton = document.getElementById('pw-hide');

// 로그인 버튼 활성화
function updateLoginButton() {
  const isEmailValid = emailInput.value.trim() !== '' && !emailInput.classList.contains('error') && emailError.textContent === '';
  const isPasswordValid = passwordInput.value !== '' && !passwordInput.classList.contains('error') && passwordError.textContent === '';
  
  if (isEmailValid && isPasswordValid) {
    loginButton.classList.remove('disabled');
  } else {
    loginButton.classList.add('disabled');
  }
}

emailInput.addEventListener('blur', () => {
  validateEmail(emailInput, emailError);
  updateLoginButton();
});

passwordInput.addEventListener('blur', () => {
  validatePassword(passwordInput, passwordError);
  updateLoginButton();
});

emailInput.addEventListener('input', updateLoginButton);
passwordInput.addEventListener('input', updateLoginButton);


setupPasswordToggle([pwHideButton]);

loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isEmailValid = validateEmail(emailInput, emailError);
  const isPasswordValid = validatePassword(passwordInput, passwordError);
  
  if (isEmailValid && isPasswordValid) {
    window.location.href = '/items.html';
  }
});