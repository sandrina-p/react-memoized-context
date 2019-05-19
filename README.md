# react-memoized context

Avoid unnecessary re-renders when consuming partially a React Context.

- < 1kb GZIP.
- Zero dependencies. 🙌
- Tree-shakable. 🌴

## Motivation
When a component has simple props, using `PureComponent`/`Memo()` is a possible solution to avoid extra re-renders from props coming from Context. However, components with complex props might perform worse when using `PureComponent`. It's in that moment that `react-memoized-context` rocks. It works like `PureComponent`/`Memo()` but it only performs the shallow comparison to props coming from Context.

See a [Working Demo](https://react-memoized-context.netlify.com/) showing the benefits of `react-memoized-context`.

## Installing

```bash
npm install react-memoized-context --save
```

## Using

### A. Via HOC
```js
import { withMemoizedContext } from 'react-memoized-context';

const FootNote = ({ context, ...otherProps }) => {  
  /*... do stuff with context.name ...*/
}

// Only re-renders when UserContext.name changes.
const FootNoteContexted = withMemoizedContext(UserContext)(FootNote, ['name']);
```

### B. Via Component renderProp

```js
import { MemoizedContext } from 'react-memoized-context';

// Only re-renders when UserContext.name changes.
<MemoizedContext context={ UserContext } memoKeys={ ['name'] }>
    ({ name }) => <FootNote author={ name } />
</MemoizedContext>
```

See full [Documentation with Demo](https://react-memoized-context.netlify.com/).

---

## Contributing
- Development: `yarn docz dev`
- Testing: `yarn test`

Feel free to open an issue or MR to improve this package.
