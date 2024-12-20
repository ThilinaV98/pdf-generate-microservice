import { Hono } from 'hono';
import { generatePDFfromURL, generatePDFFromTemplate } from '../utils/puppeteer';

export const pdfRouter = new Hono();

// Generate PDF from URL
pdfRouter.post('/url', async (ctx) => {
  const { url } = await ctx.req.json();
  if (!url) return ctx.json({ error: 'URL is required' }, 400);

  const pdfBuffer = await generatePDFfromURL(url);
  ctx.header('Content-Type', 'application/pdf');
  return ctx.body(pdfBuffer);
});

// Generate PDF from Template
pdfRouter.post('/template', async (ctx) => {
  const { templateName, data } = await ctx.req.json();
  if (!templateName || !data) return ctx.json({ error: 'Template and data are required' }, 400);

  const pdfBuffer = await generatePDFFromTemplate(templateName, data);
  ctx.header('Content-Type', 'application/pdf');
  return ctx.body(pdfBuffer);
});

// Generate PDF from Template
pdfRouter.post('/templateString', async (ctx) => {
  const { template, data } = await ctx.req.json();
  if (!template || !data) return ctx.json({ error: 'Template and data are required' }, 400);

  const pdfBuffer = await generatePDFFromTemplate(template, data);
  ctx.header('Content-Type', 'application/pdf');
  return ctx.body(pdfBuffer);
});

