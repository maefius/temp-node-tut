// npm glabal comand, comes wth node
// npm --version

//local dependencey - use it only in the particular project
// npm i <packageName>

// global - use it in any project
// npm instal -g <packageName>
// sudo instal -g <packageName> (mac)

//package.json - manifest file (stores important infor about project/package)
//manual approach - create package.json in the root, create properties etc)
//npm init (step by step, press enter to skip)
//npm init -y (eveything default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
