const http = require('http')

const PORT = 8080;

let data = ['Star Wars', 'Film', "2013", 8];

let req_param = "/Blade-Runner"

let options = [
    {
        hostname: 'localhost',
        method: 'GET',
        port: PORT,
        path: '/movie'
    },
    {
        hostname: 'localhost',
        method: 'POST',
        port: PORT,
        path: '/movie',
        headers: {
            'Content-Type': 'application/json'
        }
    },
    {
        hostname: 'localhost',
        method: 'DELETE',
        port: PORT,
        path: '/movie' + req_param
    }

]

//let req = http.request(options[0], (res) => {
//    res.on('data', (data) => {
//        console.log(JSON.parse(data));
//    });
//});

let req = http.request(options[1], (res) => {
    console.log(res.statusCode);
});
req.write(JSON.stringify(data));

//let req = http.request(options[2], (res) => {
//    console.log(res.statusCode);
//});

req.end();

req.on('error', (err) => {
    console.error('Error ' + err.message);
})
