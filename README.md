# myPOS Landing Page

Marketing site for **myPOS** - fast, offline-first point of sale software for independent shops.

Built with Next.js 16 (App Router), Tailwind CSS v4, and Motion.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

> Note: this project uses `--webpack` for dev/build because Turbopack's native
> SWC binary is not compatible with older CPUs. No action needed for hosting.

## Production build

```bash
npm run build
npm run start
```

## Deploy

- **Vercel:** import the repo, framework preset auto-detects Next.js. No extra config.
- **Netlify:** build command `npm run build`, output directory `.next`.
