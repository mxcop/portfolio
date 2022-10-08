<h3 align="center"> Max's Portfolio </h3>
<div align="right"><sup>Powered by <a href="https://kit.svelte.dev/">SvelteKit</a> & <a href="https://vitejs.dev/">Vite</a> & Icons from <a href="https://iconify.design/">Iconify</a></sup></div>

<br>

### Development

To test the website locally run :
```
npm run dev
```

<br>

### Assets *

Make sure that all images are mirrored in the following directories :<br>

```src/assets/``` — *Local Testing Assets*<br>
```static/``` ——— *Production Assets*<br>

<sub><i>
If any assets are missing from either of these folders you may experience missing assets.<br>
Either in production, or while testing locally.
</i></sub>

<br>

### File Structure

```graphql
./portfolio/*
  ├─ src/assets - # Local testing assets
  ├─ src/css    - # Global CSS files
  │
  ├─ src/data/*        - # Typescript files for parsing api data and static data
  │  ├─ projects.ts    - # Static project data
  │  └─ ...
  │
  ├─ src/lib    - # Svelte components
  │
  ├─ src/routes/*      - # Sveltekit file based routing
  │  ├─ +page.svelte   - # Index page
  │  ├─ +page.ts       - # Used for fetching data from github api
  │  ├─ +layout.svelte - # Svelte component included in every page
  │  ├─ +error.svelte  - # Error page
  │  └─ ...
  │
  └─ static     - # Production assets (included within the build)
```

<br>

### Publishing

<div>
  <div align="left">First build the website using this npm command :</div>
  <div align="right"><sub>The build files will be placed in the /build directory *</sub></div>
</div>

```
npm run build
```

<div>
  <div align="left">Then once the build is completed run the deploy command :</div>
  <div align="right"><sub>This will move the /build directory into the gh-pages branch *</sub></div>
</div>

```
npm run deploy
```

<br>

<br>

<sub>Powered by <a href="https://kit.svelte.dev/">SvelteKit</a> & <a href="https://vitejs.dev/">Vite</a> & Icons from <a href="https://iconify.design/">Iconify</a></sub>
