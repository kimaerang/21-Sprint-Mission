import { validateEmail, validatePassword, validateNickname, validateConfirmPassword, setupPasswordToggle } from './validation.js';

// 요소 
const signupForm = document.getElementById('signupForm');
const emailInput = document.getElementById('email-input');
const nicknameInput = document.getElementById('nickname-input');
const passwordInput = document.getElementById('password-input');
const confirmPasswordInput = document.getElementById('confirm-password');
const emailError = document.getElementById('email-error');
const nicknameError = document.getElementById('nickname-error');
const passwordError = document.getElementById('password-error'); 
const confirmPasswordError = document.getElementById('confirm-password-error');
const signupButton = document.querySelector('.btn-login');
const pwHideButtons = document.querySelectorAll('.btn-pw-view');

// 회원가입 버튼 활성화
function updateSignupButton() {
  const isEmailValid = emailInput.value.trim() !== '' && !emailInput.classList.contains('error') && emailError.textContent === '';
  const isNicknameValid = nicknameInput.value.trim() !== '' && !nicknameInput.classList.contains('error') && nicknameError.textContent === '';
  const isPasswordValid = passwordInput.value !== '' && !passwordInput.classList.contains('error') && passwordError.textContent === '';
  const isConfirmPasswordValid = confirmPasswordInput.value !== '' && !confirmPasswordInput.classList.contains('error') && confirmPasswordError.textContent === '';
  
  if (isEmailValid && isNicknameValid && isPasswordValid && isConfirmPasswordValid) {
    signupButton.classList.remove('disabled');
  } else {
    signupButton.classList.add('disabled');
  }
}

emailInput.addEventListener('blur', () => {
  validateEmail(emailInput, emailError);
  updateSignupButton();
});

nicknameInput.addEventListener('blur', () => {
  validateNickname(nicknameInput, nicknameError);
  updateSignupButton();
});

passwordInput.addEventListener('blur', () => {
  validatePassword(passwordInput, passwordError);
  updateSignupButton();
});

confirmPasswordInput.addEventListener('blur', () => {
  validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordError);
  updateSignupButton();
});

passwordInput.addEventListener('input', () => {
  if (confirmPasswordInput.value !== '') {
    validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordError);
  }
  updateSignupButton();
});

emailInput.addEventListener('input', updateSignupButton);
nicknameInput.addEventListener('input', updateSignupButton);
confirmPasswordInput.addEventListener('input', updateSignupButton);

setupPasswordToggle(pwHideButtons);

signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const isEmailValid = validateEmail(emailInput, emailError);
  const isNicknameValid = validateNickname(nicknameInput, nicknameError);
  const isPasswordValid = validatePassword(passwordInput, passwordError);
  const isConfirmPasswordValid = validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordError);
  
  if (isEmailValid && isNicknameValid && isPasswordValid && isConfirmPasswordValid) {
    window.location.href = 'login.html';
  }
});