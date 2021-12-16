const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const link = document.querySelector("a");


function onLoginSubmit(event) {
    event.preventDefault();
    console.log(loginInput.value);
}

function handleLinkClick() {
    alert("wait a minute lol");
}
// alert blocks any default behavior (and that's the reason why we don't use alert anymore.)

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick)