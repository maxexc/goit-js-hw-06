const formRef = document.querySelector(".login-form");
console.log(formRef);

formRef.addEventListener("submit", fillSubmit);

function fillSubmit(event) {
  event.preventDefault();
  const { email, password } = event.currentTarget.elements;

  // if (email.value === "" || password.value === "")
  if (!email.value || !password.value) {
    return alert("Please fill all fields!");
  }
  const submitData = { email: email.value, password: password.value };

  console.log(submitData);
  event.currentTarget.reset();
}
