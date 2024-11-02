let menu = document.querySelector("nav");

function ToggleMenu() {
    if (menu.className === "closed") {
        menu.className = "open";
    }
    else if (menu.className === "open") {
        menu.className = "closed";
    }
   
}