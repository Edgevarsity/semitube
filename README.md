# Semiyoutube

A static YouTube-style interface built with HTML, CSS, and JavaScript.

## Production

Use Node.js 20 or newer and run:

```sh
npm ci
npm run build
```

Deploy the generated `dist/` directory. Set the hosting project's root directory
 to the repository root, its build command to `npm run build`, and its output
 directory to `dist`. Vercel and Netlify configuration files are included.
No environment variables or backend service are required.

For a local preview:

```sh
python3 -m http.server 8000 --directory dist
```

Open http://localhost:8000. The original `/youtube/youtube.html` address also works.
For hosting without a build step, publish the repository root; its `index.html`
opens the original page.
