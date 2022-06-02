let page;

beforeEach(async () => {
    page = await browser.newPage();
});

afterEach(() => {
    page.close();
});

describe("Github page tests", () => {
    beforeEach(async () => {
        await page.goto("https://github.com/team");
    }, 15000);

    test("The h1 header content'", async () => {
        const firstLink = await page.$("header div div a");
        await firstLink.click();
        await page.waitForSelector("h1");
        const title2 = await page.title();
        expect(title2).toEqual(
            "GitHub: Where the world builds software · GitHub"
        );
    }, 60000);

    test("The first link attribute", async () => {
        const actual = await page.$eval("a", link => link.getAttribute("href"));
        expect(actual).toEqual("#start-of-content");
    }, 60000);

    test("The page contains Sign in button", async () => {
        const btnSelector = ".btn-large-mktg.btn-mktg";
        await page.waitForSelector(btnSelector, {
            visible: true
        });
        const actual = await page.$eval(btnSelector, link => link.textContent);
        expect(actual).toContain("Sign up for free");
    }, 60000);
});

describe("Should check titles for pages", () => {
    test("Check Title Enterprise", async () => {
        await page.goto("https://github.com/enterprise");
        const title = await page.title();
        expect(title).toContain(
            "Enterprise · A smarter way to work together · GitHub"
        );
    }, 15000);

    test("Check Title Marketplace", async () => {
        await page.goto("https://github.com/marketplace");
        const title = await page.title();
        expect(title).toContain(
            "GitHub Marketplace · to improve your workflow · GitHub"
        );
    }, 15000);

    test("Check Title Codespaces", async () => {
        await page.goto("https://github.com/features/codespaces");
        const title = await page.title();
        expect(title).toContain("GitHub Codespaces · GitHub");
    }, 15000);
});
