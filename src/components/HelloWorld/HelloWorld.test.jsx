import { expect, test, beforeAll } from 'vitest';
// Correct entry point for Vitest v4 browser testing
import { render } from 'vitest/browser'; 
import { HelloWorld } from './HelloWorld';

beforeAll(() => {
  // Mock the global store for the withState cleanup logic
  window.globalStore = {
    getState: () => ({ count: 0 }),
    subscribe: () => () => {}, 
  };
});

test('HelloWorld component displays name and global count', async () => {
  const { getByText } = render(
    <HelloWorld name="Playwright" />
  );

  const greeting = getByText('Hello Playwright!');
  await expect(greeting).toBeVisible();

  const countDisplay = getByText(/Global Count: 0/);
  await expect(countDisplay).toBeVisible();
});