const fs = require('fs');

let rawdata = fs.readFileSync('./env/env_props.json');
let props = JSON.parse(rawdata);
console.log(process.argv[2])
console.log(props['master'][process.argv[2]]);
