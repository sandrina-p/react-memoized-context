# react-memoized context

[![npm version](https://img.shields.io/npm/v/react-memoized-context.svg?style=flat)](https://www.npmjs.com/package/react-memoized-context)
[![minzip](https://img.shields.io/bundlephobia/minzip/react-memoized-context.svg)](https://bundlephobia.com/result?p=react-memoized-context@0.1.2)
[![Build Status](https://img.shields.io/travis/sandrina-p/react-memoized-context/master.svg)](https://travis-ci.org/sandrina-p/react-memoized-context)
[![MIT license](https://img.shields.io/badge/License-MIT-blue.svg)](https://lbesson.mit-license.org/)

Avoid unnecessary re-renders when consuming partially a React Context.

- < 1kb GZIP 🔬
- Tree-shakable 🌴

## Motivation
When a component has simple props, using `PureComponent`/`Memo()` is a possible solution to avoid extra re-renders from props coming from Context. However, components with complex props might perform worse when using `PureComponent`. It's in that moment that `react-memoized-context` rocks. It works like `PureComponent`/`Memo()` but it only performs the shallow comparison to props coming from Context.

See a [Working Demo](https://react-memoized-context.netlify.com/) showing the benefits of `react-memoized-context`.

## Installing

```bash
npm install react-memoized-context --save
```

## Using

### A. HOC
```js
import { withMemoizedContext } from 'react-memoized-context';

const FootNote = ({ context, ...otherProps }) => {  
  /*... do stuff with context.name ...*/
}

// Only re-renders FootNote when UserContext.name changes.
const FootNoteContexted = withMemoizedContext(UserContext)(FootNote, ['name']);
```

### B. Component renderProp
```js
import { MemoizedContext } from 'react-memoized-context';

// Only re-renders FootNote when UserContext.name changes.
<MemoizedContext context={ UserContext } memoKeys={ ['name'] }>
    ({ name }) => <FootNote author={ name } />
</MemoizedContext>
```

### C. Hook?
Well... the way React hooks work, it's impossible to directly subscribe to a part of the context value without re-rendering. See [React issue #14110](https://github.com/facebook/react/issues/14110)

```js
function FootNote() {
  const { name } = useContext(UserContext);

  // FootNote re-renders when UserContext value changes, even if name is the same.
  <FootNote author={ name } />
}
```

#### Workaround
Use an extra hook `useMemo` as a _wall_ between the Context part and the rest of the Component children. See [React issue #15156](https://github.com/facebook/react/issues/15156#issuecomment-474590693).

```js
function FootNote() {
  const { name } = useContext(UserContext);

  // Only re-renders FootNote when name is updated.
  return useMemo(() => (
    <FootNote author={ name } />
  ), [name])
}
```

See full [Documentation with Demo](https://react-memoized-context.netlify.com/).

---

## Contributing
- Development: `yarn docz:dev`
- Testing: `yarn test`

Feel free to open an issue or PR.
