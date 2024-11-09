const { Pool } = require('pg');
const express = require('express');
const cors = require('cors');
const parser = require('body-parser');
const EventEmitter = require('events');

//==================/   Preparation   /==================================||
const ee = new EventEmitter()
const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:27996'
}));

//=======================================================================||

//==================/    Data Base    /==================================||
const db = new Pool({
    user: "WebDeveloper",
    host: 'localhost',
    port: 5432,
    database: "WebDeveloping",
    password: '652345'
});

db.connect((err, client, release) => {
    if (err)
        console.error('Conected to PostgreSQL error', err.message);

    console.log("Conected to PostgreSQL successfully");
});
//=======================================================================||

//==================/  Metods handle  /==================================||
app.get('/movie', (req, res) => {

    db.query("SELECT * FROM Movies;", (err, result) => {
        if (err)
            console.error('Conected to PostgreSQL error', err.message);

        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(result.rows);
    });

    console.log("All data was brought out");
});

app.get('/movie/:col/:val', (req, res) => {

    let { col, val } = req.params;
    let query;

    if (typeof (val) == 'string')
        val = "'" + val + "'"

    db.query(`SELECT * FROM Movies WHERE ${col} = ${val};`, (err, result) => {
        if (err)
            console.error('Conected to PostgreSQL error', err.message);

        res.setHeader('Content-Type', 'application/json')
        res.status(200).json(result.rows);
    });

    console.log(`Data where ${col} = ${val} was brought out`);
});

app.get('/*', (req, res) => {

    res.status(204).send();
});

app.post('/movie', (req, res) => {

    let new_movie = req.body.data;

    db.query("INSERT INTO Movies(name, type, release_date, score) VALUES($1, $2, TO_DATE($3, 'YYYY'), $4)", new_movie, (err, result) => {
        if (err)
            console.error('Conected to PostgreSQL error', err.message);

        res.status(201).send("201 Created");
    });

    console.log(new_movie + "was added to data base");
});

app.delete('/movie/drop', (req, res) => {
    db.query("DROP TABLE Movies");

    console.log("Table was dropped");
})

app.delete('/movie/:val', (req, res) => {
    let val = req.params.val;

    val = val.replace('-', ' ');

    db.query(`DELETE FROM Movies WHERE name = '${val}';`, (err, result) => {
        if (err)
            res.status(400).send(err.message);
        else
            res.status(200).send("200 OK");
    });

    console.log(val + "was deleted from data base");
});


//=======================================================================||

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});