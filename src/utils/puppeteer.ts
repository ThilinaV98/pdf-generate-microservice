import puppeteer from 'puppeteer';
import { renderTemplateFromString } from './templateRenderer';

// Generate PDF from URL
export const generatePDFfromURL = async (url: string): Promise<Uint8Array<ArrayBufferLike>> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'networkidle2' });

  const pdfBuffer = await page.pdf({ format: 'A4' });
  await browser.close();
  return pdfBuffer;
};

// Generate PDF from Template (updated to accept template string)
export const generatePDFFromTemplate = async (
  template: string,
  data: any
): Promise<Uint8Array<ArrayBufferLike>> => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const htmlContent = await renderTemplateFromString(template, data);
  await page.setContent(htmlContent, { waitUntil: 'networkidle2' });

  // Set viewport size for rendering
  await page.setViewport({ width: 1200, height: 800 });

  await page.screenshot({ path: 'debug_screenshot.png', fullPage: true });


  const pdfBuffer = await page.pdf({
    format: 'A4',
    printBackground: true, // Ensure background colors are included
  });

  await browser.close();
  return pdfBuffer;
};
