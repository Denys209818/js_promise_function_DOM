"use strict";
function waitFor(element, eventName) {
    // write your code here
    return Promise.resolve(`It was ${eventName.toUpperCase()} on the element: ${element.nodeName}, id: ${element.id}.`);
}
const printMessage = (message)=>{
    // write your code here
    const div = document.createElement("div");
    div.classList.add("message");
    div.innerHTML = message;
    document.body.appendChild(div);
};
const loginField = document.getElementById("login");
const passwordField = document.getElementById("password");
const button = document.getElementById("submit");
waitFor(loginField, "click").then(printMessage);
waitFor(passwordField, "click").then(printMessage);
waitFor(button, "click").then(printMessage);
waitFor(loginField, "input").then(printMessage);
waitFor(passwordField, "input").then(printMessage);
waitFor(loginField, "blur").then(printMessage);
waitFor(passwordField, "blur").then(printMessage);
waitFor(button, "blur").then(printMessage);

//# sourceMappingURL=index.f75de5e1.js.map