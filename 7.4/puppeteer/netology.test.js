let page;
describe("Should check titles Netology", () => {
    beforeEach(async () => {
        page = await browser.newPage();
        await page.goto("https://netology.ru", { timeout: 120000 });
    }, 120000);

    afterEach(() => {
        page.close();
    });

    test("Check title main page'", async () => {
        const title = await page.title();
        expect(title).toEqual(
            "Нетология – курсы и обучение интернет-профессиям онлайн"
        );
    }, 60000);

    test("Check head pages of Marketing", async () => {
        const linkMarketing = await page.$(
            '[id="directions"] a[href="/marketing"]'
        );
        await linkMarketing.click();
        await page.waitForSelector("h1");
        const actual = await page.$eval("h1", element => element.textContent);
        expect(actual).toEqual("Маркетинг");
    }, 60000);
});
