// JavaScript source code
addEventListener('load', (event) => {
    let x;
    const userIP = fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(result => { x = result });
    console.log(x);
})