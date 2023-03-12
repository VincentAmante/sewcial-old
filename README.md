# sewcial

Sewcial App, please read this README file for information on how to navigate this project.
For fellow developers, everything from [MANUALLY WRITTEN CONTENT] is self-made to give you some hints on how to start navigating this repo.
It's not enough, so feel free to ask for help or for better guides so you can get a better understanding of the project

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

[SCSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=mrmlnc.vscode-scss)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
    1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
    2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## [ START OF MANUALLY WRITTEN CONTENT ]

## SCSS

SCSS is automatically set up to run throughout the app, no need to do any compilations with live sass.
Most styling are scoped within `.vue` files, re-usable content will be found primarily within the sass asset folder.

### Structure

`assets/sass`

    L `main.scss` - imports everything

    L `abstracts` - [all base re-usables]

        L `_functions.scss` - meant to store any complex scss calculations

        L `_mixins.scss` - breakpoints and re-usable styles for ease-of-use

        L `_variables.scss` - colours and such can be found here

    L base

        L `_reset.scss` - simply resets the css for more consistent styling

        L `_typography.scss` - [contains global text stylings]
        
    L themes - ignore for now

## Three.JS

Due to TypeScript being applied to this Vue project (for good reasons), ThreeJS content has unfortunately been forcibly converted to TypeScript to run properly.
Please ask Icen for any help on ThreeJS as documentation in this field is lacking.

A lot of the additions you may find that are not in the tutorial you've been provided is just so the error can go away.
If you see errors in the vscode editor, simply hover/click on any of the errors, and apply Quick-Fixes `(ctrl + .)`.
Usually you can get away with `add all missing initializers` as well as `add definitive assignment`.
There's also `infer type parameter` for parameter-issues, or simply adding `: any` as the type (e.g. `variableName: any`).
Most of these is just TypeScript wanting to make sure you understand

### Tip

For insight into how these fixes are applied, please see `Experience.ts`, `Camera.ts`, and `World/Floor.ts` to see how
TypeScript affects the ThreeJS Experience project
Comments marked like `// *` relate specifically to TypeScript fixes

### Setup

Assets are defined in `public/Experience`, where models and textures can be found
The code for everything ThreeJS-related is found in `src/Experience`.
`Experience/World/World.ts` and `Experience/World/Room.ts` is an insight into how objects are added into the world.
`Experience/Utils/assets.ts` and `Experience/Utils/Resources.ts` will show you how the assets are loaded.
A lot of the underlying infrastructure is still to be added, please contact Icen for any requests or questions

## Vue

A page is considered a page when they are defined in `src/router/index.ts`.
Pages are implemented in `src.views`.
An example of how these pages are navigated to can be briefly seen in `src/components/TheHeader/TheHeader.vue`.
`App.vue` is the main page, and is where every 'view' is shown in this Single-Page Application.
You can follow the chain of imports to see how the vue application is structured

Do refer to the Vue documentation to understand a lot of the syntax, though it may be overwhelming for a while.
You may also play around with a project of your own so you can experiment with Vue yourself if you feel that this project
has too many complications to properly learn the framework.

## BackEnd

BackEnd is still not implemented, please wait patiently while the back-end developers perform research.
