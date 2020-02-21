const package = require('to-title-case');
console.log(package);

const lower = ('the lord of the rings: the return of the king');
const title = package(lower)

console.log(title);