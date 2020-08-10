const fs = require('fs');

const myargs = process.argv;

let rawdata = fs.readFileSync('./env/env_props.json');
let props = JSON.parse(rawdata);
console.log(myargs);
// console.log(props['master'][process.argv[2]]);
