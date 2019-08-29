const { requestHooks } = require("./index.js");

const enviroment = {
  wsse_debug: true,
  wsse_username: "USERNAME",
  wsse_password: "PASSWORD",
  wsse_sha1encoding: "hex"
};

var newHeader = { "X-WSSE": null };

const context = {
  request: {
    hasHeader: headername => false,
    setHeader: (headername, content) => {
      newHeader[headername] = content;
      return newHeader;
    },
    getEnvironmentVariable: variablename => enviroment[variablename]
  }
};

requestHooks[0](context);

if (newHeader["X-WSSE"] !== null) {
  console.log("*** Test successful ***");
} else {
  exit(1);
}
