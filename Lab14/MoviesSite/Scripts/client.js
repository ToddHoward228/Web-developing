const PORT = 8080;
const ADDRESS = `http://localhost:${PORT}/movie`;

$(document).ready(() => {
    GetMoviesList();
})

function GetMoviesList() {

    let data = axios.get(ADDRESS)
        .then(res => res.data)
        .catch(error => console.error(error));

    Promise.resolve(data).then(data => {
        console.log(data);

        let inner_html = "";

        for (let row of data) {
            inner_html += "<tr>";

            row.release_date = row.release_date.slice(0, 4);

            for (let key in row) {
                inner_html += `<td>${row[key]}</td>`;
            }
            inner_html += "</tr>";
        }

        $("#table_body").html(inner_html);
    });
};


function Search() {

    let col = document.getElementById("search_col").value;
    let val = document.getElementById("search_val").value;

    let data = axios.get(ADDRESS + `/${col}/${val}`)
        .then(res => res.data)
        .catch(error => console.error(error));

    Promise.resolve(data).then(data => {
        console.log(data);

        let inner_html = "";

        for (let row of data) {
            inner_html += "<tr>";

            row.release_date = row.release_date.slice(0, 4);

            for (let key in row) {
                inner_html += `<td>${row[key]}</td>`;
            }
            inner_html += "</tr>";
        }

        $("#table_body").html(inner_html);
    });
};

function Add() {

    let name = document.getElementById("add_name").value;
    let type = document.getElementById("add_type").value;
    let release_date = document.getElementById("add_date").value;
    let score = document.getElementById("add_score").value;


    axios.post(ADDRESS, {
        headers: { 'Content-Type': 'application/json' },
        data: [name, type, release_date, score]
    }).then(res => {
        console.log(res.status);
        GetMoviesList();
    }).catch(error => console.error(error));

    
};

function Delete() {

    let name = document.getElementById("del_field").value;

    let data = axios.delete(ADDRESS + `/${name}`)
        .then(res => {
            console.log(res.status);
            GetMoviesList();
        }).catch(error => console.error(error));

 
};

function Drop() {
    axios.delete(ADDRESS + "/drop")
}