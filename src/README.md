# src File Structure

## README Purpose

`last updated: 16/03/2023`
This file should help define how the project is structured for changes and additions.
Please note that this structure may change once back-end is implemented

In terms of file path, `@/` is a shortcut for `src/`, and `/` refers to the root (top-most folder of this project).

## App.vue and main.ts

`App.vue` located at `@/App.vue` contains content applied all throughout the app.
This is done because of the `RouterView` component, which is the Vue Router that handles page-navigation in a Single-Page App structure.
See section [##Pages] for more information.

`main.ts` is what applies `App.vue` to the main html file located at `/index.html`.
Certain vue-specific libraries are applied in this file, such as Pinia and the Router.
Most tools are installed via NPM, but do check if any vue-specific tools specify instructions being enabled in `main.ts`.

Additionally, `App.vue` can specify styling throughout the entire app.
When doing so, please ensure the styling is not in the scoped style block as those will only apply to element detected in the file itself.

## Pages

Pages or *Views* are implemented in `@/views`.
They function the same as components, and are placed here simply for organisation.
In order for these pages to be visitable in the app, they must be declared inside `@/router/index.ts`. Inside `routes[]`.
Here is a sample block of code for declaring a page.

```js
    {
      path: '/test', // URL path
      name: 'test', // name of the page as defined for routing
      component: () => import('../views/TestView.vue') // location of the page
    }
```

### Code-Splitting

This method of loading the app performs code-splitting and lazy-loading.
This loads the page only on visit which saves performance, but may make the page load slower if there's a lot of elements.

```js
component: () => import('../views/TestView.vue')
```

If you wish the page to load on the start of the app, first import the view like a component and then reference it in `routes[]` like so:

``` js
// at top of page
import HomeView from '../views/HomeView.vue'

// ...
// inside routes[]
    {
      path: '/',
      name: 'home',
      component: HomeView
    }
```

## Components

Components are defined in `@/components`, and can be grouped or sub-grouped as desired.
Typically groupings are if a component requires components that are not used elsewhere (see `TheHeader` component), or if there are a bunch of similar components that can be grouped for organisation.
There is no hard rules set for this, and can be done as desired.

### Structure

A typical vue component can look like this:

```vue
<!-- Script block that uses the composition API and typescript -->
<script setup lang="ts">

</script>

<!-- 
    Template tag contains all HTML, note that regardless of component name, the component will render in browser based on the top-most element(s) in the template block 
-->
<template>
    <!-- If this component is called, it will render as a <div> element -->
    <div>

    </div>
</template>

<!-- 
    Style block is scoped to only apply to elements inside this component.
    It can apply to components, but it cannot apply to any elements inside the component.
-->
<style scoped lang="scss">

</style>
```

## Experience

The Experience folder contains everything related to the Three JS Scene.
Currently it only supports one canvas scene, and may need to be refactored to include more canvasses.

## Tests

Ignore for now, this is for when testing needs to be done.