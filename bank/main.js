const showBtn = document.getElementById("showPassword");
// grab the checkbox that hide/show password

console.log(showBtn);

showBtn.onchange = function (e) {
  console.log(e.target.checked);
  const password = document.getElementById("password");

  
  if (e.target.checked) {
    password.type = "text";
  } else {
    password.type = "password";
  }
};

// form validation
document.getElementById("form").onsubmit = function (e) {
  e.preventDefault();
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const password = document.getElementById("password");
  const firstnameError = document.getElementById("firstnameError");
  const lastnameError = document.getElementById("lastnameError");
  const passwordError = document.getElementById("passwordError");
  firstnameError.innerHTML = "";
  lastnameError.innerHTML = "";
  passwordError.innerHTML = "";
  if (firstname.value.length < 6) {
    firstnameError.innerHTML = "First name should be greater than 5";
    return;
  }
  if (firstname.value.length > 15) {
    firstnameError.innerHTML = "First name should be less than 16";
    return;
  }
  if (lastname.value.length < 6) {
    lastnameError.innerHTML = "last name should be greater than 5";
    return;
  }
  if (lastname.value.length > 15) {
    lastnameError.innerHTML = "last name should be less than 16";
    return;
  }
  if (password.value.length < 8) {
    passwordError.innerHTML = "password should be greater than 8";
    return;
  }
  if (password.value.length > 16) {
    passwordError.innerHTML = "password should be less than 16";
    return;
  }
  firstname.value = "";
  lastname.value = "";
  password.value = "";
  alert("Registration successful!");
};
