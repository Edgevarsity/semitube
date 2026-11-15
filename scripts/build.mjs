import { cp, mkdir, readFile, rm, writeFile, access } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const source = new URL('youtube/', root);
const output = new URL('dist/', root);
const html = await readFile(new URL('youtube.html', source), 'utf8');

// Fail the build if a local page asset is missing (including case mismatches).
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) {
  const reference = match[1];
  if (/^(?:[a-z][a-z\d+.-]*:|\/\/|#)/i.test(reference)) continue;
  await access(new URL(reference, source));
}

await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
await writeFile(new URL('index.html', output), html);
// Keep the original URL working for existing bookmarks.
await cp(source, new URL('youtube/', output), { recursive: true });
console.log('Production site built in dist/; all local page assets verified.');
