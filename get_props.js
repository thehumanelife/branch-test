const fs = require('fs');

let rawdata = fs.readFileSync('./env/env_props.json');
let props = JSON.parse(rawdata);
console.log(props['master']['val']);
