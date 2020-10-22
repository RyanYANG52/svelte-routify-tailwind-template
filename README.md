# svelte-routify-tailwind-template

To create a new project based on this template using [degit](https://github.com/Rich-Harris/degit):

```bash
# install degit if not already installed
npm install -g degit

npx degit RyanYANG52/svelte-routify-tailwind-template 
```

## Routify 2.x + tailwindcss

This template is based on https://routify.dev/examples/use-tailwind-css

## Setup typescript
https://svelte.dev/blog/svelte-and-typescript

## Linting
tailwindcss:
- https://github.com/sveltejs/language-tools/blob/master/docs/preprocessors/other-css-preprocessors.md
- https://www.meidev.co/blog/visual-studio-code-css-linting-with-tailwind/
- https://github.com/sveltejs/language-tools/issues/305
- https://github.com/sveltejs/language-tools/issues/484

svelte eslint: https://dev.to/mhaecker/use-airbnb-s-eslint-config-with-typescript-prettier-in-svelte-apps-4fb7

## Misc.
- use `rollup-plugin-workbox` instead of `workbox-cli` to be able to add service worker in dev mode. `npm run dev:sm`
- remove all sourcemap in prod mode.
- in tailwindcss purge options, add `class:xxx` whitelist pattern
- use [spank](https://github.com/roxiness/spank) instead of `routify export`
## Todo

- [ ] ts soucemap wrong line number https://github.com/sveltejs/svelte/pull/5428