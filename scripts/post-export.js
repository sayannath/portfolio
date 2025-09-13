"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var path_1 = require("path");
// Resolve the output folder (../out relative to this script)
var outDir = path_1.default.join(__dirname, "..", "out");
// Create the .nojekyll file
fs_1.default.writeFileSync(path_1.default.join(outDir, ".nojekyll"), "");
console.log("Created out/.nojekyll");
