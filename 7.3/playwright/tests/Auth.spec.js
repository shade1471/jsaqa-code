const userData = require("../user.js");
const { test, expect } = require("@playwright/test");
test.setTimeout(120000);

test("Should log in successfully", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({ path: "Screenshots/Succesfully1.png" });
    await page.fill("[placeholder='Email']", userData.email);
    await page.fill("[placeholder='Пароль']", userData.password);
    await page.click('[data-testid="login-submit-btn"]');
    await page.screenshot({ path: "Screenshots/Succesfully2.png" });
    await expect(page.locator("h2")).toHaveText("Мои курсы и профессии");
    await page.screenshot({ path: "Screenshots/Succesfully3.png" });
});

test("Should to try log in not valid user", async ({ page }) => {
    await page.goto("https://netology.ru/?modal=sign_in");
    await page.screenshot({ path: "Screenshots/not_Succesful1.png" });
    await page.fill("[placeholder='Email']", "wrongEmail@email.com");
    await page.fill("[placeholder='Пароль']", "wrongPassword");
    await page.screenshot({ path: "Screenshots/not_Succesful2.png" });
    await page.click('[data-testid="login-submit-btn"]');
    await expect(page.locator("[data-testid='login-error-hint']")).toHaveText(
        "Вы ввели неправильно логин или пароль"
    );
    await page.screenshot({ path: "Screenshots/not_Succesful3.png" });
});
