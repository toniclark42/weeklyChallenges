const fs = require('fs');


const planets = fs.readFileSync('./easy.txt', 'utf-8');
console.log(planets)