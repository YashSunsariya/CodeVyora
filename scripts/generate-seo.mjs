import { mkdir, writeFile } from 'node:fs/promises'

const siteUrl = (process.env.VITE_SITE_URL || 'https://codevyora-nu.vercel.app').replace(/\/$/, '')
const routes = [
  ['/', 'monthly', '1.0'],
  ['/about', 'monthly', '0.7'],
  ['/services', 'monthly', '0.8'],
  ['/projects', 'monthly', '0.8'],
  ['/contact', 'monthly', '0.9'],
]

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(([path, changefreq, priority]) => `  <url>\n    <loc>${siteUrl}${path}</loc>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`).join('\n')}
</urlset>
`

await mkdir('public', { recursive: true })
await writeFile('public/robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`)
await writeFile('public/sitemap.xml', sitemap)
