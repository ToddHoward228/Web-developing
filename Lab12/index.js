//const fs = require('fs');
import * as fs from 'fs';
import { EventEmitter } from 'node:events';
import { Transform } from 'node:stream';
import { think } from 'cowsay';

//²í³ö³àë³çàö³ÿ

let rand_text = {
    path: "Rand_Text.txt",
    text: "The cosmos lay silent, vast and indifferent, holding forgotten planets and dead stars whose light faded eons ago into the void. There was no memory, no future—only an endless darkness swallowing every spark that dared to exist. Light traveled through this emptiness in vain, dissipating after billions of years, with nothing waiting to receive it. Even time seemed to abandon its course here, leaving a hollow stillness as a ghostly echo of all that once was… and would never be again."
}

const myEE = new EventEmitter();
const sin = fs.createReadStream(rand_text.path, 'utf-8');
const sout = fs.createWriteStream("text_stream.txt");
const smod = new Transform({
    transform(chunk, encoding, callback) {
        let mod = chunk.toString();
        mod = mod.replace(/[\s\W]/g, '');
        callback(null, mod);
    }
})

myEE.on('fileread', () => { console.log("The file has been read"); })
sout.on('finish', () => { console.log("stream written down successfully"); })
sout.on('error', (err) => { console.log(err); })

//Ðîáîòà ç òåêñòîì

fs.writeFile(rand_text.path, rand_text.text, (err) => { console.log(err) });

fs.readFile(rand_text.path, 'utf-8', (err, data) => {
    if (err)
        console.log(err);
    else {
        console.log(data);
        myEE.emit('fileread')

        sin.pipe(smod).pipe(sout)
    }

})
