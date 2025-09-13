import fs from "fs";
import path from "path";

// Resolve the output folder (../out relative to this script)
const outDir = path.join(__dirname, "..", "out");

// Create the .nojekyll file
fs.writeFileSync(path.join(outDir, ".nojekyll"), "");
console.log("Created out/.nojekyll");
