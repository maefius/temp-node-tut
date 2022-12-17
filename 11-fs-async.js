const say = require("./5-utils"); //i made this so that i could use say function insteady of console.log

const { readFile, writeFile } = require("fs");
say("start");
readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    say(err);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      say(err);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `here is the result :  ${first}, ${second}`,
      (err, result) => {
        if (err) {
          say(err);
          return;
        }
        say("done with this task");
      }
    );
  });
});
say("starting next task");
