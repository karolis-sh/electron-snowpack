# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.13.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.12.2...electron-snowpack@0.13.0) (2022-04-03)


### Features

* **main:** add sourcemaps in dev mode ([7f10fda](https://github.com/karolis-sh/electron-snowpack/commit/7f10fdaab6ce2fac02f9ef5c1146e1f5949ca46e)), closes [#65](https://github.com/karolis-sh/electron-snowpack/issues/65)





## [0.12.2](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.12.1...electron-snowpack@0.12.2) (2021-12-12)


### Bug Fixes

* resolve windows resource loading issue ([7983b9b](https://github.com/karolis-sh/electron-snowpack/commit/7983b9b45c7115dd14f58467c16e4f23398ece34)), closes [#58](https://github.com/karolis-sh/electron-snowpack/issues/58)





## [0.12.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.12.0...electron-snowpack@0.12.1) (2021-12-05)


### Bug Fixes

* resolve correct asset paths in Windows ([f8a79af](https://github.com/karolis-sh/electron-snowpack/commit/f8a79afd0924dea989ba7d81905ac7edd12e3457)), closes [#58](https://github.com/karolis-sh/electron-snowpack/issues/58)





# [0.12.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.11.1...electron-snowpack@0.12.0) (2021-07-19)


### Features

* upgrade snowpack, esbuild and other dependencies ([e9a0b3e](https://github.com/karolis-sh/electron-snowpack/commit/e9a0b3ea472ea0f32efbb1781b89a411db3ea5de))





## [0.11.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.11.0...electron-snowpack@0.11.1) (2021-07-19)


### Bug Fixes

* kill electron process in dev mode on windows ([176800a](https://github.com/karolis-sh/electron-snowpack/commit/176800ae55702e67dbc824216410e81131343479))





# [0.11.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.10.0...electron-snowpack@0.11.0) (2021-04-25)


### Features

* **dep:** upgrade to esbuild@0.11.12 ([498e539](https://github.com/karolis-sh/electron-snowpack/commit/498e5390db2162c0b8634ff59e98d712eb797dcf))





# [0.10.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.9.1...electron-snowpack@0.10.0) (2021-04-19)


### Features

* support passing electron arguments for dev command ([#47](https://github.com/karolis-sh/electron-snowpack/issues/47)) ([ebf3f94](https://github.com/karolis-sh/electron-snowpack/commit/ebf3f9455507b43b65686cf83dbb9780d6d41835))





## [0.9.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.9.0...electron-snowpack@0.9.1) (2021-04-05)

**Note:** Version bump only for package electron-snowpack





# [0.9.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.8.1...electron-snowpack@0.9.0) (2021-03-24)


### Features

* update esbuild config to support building multiple files for main ([#41](https://github.com/karolis-sh/electron-snowpack/issues/41)) ([8b60c0c](https://github.com/karolis-sh/electron-snowpack/commit/8b60c0cf52110abe1e02725086156121ca9b17b2))





## [0.8.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.8.0...electron-snowpack@0.8.1) (2021-03-09)


### Bug Fixes

* refactor getAssetURL to not use deprecated url method ([f9e2c85](https://github.com/karolis-sh/electron-snowpack/commit/f9e2c8588b942d4d65b962c95268e5f052699ca8))
* resolve electron dependensy version warnings ([1df4858](https://github.com/karolis-sh/electron-snowpack/commit/1df4858ddadaf6d56c6f913fac9db1c3b105c128))





# [0.8.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.7.1...electron-snowpack@0.8.0) (2021-03-07)


### Features

* add ability to change default Snowpack port via ELECTRON_SNOWPACK_PORT env variable ([7255c46](https://github.com/karolis-sh/electron-snowpack/commit/7255c46684728d7441ab7ab3cccf47273b795294)), closes [#35](https://github.com/karolis-sh/electron-snowpack/issues/35)





## [0.7.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.7.0...electron-snowpack@0.7.1) (2021-02-27)


### Bug Fixes

* prevent console error on very fast initial main rebuild ([2262da2](https://github.com/karolis-sh/electron-snowpack/commit/2262da24c2ffbff630193b7054c2a374d092c459))
* unify dev and build src/main esbuild dependency bundling ([c68733a](https://github.com/karolis-sh/electron-snowpack/commit/c68733a06f038b561903b32605cb3649fff9b1d4)), closes [#20](https://github.com/karolis-sh/electron-snowpack/issues/20) [#32](https://github.com/karolis-sh/electron-snowpack/issues/32)





# [0.7.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.6.1...electron-snowpack@0.7.0) (2021-02-24)


### Features

* add TypeScript typings ([6206ad1](https://github.com/karolis-sh/electron-snowpack/commit/6206ad150dab87b436c5858302e127474b7e20d8)), closes [#29](https://github.com/karolis-sh/electron-snowpack/issues/29)





## [0.6.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.6.0...electron-snowpack@0.6.1) (2021-02-11)


### Bug Fixes

* remove explicit snowpack env type definition ([4995dc6](https://github.com/karolis-sh/electron-snowpack/commit/4995dc6692a21955a61b104d48f9d2d3961a95e2))





# [0.6.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.5.0...electron-snowpack@0.6.0) (2021-02-11)


### Features

* add minification for main ([aea70e0](https://github.com/karolis-sh/electron-snowpack/commit/aea70e041d7e55cda20d0f565fbe270f80dbeb3c)), closes [#23](https://github.com/karolis-sh/electron-snowpack/issues/23)





# [0.5.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.4.0...electron-snowpack@0.5.0) (2021-02-09)


### Features

* add TypeScript support for src/main ([4328c71](https://github.com/karolis-sh/electron-snowpack/commit/4328c712ab64e5f9bb7afbc835395d7ddf096bbd))





# [0.4.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.3.1...electron-snowpack@0.4.0) (2021-02-04)


### Bug Fixes

* load svelte-env TypeScript types explicitly ([720e32c](https://github.com/karolis-sh/electron-snowpack/commit/720e32c4526914785a992643d46d87d47b8f26cc))


### Features

* add Electron main live reload ([0377c53](https://github.com/karolis-sh/electron-snowpack/commit/0377c533df09b94f790ed62ad8117c62254a2825)), closes [#5](https://github.com/karolis-sh/electron-snowpack/issues/5)





## [0.3.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.3.0...electron-snowpack@0.3.1) (2021-01-30)


### Bug Fixes

* resolve windows issues ([24a4203](https://github.com/karolis-sh/electron-snowpack/commit/24a42039ba2ea7910a280c7e726b527d000df2aa)), closes [#16](https://github.com/karolis-sh/electron-snowpack/issues/16)





# [0.3.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.2.0...electron-snowpack@0.3.0) (2021-01-28)


### Bug Fixes

* add descriptions for CLI commands ([3590ac6](https://github.com/karolis-sh/electron-snowpack/commit/3590ac6c08b6f60a870bf7efb12dbf214ed2357a))
* **env:** also include the MODE env variable to main ([a47f1f8](https://github.com/karolis-sh/electron-snowpack/commit/a47f1f838d54a439a94c13b991739245162c4af4))
* improve process logging ([6bed27d](https://github.com/karolis-sh/electron-snowpack/commit/6bed27d3a72c4e371ccae2d8f102544d17c488f3)), closes [#13](https://github.com/karolis-sh/electron-snowpack/issues/13)


### Features

* **cli:** add verbose and quiet modes ([946f333](https://github.com/karolis-sh/electron-snowpack/commit/946f3334432f2930bbd526f6a486f2faf41e630d)), closes [#11](https://github.com/karolis-sh/electron-snowpack/issues/11)





# [0.2.0](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.1.1...electron-snowpack@0.2.0) (2021-01-27)


### Features

* add typescript plugin auto-load and sample config ([0061f53](https://github.com/karolis-sh/electron-snowpack/commit/0061f536802e08f062c38c2a116c97024c8059f5))





## [0.1.1](https://github.com/karolis-sh/electron-snowpack/compare/electron-snowpack@0.1.0...electron-snowpack@0.1.1) (2021-01-26)


### Bug Fixes

* resolve process being included as an importable module ([4c71c62](https://github.com/karolis-sh/electron-snowpack/commit/4c71c628058bb2a51e3fed381e6c9a8128678381))





# 0.1.0 (2021-01-25)


### Features

* add snowpack + esbuild for electron clean, dev and build workflows ([2783486](https://github.com/karolis-sh/electron-snowpack/commit/2783486610127d9c9bdb2774c893ffd24da9436d))
