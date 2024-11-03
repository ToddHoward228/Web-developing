// JavaScript source code
addEventListener('load', async (event) => {

    const user_IP = await fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error(error))

    const user_info = await fetch(`http://ip-api.com/json/${user_IP.ip}?fields=message,country,regionName,city,district,zip,lat,lon,timezone,isp,org,as,mobile,proxy,query`)
        .then(response => response.json())
        .then(result => result)
        .catch(error => console.error(error))

    console.log(user_info);
})

navigator.geolocation.getCurrentPosition((position) => {
    console.log(position.coords.latitude, position.coords.longitude);
});



//var myHeaders = new Headers();
//myHeaders.append('X-Api-Key', 'L39uBqt8r2p2HCtN7BmWfA==nVMi5YfN7Fzcj8au');

//let fact = fetch("https://api.api-ninjas.com/v1/facts", {
//    method: 'GET',
//    headers: myHeaders })
//    .then(response => response.json())
//    .then(result => result)

//console.log(fact);

//const xhr = new XMLHttpRequest();

//xhr.open('GET', 'https://api.api-ninjas.com/v1/facts', true);

//xhr.onload = () => {
//    if (xhr.status === 200) {
//        const data = JSON.parse(xhr.responseText);
//        console.log(data);
//    }
//    else
//        console.error('Error');
//}

const api_key = 'L39uBqt8r2p2HCtN7BmWfA==nVMi5YfN7Fzcj8au';

function GetFact() {
    try {
        axios.get('https://api.api-ninjas.com/v1/facts', {
            headers: { 'X-Api-Key': api_key }
        }).then(response => {
            $('#facts_cntnr').prepend(`<div class="fact_block">${response.data[0].fact} </div>`);
        });        
      
    } catch (error) {
        console.error('Помилка отримання даних:', error);
    }
}

GetFact();
