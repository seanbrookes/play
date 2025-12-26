import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:5173/');
  await page.getByRole('textbox').first().click();
  await page.getByRole('textbox').first().fill('A nuanced take on when Typescript doesn\'t make sense');
  await page.getByRole('button', { name: 'save' }).click();
  await page.locator('div').filter({ hasText: '›' }).nth(2).click();
  await page.locator('#code_mirror_editor_el').getByRole('textbox').fill('There is no question Typescript has taken the world by storm');
  await page.getByRole('button', { name: 'save' }).click();
  await page.getByRole('link', { name: 'did jung have it right all' }).click();
  await page.getByRole('button', { name: 'preview' }).click();
  await page.getByRole('button', { name: 'edit' }).click();
  await page.getByRole('button', { name: 'new post' }).first().click();
});