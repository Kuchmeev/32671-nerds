var link = document.querySelector(".button-message");
var popup = document.querySelector(".modal-window");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector(".form-name-field");
var email = popup.querySelector("#email-field");

link.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal-window-show");
})

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal-window-show");
    popup.classList.remove("modal-error");
})

form.addEventListener("submit", function (evt) {
    if (!login.value || !email.value) {
        evt.preventDefault();
        popup.classList.remove("modal-error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("modal-error");
    } 
})

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal-window-show")) {
            evt.preventDefault();
            popup.classList.remove("modal-window-show");
        }
    }
})

