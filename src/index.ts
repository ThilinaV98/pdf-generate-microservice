import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { pdfRouter } from './routes/pdf';

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

// Routes
app.route('/pdf', pdfRouter);

const port = 3000
console.log(`Server is running on http://localhost:${port}`)

serve({
  fetch: app.fetch,
  port
})
