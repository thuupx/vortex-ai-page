import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name using ES modules approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

(async () => {
  // Launch a headless browser
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 1,
  });
  
  // Get the absolute path to the HTML template
  const htmlPath = path.join(__dirname, '../public/og-template.html');
  const htmlContent = `file://${htmlPath}`;
  
  // Navigate to the HTML file
  await page.goto(htmlContent, { waitUntil: 'networkidle0' });
  
  // Take a screenshot
  const outputPath = path.join(__dirname, '../public/og-image.png');
  await page.screenshot({ path: outputPath });
  
  console.log(`OG image generated at: ${outputPath}`);
  
  // Close the browser
  await browser.close();
})().catch(err => {
  console.error('Error generating OG image:', err);
  process.exit(1);
});
