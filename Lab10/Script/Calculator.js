let info_text = document.getElementById("calc_add_info").lastElementChild;
let toggle_info = document.getElementById("calc_show_add_info");

let rad_box = document.getElementById("calc_rad");
let heigt_box = document.getElementById("calc_height");
let len_box = document.getElementById("calc_length")

toggle_info.addEventListener("change", (event) => {
    
    if (event.target.checked)        
        info_text.style.display = "inherit";
    else
        info_text.style.display = "none";
});

function Calculate() {


    let output_box = document.getElementById("calc_result")

    let R = +rad_box.value;
    let H = +heigt_box.value;

    if (!R || !H) {
        alert("Знчення не можуть бути різними 0, чи бути відсутніми");

        output_box.innerHTML = "—";

        if (!R) {
            rad_box.value = "";
            rad_box.placeholder = "Введіть значення";
            rad_box.classList.add("form_error");
        }
        if (!H) {
            heigt_box.value = "";
            heigt_box.placeholder = "Введіть значення";
            heigt_box.classList.add("form_error");
        }

        return;
    }

    let L = Math.sqrt(Math.pow(R, 2) + Math.pow(H, 2));

    len_box.value = L;

    
    let result = Math.PI * R * (R + L);

    output_box.innerHTML = result;
}

rad_box.addEventListener("focus", () => {
    rad_box.classList.remove("form_error")
});

heigt_box.addEventListener("focus", () => {
    heigt_box.classList.remove("form_error")
});


