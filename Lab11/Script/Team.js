'use strict';

const path = "Media/";

addEventListener('load', (event) => {

    axios.get('team.json', {
        headers: {
            dataType: 'json'
        }
    }).then(response => {

        let parent = document.getElementById("team");

        let employee = response.data;

        for (let i = 0; i < employee.length; i++) {
            let empl_card = document.createElement("div");
            empl_card.className = "coworker";

            let crd_txt = document.createElement("div");
            let crd_img = document.createElement("div");

            let ct_img_state = localStorage.getItem(i);

            let ct_img = `<img src="${path + (ct_img_state === "on" ? "Like.svg" : "Unlike.svg")}" data-state="${ct_img_state}" data-id="${i}" />`;

            crd_txt.insertAdjacentHTML('afterbegin',
                `<p style="grid-area: pos">${employee[i].position}</p>
                <p style="grid-area: name">${employee[i].name}</p>
                <div>
                    ${ct_img}
                    ${employee[i].likes}
                </div>`)
            crd_img.style.backgroundImage = `url('${path + employee[i].photo}')`;


            empl_card.append(crd_txt);
            empl_card.append(crd_img);

            parent.appendChild(empl_card);
        }


        $(".coworker img[data-id]").on('click', (event) => {
            let element = event.target;

            if (element.dataset.state == "off") {
                element.src = path + "Like.svg";
                element.dataset.state = "on";
                localStorage.setItem(element.dataset.id, element.dataset.state);
            } else {
                element.src = path + "Unlike.svg";
                element.dataset.state = "off";
                localStorage.setItem(element.dataset.id, element.dataset.state);
            }
        });
    });
});

