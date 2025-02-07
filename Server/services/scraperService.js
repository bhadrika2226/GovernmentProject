const { spawn } = require("child_process");
const path = require("path");

exports.runScraper = async () => {
    return new Promise((resolve, reject) => {
        console.log("⏳ Running Python scraper...");

        const pythonProcess = spawn("python3", [path.join(__dirname, "../../scripts/hello.py")]);

        pythonProcess.on("close", (code) => {
            console.log(`✅ Python script finished with exit code ${code}`);
            resolve();
        });

        pythonProcess.on("error", (err) => {
            console.error("❌ Failed to start Python script:", err);
            reject(err);
        });
    });
};
