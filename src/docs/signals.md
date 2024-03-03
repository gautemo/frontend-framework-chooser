## About signals

Every framework has a reactivity API, but signals is more about what happens underneath and what power it brings.

Some pseudo code of a signal:

```js
function signal(value) {
  return {
    get value() {
      // track
      return value
    },
    set value(newValue) {
      value = newValue
      // notify all trackers
    }
  }
}
```

The important thing about a signal is that it tracks every function that has read its value. So when the signal update its value, it knows who to notify. The effects that are being notified will then get the value and do what they are programmed to do. They are either derived state, just functions, or the UI that keeps in sync with the data.

Signals allow for a more effective DOM updating. But the biggest win in terms of developer experience is how easy global state is. State is no longer tightly coupled to a component. Just see how easy you can move local component state out to be global.

Component state:
```jsx
function Counter() {
  const [count, setCount] = createSignal(0)
  function increment() {
    setCount(count() + 1)
  }

  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```

Global state:
```jsx
const [count, setCount] = createSignal(0)
function increment() {
  setCount(count() + 1)
}

function Counter() {
  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```

Can also be kept in a separate file, so multiple components can use the state:
```jsx
import { count, increment } from './store.ts'

function Counter() {
  return (
    <>
      <span>Count is {count()}</span>
      <button onClick={increment}>Bump</button>
    </>
  );
}
```