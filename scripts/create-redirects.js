const fs = require("fs");
const path = require("path");

const outDir = path.resolve(process.cwd(), "dist");
const redirectsPath = path.join(outDir, "_redirects");

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(redirectsPath, "/* /index.html  200\n", "utf8");
console.log("Created", redirectsPath);
