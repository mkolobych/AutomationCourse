import { test, expect } from '@playwright/test';

let email = "mkolobich@gmail.com";
let password ="asdfwsx12";

test.beforeEach(async ({page})=>{
await page.goto ("https://planetakino.ua/movies/");
});

test.describe("Select a city", () => {
  test("User can select Lviv", async ({ page }) => {
    await page.getByText('Київ ББ').click();
    await page.getByText('Львів (King Cross)').click();

    await expect (page.getByText('Львів K Київ (Blockbuster')).toBeVisible();
    await expect (page.getByRole('heading', { name: 'Афіша Планети Кіно в Львові (' })).toBeVisible();
  });
});

test.describe("top non-navigational menu", () => {
  test("User can view the schedule", async ({ page }) => {
    await page.getByText('Київ ББ').click();
    await page.getByText('Львів (King Cross)').click();
    await page.getByRole('banner').getByRole('link', { name: 'Розклад' }).click();

    await expect(page).toHaveTitle("Розклад сеансів: Планета Кіно IMAX, Cinetech+ в Львові (King Cross)");
  }); 
  
  test("User can select - Contacts", async ({ page }) => {
    await page.getByRole('banner').getByRole('link', { name: 'Контакти' }).click();
 
    await expect (page.locator('.ct-page__info-inner > div:nth-child(4)')).toHaveText("Графік роботи контакт-центру (клієнтської підтримки): Понеділок-четвер - з 9:00 до 21:00 П'ятниця-неділя - з 9:00 до 22:00 Безкоштовно по Україні з будь-якого номеру");
  });

});

test.describe("login flows", () => {
  test("User can log in/log out from the personal office", async ({ page }) => {
    await page.getByRole('link', { name: 'Вхід' }).click();
    await page.getByPlaceholder('ХХХХХХХХХ або e-mail').type(email);
    await page.getByPlaceholder('••••••••').type(password);
    await page.getByRole('button', { name: 'Увійти' }).click();
    await page.getByRole('link', { name: 'M 0 бонусів' }).click();

    await expect(page).toHaveTitle("Планета Кіно — Особистий кабінет");

    await page.locator('.logout').click();

    await expect(page).toHaveTitle("Планета Кіно — Вхід в Особистий Кабінет");
  }); 

  test("Required fields", async ({ page }) =>{
    await page.getByRole('link', { name: 'Вхід' }).click();
    await page.getByRole('button', { name: 'Увійти' }).click();
    
    await expect (page.getByText('Необхідно заповнити це поле').first()).toHaveText("Необхідно заповнити це поле");
    await expect (page.getByText('Необхідно заповнити це поле').nth(1)).toHaveText("Необхідно заповнити це поле");
  });

});

