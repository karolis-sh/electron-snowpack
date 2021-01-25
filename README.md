# Electron Snowpack

<!-- markdownlint-disable no-inline-html line-length -->

<img src="https://raw.githubusercontent.com/karolis-sh/electron-snowpack/main/assets/electron-snowpack.svg" align="right" width="100" height="100" />

<!-- markdownlint-enable no-inline-html line-length -->

[![npm version][package-version-badge]][package-version]
![Node.js CI](https://github.com/karolis-sh/electron-snowpack/workflows/Node.js%20CI/badge.svg)
[![License: MIT](https://img.shields.io/badge/license-mit-yellow.svg)](https://opensource.org/licenses/MIT)

> Supercharged `electron` application development with `snowpack` and `esbuild`

🚧 **Project in development mode, some features might not work yet...** 🚧

## Getting Started

Check out the [examples](/examples) folder for common use cases. For further guidance
read the [Snowpack](https://www.snowpack.dev/) and [Electron](https://www.electronjs.org/)
docs.

## Features

### Main + esbuild

Nearly instant builds of `main` code with the help of `esbuild`

### Renderer + Snowpack

Snowpack's speed, instant HMR, plugins

### Environment Variables

`NODE_ENV` and all `SNOWPACK_*` environment variables will be bundled with the
output (`SNOWPACK_PUBLIC_*` will aso be available for the renderer process)

[package-version-badge]: https://badge.fury.io/js/electron-snowpack.svg
[package-version]: https://www.npmjs.com/package/electron-snowpack
