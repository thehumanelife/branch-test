const fs = require('fs');


let rawData = fs.readFileSync('./env/env_props.json');
const props = JSON.parse(rawData);

const branch = process.argv[3];
const propertyName = process.argv[2];

if (branch in props) console.log(props[branch][propertyName]);
else console.log('');