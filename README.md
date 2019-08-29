# **insomnia-plugin-auth-wsse**

This plugin creates a WSSE auth token based on values configured in **insomnia environment variables**
and adds it to the request header in the format of `X-WSSE: UsernameToken Username="USERNAME", PasswordDigest="OGQ2NWUxODdlOTJmYWE1NWRiYjczY2FlNzI1NTQ1ZDM2NjgyNGE3ZA==", Nonce="972390e2a6cc92822e1c", Created="2019-08-28T16:09:28.910Z"`.
If your insomnia request already has a X-WSSE header the plugin **WILL NOT** override it.

Compulsory environment variables used by this insomnia plugin are:

```
{
  "wsse_username": "",
  "wsse_password": "",
}
```

**Optional:**

- set `"wsse_sha1encoding": "hex"` for Emarsys API - Default: `"base64"` all options `"base64" | "latin1" | "hex"`
- set `"wsse_debug": true` to log to console Insomnia -> View -> Toggle DevTool

### To install plugin manually

1.  Checkout this repository;
2.  run `npm i` or `yarn install`
3.  Copy source code to insomnia plugins directory(see paths below);
4.  Create environment variables(see structure above) with your values;

- **_MacOS_:** ~/Library/Application\ Support/Insomnia/plugins/

- _**Windows**_: %APPDATA%\Insomnia\plugins\

- _**Linux**_: \$XDG_CONFIG_HOME/Insomnia/plugins/ or ~/.config/Insomnia/plugins/