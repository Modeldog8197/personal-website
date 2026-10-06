import { test, expect } from '@playwright/test'

test('portfolio loads without runtime errors or horizontal overflow', async ({
  page,
}) => {
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText(
    'Curiosity',
  )
  await expect(page.locator('.featured-project')).toHaveCount(3)
  await expect(page.locator('.small-project')).toHaveCount(6)
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true)
  const portrait = page.getByAltText('Avdhoot Gupta', { exact: true })
  await portrait.scrollIntoViewIfNeeded()
  await expect(portrait).toBeVisible()
  await expect
    .poll(() =>
      portrait.evaluate((img) => img.complete && img.naturalWidth > 0),
    )
    .toBe(true)
  await page.getByRole('link', { name: 'Avdhoot Gupta, home' }).click()
  await expect(page.getByRole('heading', { level: 1 })).toBeInViewport()
  await page.screenshot({
    path: testInfo.outputPath('portfolio.png'),
    fullPage: true,
  })
  expect(errors).toEqual([])
})

test('sampling controls update the actual histogram', async ({ page }) => {
  await page.goto('/')
  const chart = page.getByRole('img', { name: /Histogram of/ })
  const initial = await chart.getAttribute('aria-label')
  await page.getByRole('button', { name: /Resample/ }).click()
  await expect(chart).not.toHaveAttribute('aria-label', initial)
  await page.getByLabel('Samples', { exact: true }).selectOption('10000')
  await expect(chart).toHaveAttribute('aria-label', /Histogram of 10000/)
})

test('project filters, empty-state reset, and notes work', async ({ page }) => {
  await page.goto('/')
  await page
    .getByRole('button', { name: 'Machine learning', exact: true })
    .click()
  await expect(page.locator('.featured-project')).toHaveCount(1)
  await expect(page.locator('.featured-project')).toContainText(
    'Basketball Shot Predictor',
  )
  await page.getByText('Project notes', { exact: false }).click()
  await expect(page.getByText(/On 299 held-out/)).toBeVisible()
  await page
    .getByRole('searchbox', { name: 'Search projects' })
    .fill('impossible query')
  await expect(
    page.getByRole('heading', { name: 'No projects match that search.' }),
  ).toBeVisible()
  await page.getByRole('button', { name: /Clear filters/ }).click()
  await expect(page.locator('.featured-project')).toHaveCount(3)
  await expect(page.locator('.small-project')).toHaveCount(6)
})

test('repository archive searches all repos and contact uses the real address', async ({
  page,
}) => {
  await page.goto('/')
  await page.locator('.repo-archive > summary').click()
  await expect(page.locator('.repo-list li')).toHaveCount(39)
  await page.getByRole('searchbox', { name: 'Find a repository' }).fill('nba')
  await expect(page.locator('.repo-list li')).toHaveCount(2)
  await expect(page.locator('.repo-list')).toContainText('NBA-API')
  await expect(
    page.locator('a[href="mailto:avdhootgupta0@gmail.com"]'),
  ).toHaveCount(1)
})

test('keyboard skip link works with reduced motion', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' })
  await page.goto('/')
  await page.keyboard.press('Tab')
  await expect(
    page.getByRole('link', { name: 'Skip to content' }),
  ).toBeFocused()
  await page.keyboard.press('Enter')
  await expect(page).toHaveURL(/#main$/)
  expect(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
  ).toBe('auto')
})
