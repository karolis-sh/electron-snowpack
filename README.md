# Electron Snowpack

<!-- markdownlint-disable no-inline-html line-length -->

<img src="https://raw.githubusercontent.com/karolis-sh/electron-snowpack/main/assets/electron-snowpack.svg" align="right" width="100" height="100" />

<!-- markdownlint-enable no-inline-html line-length -->

[![npm version][package-version-badge]][package-version]
![Node.js CI](https://github.com/karolis-sh/electron-snowpack/workflows/Node.js%20CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> Supercharged `Electron` application development with `Snowpack` and `esbuild`

🚧 **Project is in development mode, some edge cases might not work yet** 🚧

## Getting Started

- `npx electron-snowpack --help`

Check out the [examples](/examples) folder for the common use cases. For further
guidance read the [Snowpack](https://www.snowpack.dev/) and [Electron](https://www.electronjs.org/)
docs.

## Features

- ✅ esbuild for `main` (TypeScript, Live Reload)
- ✅ Snowpack for `renderer` (TypeScript, HMR + Fast Refresh, plugins, etc.)
- ✅ `.env` variables
- ✅ Ability to extend `snowpack.config.js` and `tsconfig.json`
- ✅ Config preset for `electron-builder`

### Snowpack

Snowpack will be used as a development server and bundler for your `public`
static files and `src/renderer` code. To setup just extend your `snowpack.config.js`:

```js
module.exports = {
  extends: 'electron-snowpack/config/snowpack.js',
};
```

### Environment Variables

Built-in support for `.env` files (just as [`@snowpack/plugin-dotenv`](https://www.npmjs.com/package/@snowpack/plugin-dotenv)):

- `.env.NODE_ENV.local`
- `.env.NODE_ENV`
- `.env`

`NODE_ENV`, `MODE` and all `SNOWPACK_*` environment variables will be bundled
with the built app (all on `main` and a subset for `renderer`). See
Snowpack's [Environment Variables](https://www.snowpack.dev/reference/environment-variables)
documentation to learn more.

Also you can adjust the way `electron-snowpack` itself works via environment variables:

- `ELECTRON_SNOWPACK_PORT` - the default Snowpack port

### TypeScript

For a minimal setup to get TypeScript working for `renderer` have a root `tsconfig.json`:

```json
{
  "extends": "electron-snowpack/config/tsconfig.json",
  "include": ["src"]
}
```

### Electron Builder

[`electron-builder`](https://www.electron.build/) is a **separate** complete solution
to package and build a ready for distribution Electron app for macOS, Windows and
Linux with “auto-update” support out of the box.

`electron-snowpack` provides a config starter that will _just work_ with the builder.
Update your `electron-builder` setup in `package.json`:

```json
{
  "build": {
    "extends": "electron-snowpack/config/electron-builder.js"
  }
}
```

[package-version-badge]: https://badge.fury.io/js/electron-snowpack.svg
[package-version]: https://www.npmjs.com/package/electron-snowpack
