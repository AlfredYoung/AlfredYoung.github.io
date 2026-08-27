import { cp, mkdir, rm } from "node:fs/promises";

const output = "dist";
const files = ["index.html", "styles.css", "script.js", "CNAME", "assets"];
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await Promise.all(files.map((file) => cp(file, `${output}/${file}`, { recursive: true })));
console.log(`Built ${files.length} files into ${output}/`);
