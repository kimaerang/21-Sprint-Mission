// 이메일 유효성 검사
export function validateEmail(emailInput, emailError) {
  const emailValue = emailInput.value.trim();
  
  if (emailValue === '') {
    emailInput.classList.add('error');
    emailError.textContent = '이메일을 입력해주세요.';
    return false;
  }
  
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailInput.classList.add('error');
    emailError.textContent = '잘못된 이메일 형식입니다';
    return false;
  }
  
  emailInput.classList.remove('error');
  emailError.textContent = '';
  return true;
}

// 비밀번호 유효성 검사
export function validatePassword(passwordInput, passwordError) {
  const passwordValue = passwordInput.value;
  
  if (passwordValue === '') {
    passwordInput.classList.add('error');
    passwordError.textContent = '비밀번호를 입력해주세요.';
    return false;
  }
  
  if (passwordValue.length < 8) {
    passwordInput.classList.add('error');
    passwordError.textContent = '비밀번호를 8자 이상 입력해주세요.';
    return false;
  }
  
  passwordInput.classList.remove('error');
  passwordError.textContent = '';
  return true;
}

// 닉네임 유효성 검사
export function validateNickname(nicknameInput, nicknameError) {
  const nicknameValue = nicknameInput.value.trim();
  
  if (nicknameValue === '') {
    nicknameInput.classList.add('error');
    nicknameError.textContent = '닉네임을 입력해주세요.';
    return false;
  }
  
  nicknameInput.classList.remove('error');
  nicknameError.textContent = '';
  return true;
}

// 비밀번호 확인 유효성 검사 
export function validateConfirmPassword(passwordInput, confirmPasswordInput, confirmPasswordError) {
  const passwordValue = passwordInput.value;
  const confirmPasswordValue = confirmPasswordInput.value;
  
  if (confirmPasswordValue === '') {
    confirmPasswordInput.classList.add('error');
    confirmPasswordError.textContent = '비밀번호를 입력해주세요.';
    return false;
  }
  
  if (passwordValue !== confirmPasswordValue) {
    confirmPasswordInput.classList.add('error');
    confirmPasswordError.textContent = '비밀번호가 일치하지 않습니다.';
    return false;
  }
  
  confirmPasswordInput.classList.remove('error');
  confirmPasswordError.textContent = '';
  return true;
}

// 비밀번호 보기
export function setupPasswordToggle(buttons) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const passwordField = button.previousElementSibling;
      const readOnlyText = button.querySelector('.read-only');
      
      if (passwordField.type === 'password') {
        passwordField.type = 'text';
        button.classList.remove('hide');
        readOnlyText.textContent = '비밀번호 보임';
      } else {
        passwordField.type = 'password';
        button.classList.add('hide');
        readOnlyText.textContent = '비밀번호 안보임';
      }
    });
  });
}