const wsse = require("wsse").UsernameToken;

module.exports = function(context) {
  const debug = context.request.getEnvironmentVariable("wsse_debug") === true;
  const nonceBase64 = context.request.getEnvironmentVariable("wsse_nonce_base64") === true;
  debug && console.log("auth-wsse plugin executing ...");
  if (context.request.hasHeader("X-WSSE")) {
    debug &&
      console.log(`[header] Skip setting default header X-WSSE. Already set.`);
    return;
  }
  const authData = authDataProvider(context);
  debug && console.log(authData);

  context.request.setHeader("X-WSSE", authData.getWSSEHeader({ nonceBase64: nonceBase64 }));
  debug &&
    console.log(`[header] Set X-WSSE header: ${authData.getWSSEHeader({ nonceBase64: nonceBase64 })}`);
};

function authDataProvider(context) {
  const username = context.request.getEnvironmentVariable("wsse_username");
  const password = context.request.getEnvironmentVariable("wsse_password");

  const sha1encoding = context.request.getEnvironmentVariable(
    "wsse_sha1encoding"
  );

  return new wsse({
    username: username,
    password: password,
    sha1encoding: sha1encoding // workaround for emarsys bad implementation
  });
}
