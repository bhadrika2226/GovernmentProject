const scraperService = require("./scraperService");

(async () => {
    console.log("🚀 Running script via Railway Scheduler...");
    await scraperService.runScraper();
    console.log("✅ Task Completed!");
})();
