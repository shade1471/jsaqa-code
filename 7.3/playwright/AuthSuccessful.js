const { chromium } = require("playwright");

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 300
        //devtools: true
    });
    const page = await browser.newPage();

    await page.goto("https://netology.ru/?modal=sign_in");

    // await page.click("[placeholder='Email']", { force: true });

    await page.fill("[placeholder='Email']", "shade1471@gmailo.com", {
        force: true
    });

    // await page.click('[placeholder="Пароль"]');

    // await page.fill('[placeholder="Пароль"]', '');

    await page.click('[data-testid="login-submit-btn"]');
    await page.pause();

    //assertion
    //await browser.close();
})();
