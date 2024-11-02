'use strict';

let body = document.querySelector("body");

let join_menu = document.getElementById("join_menu");
let sigup_form = document.getElementById("signup");
let login_form = document.getElementById("login");



//0 - все закрите
//1 - join menu
//2 - signup
//3 - login
function UpdateState(number) {
    switch (number) {
        case 0:
            body.style.overflow = "initial";
            join_menu.style.display = "none";
            sigup_form.style.display = "none";
            login_form.style.display = "none";

            break;
        case 1:
            body.style.overflow = "hidden";
            join_menu.style.display = "block";
            sigup_form.style.display = "none";
            login_form.style.display = "none";

            break;
        case 2:
            body.style.overflow = "hidden";
            sigup_form.style.display = "block";
            login_form.style.display = "none";
            join_menu.style.display = "none";

            break;
        case 3:
            body.style.overflow = "hidden";

            sigup_form.style.display = "none";
            login_form.style.display = "block";
            join_menu.style.display = "none";


            break;
        default:
            console.log("Error, form state is undefined");
    }
};

