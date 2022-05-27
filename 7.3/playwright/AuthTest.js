const { expect } = require("@playwright/test");
const { chromium } = require("playwright");
let userData = require("./user.js");

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
        //devtools: true
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.fill("[placeholder='Email']", userData.email);
    await page.fill("[placeholder='Пароль']", userData.password);
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page.locator("h2")).toHaveText("Мои курсы и профессии");
    await browser.close();
})();

(async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 1000
        //devtools: true
    });
    const page = await browser.newPage();
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.fill("[placeholder='Email']", "wrongEmail@email.com");
    await page.fill("[placeholder='Пароль']", "wrongPassword");
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page.locator("[data-testid='login-error-hint']")).toHaveText(
        "Вы ввели неправильно логин или пароль"
    );
    await browser.close();
})();
