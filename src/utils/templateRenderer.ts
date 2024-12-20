import { renderToString } from 'react-dom/server';
import baseTemplate from '../templates/baseTemplate';
import fs from 'fs/promises';
import path from 'path';


export const renderTemplate = async (templateName: string, data: any): Promise<string> => {
  if (templateName === 'baseTemplate') {
    return renderToString(baseTemplate(data));
  }
  throw new Error(`Template ${templateName} not found`);
};

// Render Template from String
export const renderTemplateFromString = async (template: string, data: Record<string, any>): Promise<string> => {
  const interpolatedTemplate = template.replace(/\{(\w+)\}/g, (_, key) => {
    if (key in data) {
      return data[key];
    }
    throw new Error(`Missing data for key: ${key}`);
  });

  return `
    <!doctype html>
    <html>
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script src="https://cdn.tailwindcss.com"></script>
      <title>${data.title || 'Default Title'}</title>
    </head>
    <body class="bg-gray-100 text-gray-800">
      ${interpolatedTemplate}
    </body>
    </html>`;
};
