# [#the-bullpen](https://the-bullpen.carter.works)

[![Netlify Status](https://api.netlify.com/api/v1/badges/a2e1344e-75a8-4102-a30e-20b7ec3d7c5e/deploy-status)](https://app.netlify.com/sites/the-bullpen/deploys)

## About

The small site representing community called "The Bullpen", starting at Simplifile.

Built with [snowpack](https://snowpack.dev), [Tailwindcss](https://tailwindcss.com), [Netlify](https://netlify.com), and [Prettier](https://prettier.io).

## Available Scripts

### `yarn start`

Runs the app in the development mode.
Open http://localhost:8080 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

### `yarn build`

Builds a static copy of your site to the `build/` folder.
Your app is ready to be deployed!

### `nix-shell`

Activate the build environment as defined in [`shell.nix`](./shell.nix) if you use the [Nix package manager](https://nixos.org/).

If you don't use that, it basically tells you that this site was developed with the latest versions of [yarn v1](https://yarnpkg.com/), [nodejs](https://nodejs.org/en/), and whatever non-IE browser that supports ESM modules (for snowpack).
