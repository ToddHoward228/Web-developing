'use strict';
parent = document.getElementById("team");

let team_json = `{
    "team": [
        {
            "position": "Бекендер",
            "name": "Алі Ахмад Хасан",
            "age": 33,
            "photo": "shrek2.jpg"
        },
        {
            "position": "Тестувальник",
            "name": "Аман Кумар Шарма",
            "age": 25,
            "photo": "shrek1.jpg"
        },
        {
            "position": "TeamLead",
            "name": "Рахім Саїд Фарук",
            "age": 26,
            "photo": "shrek3.jpg"
        },
        {
            "position": "Менеджер",
            "name": "Ніха Патель Сінгх",
            "age": 45,
            "photo": "shrek4.jpg"
        }
    ]
}`;

team_json = JSON.parse(team_json);

addEventListener('load', (event) => {
    for (let employee of team_json.team) {
        let empl_card = document.createElement("div");
        empl_card.className = "coworker";

        let card_text = document.createElement("div");
        let card_img = document.createElement("div");

        card_text.insertAdjacentHTML('afterbegin', `<p>${employee.position}<br />${employee.name}</p>`)
        card_img.style.backgroundImage = `url('../Media/${employee.photo}')`;

        empl_card.append(card_text);
        empl_card.append(card_img);


        parent.appendChild(empl_card);
    }
})