# Working With TypeScript
TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. TypeScript's compiler handles static type checking at run time, works with or without Babel, and exposes a plethora of configuration options to fit practically any use case.

Apart from adding the typings to your code, there is nothing different than the standard JavaScript syntax.

## Compiler
The compiler is configured via the `tsconfig.json` in the project's root.

By default, the booster kit is configured to allow any syntax within `esnext` and below; and compiles down to `es6`. The compiler will emit errors or an OK message with every file save / hot reload.

To work with Webpack, we're including [awesome-typescript-loader](https://github.com/s-panferov/awesome-typescript-loader) within the list of Webpack loaders in `./webpack/rules.js`. We're also chaining `babel-loader` in the loader config to provide a better hot reloading experience.

Reference [TypeScript's document](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html) for a full list of configuration flags.


## File naming conventions
If you're used to working within a Babel/ES6 environment, not much changes except the file extensions:
* `.js` is now `.ts`
*  `.jsx` is now `.tsx`

You can also write normal JavaScript files with a `.js` extension and import them into any TypeScript file. The downside is that there is no type checking in any files other than `.ts` and `.tsx`.

## Package Library Definitions
If you install a third-party library, it's a good idea to check and see if there is a community definition file available. If you don't you will either write a bunch of types that have already been written somewhere, or you'l  get a bunch of compiler errors because TypeScript expects all code used within a module to be typed. [Definitely Typed](https://github.com/DefinitelyTyped/DefinitelyTyped) contains several thousand package definitions.

To install a new library definition:
```bash
yarn add @types/package-name
```

You'll get one of three results:
* A library definition does not exist.
* You don't need to install a library definition because one is already included within the package itself. This is usually the case if the package is written in TypeScript.
* A definition was found and installed.

The definition file is automatically picked up by the TypeScript compiler and applied to your code.

If you need to use a library definition in an assertion within your code, it usually can be imported from the package itself.

For example:
```js
/** Get the Dispatch type from Redux */
import { Dispatch } from 'redux'

import actions from './state'

const someAction = actions.action as Dispatch<State>

/** Use a built-in React type */
import * as React from 'react'

const Component: React.SFC<Props> = (props) => ( ... )
```

## Globals and declaration files
Types can be global or local. To set a global type, create a new file with a `.d.ts` extension. The type definitions will be automatically picked up by the compiler and made available to any other file within the `/src` directory.

Just like when writing standard JavaScript, globals should be used sparingly because they reserve the namespace across the entire app.

Examples of where we're currently applying global namespaces within the app:
* State - We want to define the state of the shape. It should not change and should only be defined in one place, so declaring it makes sense.
* Theme - There is only one place within the app where the attributes on the theme prop are defined, so it's natural to treat it as a global since the theme attributes are static and not configurable.

## Import / Export type definitions
The behavior is pretty much identical to standard JavaScript import / export behavior with a few caveats:
* You can't `export default` types
* You can't 'import TypeName' types

This is because the type definitions are not a module and are removed entirely during production bundling.

Examples:
```js
/** In some module.tsx */
export interface FooProps {
  baz?: string
}

const Foo: React.SFC<FooProps> = ({ baz }) => (
  ...
)

export default Foo

/** Using Foo in a parent */
import Foo, { FooProps } from './foo'

export interface BarProps extends FooProps {
  bar: string
}

const Bar: React.SFC<BarProps> = ({ bar, baz }) => (
  <div>
    {bar}
    <Foo baz={baz} />
  </div>
)

export default Bar
```
