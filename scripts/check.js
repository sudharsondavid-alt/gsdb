const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const index = fs.readFileSync(path.join(root, "index.html"), "utf8");
const scriptPath = path.join(root, "src", "main.js");
const script = fs.readFileSync(scriptPath, "utf8");

if (!index.includes("./src/styles.css")) {
  throw new Error("index.html is not linked to src/styles.css");
}

if (!index.includes("./src/main.js")) {
  throw new Error("index.html is not linked to src/main.js");
}

new Function(script);

console.log("Prototype project check passed.");
