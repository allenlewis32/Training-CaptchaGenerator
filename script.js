function check() {
  let checkCaptcha = document.querySelector('#checkCaptcha');
  let enteredValue = checkCaptcha.value;
  let captcha = document.querySelector('#captcha').innerHTML;
  let result = document.querySelector('#result');
  
  if(enteredValue === captcha) {
    result.innerHTML = 'Correct';
    result.style.color = 'green';
  } else {
    result.innerHTML = 'Incorrect';
    result.style.color = 'red';
    checkCaptcha.focus();
  }
}

function generateCaptcha() {
  let captcha = '';
  for(let i = 0; i < 7; i++) {
    let r = Math.floor(Math.random() * 62);
    let c;
    if(r < 26) {
      c = 65 + r;
    } else if(r < 52) {
      c = 97 + r - 26;
    } else {
      c = 48 + r - 52;
    }
    captcha += String.fromCharCode(c);
  }
  document.getElementById('captcha').innerHTML = captcha;
}
