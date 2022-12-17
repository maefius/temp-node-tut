const say = require("./5-utils"); //i made this so that i could use say function insteady of console.log

const path = require("path");

say(path.sep);

const filePath = path.join("/content/", "/subfolder", "text.txt");
say(filePath);

const base = path.basename(filePath);
say(base);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
say(absolute);
