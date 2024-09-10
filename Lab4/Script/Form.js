
let join_menu = document.getElementById("join_menu")
let sigin_form = document.getElementById("signin");
let login_form = document.getElementById("login");

function Login() {
    join_menu.style.display = "none";
    login_form.style.display = "block";
}

function Signin() {
    join_menu.style.display = "none";
    sigin_form.style.display = "block";

}

function JoinMenu() {
    login_form.style.display = "none";
    sigin_form.style.display = "none";
    join_menu.style.display = "block";
}