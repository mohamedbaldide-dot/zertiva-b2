import fs from "fs";
import path from "path";
import JavaScriptObfuscator from "javascript-obfuscator";

const assetsDir = "./dist/assets";

if (!fs.existsSync(assetsDir)) {
    console.log("❌ dist/assets not found");
    process.exit(1);
}

const files = fs.readdirSync(assetsDir);

for (const file of files) {
    if (!file.endsWith(".js")) continue;

    const fullPath = path.join(assetsDir, file);

    console.log("🔒 Obfuscating:", file);

    const source = fs.readFileSync(fullPath, "utf8");

    const obfuscated = JavaScriptObfuscator.obfuscate(source, {
        compact: true,
        controlFlowFlattening: true,
        controlFlowFlatteningThreshold: 0.75,
        deadCodeInjection: true,
        deadCodeInjectionThreshold: 0.4,
        identifierNamesGenerator: "hexadecimal",
        renameGlobals: false,
        stringArray: true,
        stringArrayEncoding: ["base64"],
        stringArrayShuffle: true,
        splitStrings: true,
        selfDefending: true,
        simplify: true
    });

    fs.writeFileSync(fullPath, obfuscated.getObfuscatedCode());

    console.log("✅ Finished:", file);
}

console.log("🎉 All JavaScript files have been obfuscated.");