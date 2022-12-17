const os = require("os");
const say = require("./5-utils");

// info about current user
const user = os.userInfo();
say(user);

//method returns the system uptime in seconds
say(`The system updtime is ${os.uptime()} seconds.`);

const currentOs = {
  name: os.type(),
  release: os.release(),
  totalMemory: os.totalmem(),
  freeMemory: os.freemem(),
};

say(currentOs);
