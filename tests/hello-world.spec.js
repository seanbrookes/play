import { test, expect } from '@playwright/test';

test('HelloWorld component renders correctly in Storybook', async ({ page }) => {
  // 1. Navigate to the "AutomatedTest" story we created earlier
  // The 'iframe.html' URL is the "clean" view without the Storybook sidebar
  await page.goto('http://localhost:6006/iframe.html?globals=&id=components-helloworld--custom-name&viewMode=story');

  // Locate the button by its custom data-id attribute
  const incrementButton = page.locator('button[data-id="nested-increment-button"]');

  // Perform an action, like clicking it
  await incrementButton.click();

  // Or assert it is visible
  await expect(incrementButton).toBeVisible();

  // 3. Verify the global count is visible (confirming dom-runtime is active)
  // const count = page.locator('p:has-text("Global Count:")');
  // await expect(count).toBeVisible();

  // 4. Take a screenshot to prove it's working
  await page.screenshot({ path: 'playwright-confirmation.png' });
});