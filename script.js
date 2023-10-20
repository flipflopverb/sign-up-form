function checkPasswords() {
  const passA = document.getElementById('password').value;
  const passB = document.getElementById('confirmPassword').value;
  /*  alert('you pushed submit'); */
  if (passA == passB) {
    alert('match ' + passA + ' ' + passB);
    passA.className('valid');
    passB.className('valid');
    return true;
  } else {
    alert('do not match ' + passA + ' ' + passB);
    passA.className('invalid');
    passB.className('invalid');
    return false;
  }
}

/* const myform = document.getElementById('form');
myform.addEventListener('submit', checkPasswords); */
