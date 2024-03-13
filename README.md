# COMPONENTS

This library, shipped as an NPM package, intends to provide all Edipo projects their shared components.

## How to use

This package requires you to have React installed.

In your own project, simply run 

```sh
npm i @edipoarg/components
```

and then in your code just import the component you want:

```js
import { Map } from "@edipoarg/components";
```

## Developing

### How to add a component to the library

`lib/main.ts` is where components are exported. Create your component under the `lib/components/{your component name}` folder and then re-export it from `main.ts`.

### How to view your component live

You can run `npm run dev` to start a local server. Add your component to `src/App.tsx` to view it on screen.