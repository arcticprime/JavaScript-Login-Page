const userNameInput = document.getElementById("usernameInput");
const passwordInput = document.getElementById("passwordInput");
const button = document.getElementById("myButton");

button.addEventListener('click', start);

function start(){

    const userName = userNameInput.value;
    const password = passwordInput.value;

    if(userName === "Omar" && password === "omar"){
        console.log("correct");
    }else{
        console.log("incorrect");
    }
}