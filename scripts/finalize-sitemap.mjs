import fs from 'node:fs';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const source = path.join(dist, 'sitemap-0.xml');

if (!fs.existsSync(source)) {
  console.error('finalize-sitemap: dist/sitemap-0.xml not found — run astro build first.');
  process.exit(1);
}

const raw = fs.readFileSync(source, 'utf8');
const urlCount = (raw.match(/<url>/g) ?? []).length;

if (urlCount === 0) {
  console.error('finalize-sitemap: sitemap-0.xml contains no URLs.');
  process.exit(1);
}

function field(block, name) {
  return block.match(new RegExp(`<${name}>([^<]*)</${name}>`))?.[1] ?? '';
}

function xhtmlLinks(block) {
  return [...block.matchAll(/<xhtml:link\b[^>]*\/?>/g)].map((match) => match[0]);
}

function formatUrlset(xml) {
  const seen = new Set();
  const urls = [...xml.matchAll(/<url>([\s\S]*?)<\/url>/g)].filter((match) => {
    const loc = field(match[1], 'loc');
    if (seen.has(loc)) return false;
    seen.add(loc);
    return true;
  }).map((match) => {
    const block = match[1];
    const lines = ['  <url>', `    <loc>${field(block, 'loc')}</loc>`];
    const lastmod = field(block, 'lastmod');
    const changefreq = field(block, 'changefreq');
    const priority = field(block, 'priority');
    if (lastmod) lines.push(`    <lastmod>${lastmod.slice(0, 10)}</lastmod>`);
    if (changefreq) lines.push(`    <changefreq>${changefreq}</changefreq>`);
    if (priority) lines.push(`    <priority>${priority}</priority>`);
    for (const link of xhtmlLinks(block)) {
      lines.push(`    ${link}`);
    }
    lines.push('  </url>');
    return lines.join('\n');
  });

  const hasXhtml = xml.includes('xhtml:link');
  const ns = hasXhtml
    ? 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml"'
    : 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"';

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset ${ns}>
${urls.join('\n')}
</urlset>
`;
}

const formatted = formatUrlset(raw);
fs.writeFileSync(path.join(dist, 'sitemap.xml'), formatted, 'utf8');

for (const extra of ['sitemap-0.xml', 'sitemap-index.xml']) {
  const extraPath = path.join(dist, extra);
  if (fs.existsSync(extraPath)) fs.unlinkSync(extraPath);
}

console.log(`Sitemap finalized: ${urlCount} URLs → dist/sitemap.xml`);
