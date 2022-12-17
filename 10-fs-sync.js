const say = require("./5-utils"); //i made this so that i could use say function insteady of console.log

const { readFileSync, writeFileSync } = require("fs");
say("start");
const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

say(first, second);

writeFileSync(
  "./content/result-sync.txt",
  `here is the result :  ${first}, ${second}`,
  { flag: "a" }
);
say("done with this task");
say("starting the next tast");
