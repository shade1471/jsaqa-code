const puppeteer = require("puppeteer");
//const [url] = process.argv.slice(2);

(async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 500,
    args: ["--start-maximized"],
  });
  const page = await browser.newPage();
  await page.goto("https://netology.ru");

  const title = await page.title();

  //   expect(title).toEqual(
  //     "Нетология – курсы и обучение интернет-профессиям онлайн"
  //   );

  await page.close();
  await browser.close();
})();
