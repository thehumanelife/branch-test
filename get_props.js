const fs = require('fs');

const myargs = process.argv.slice(2);

let rawdata = fs.readFileSync('./env/env_props.json');
let props = JSON.parse(rawdata);
console.log(props['master'][process.argv[2]]);
