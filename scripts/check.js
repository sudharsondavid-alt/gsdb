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

const routes = [
  "login",
  "dashboard",
  "editorHome",
  "catalog",
  "recordEditor",
  "masters",
  "integrations",
  "sync",
  "extraction",
  "combinations",
  "validation",
  "reports",
  "operations",
  "importExport"
];

const app = { innerHTML: "" };
const toast = {
  className: "",
  textContent: "",
  classList: { add() {}, remove() {} },
  remove() {}
};
const body = { insertAdjacentHTML() {}, appendChild() {} };
const windowMock = { scrollTo() {}, clearTimeout, setTimeout };
const documentMock = {
  body,
  getElementById(id) {
    if (id === "app") return app;
    if (id === "toast") return toast;
    return { remove() {} };
  },
  createElement() {
    return { className: "", textContent: "", remove() {} };
  }
};
const localStorageMock = { getItem() { return null; }, setItem() {} };

const runnable = script.replace(/render\(\);\s*$/, `
  for (const route of __routes) {
    state.route = route;
    render();
    if (!document.getElementById("app").innerHTML) {
      throw new Error("Route rendered empty: " + route);
    }
  }
  for (const name of ["setRoute", "toast", "render", "openEditor", "closeEditor"]) {
    if (typeof window[name] !== "function") {
      throw new Error("Missing browser action: " + name);
    }
  }
`);

new Function("window", "document", "localStorage", "__routes", runnable)(
  windowMock,
  documentMock,
  localStorageMock,
  routes
);

console.log(`Prototype project check passed. ${routes.length} routes render and browser actions are available.`);
