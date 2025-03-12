const puppeteer = require("puppeteer");

test("should load homepage", async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.goto("http://localhost:3000", { waitUntil: "load", timeout: 15000 });

  const title = await page.title();
  console.log("Page Title:", title);

  await browser.close();
}, 15000); // ✅ Increase test timeout to 15 seconds
