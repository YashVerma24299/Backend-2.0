const crypto = require("crypto");

const token1 = crypto.randomBytes(16).toString("hex");
const token2 = crypto.randomBytes(16).toString("hex");
console.log("token1: ",token1);
console.log("token2: ",token2);
// crypto.randomBytes() generates cryptographically secure random values used for tokens and keys.
// randomBytes  ->  Generate tokens


const hash1 = crypto.createHash("sha256").update("password").digest("hex");
const hash2 = crypto.createHash("sha256").update("password").digest("hex");
const hash3 = crypto.createHash("sha256").update("yash").digest("hex");
console.log("hash1: ",hash1);
console.log("hash2: ",hash2); // hash2==hash1
console.log("hash3: ",hash3);
// crypto.createHash() is used to hash data like passwords using algorithms such as SHA-256.