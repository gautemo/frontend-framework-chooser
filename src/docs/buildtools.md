## About build tools

Build tools are great for frontend projects to help with a dev server with HMR (Hot Module Reloading), tree shaking away unused code, minification, and a lot more.

But there is also more to learn and master, which might make it feel intimidating.

Most frameworks require a build step, but there are a few exceptions.

### Vue

Vue is a progressive framework making it easy to start by just importing it from a CDN. Though it adds extra kB's compared to a built website, 55 kB vs less than 20kB.

### Lit

Lit can be used without a build step, but then you can't use decorators (atleast not until the [TC39 proposal](https://github.com/tc39/proposal-decorators) is implemented) and the syntax is a bit more verbose.

### React & Preact

If you want to use the JSX syntax, it is possible without a build step, but it requires importing the babel script which is at 546 kB. So don't do this for production.

Another option would be to use their `createElement` function directly, but that syntax isn't really readable compared to JSX.

```js
function Greeting({ name }) {
  return createElement(
    'h1',
    { className: 'greeting' },
    'Hello ',
    createElement('i', null, name),
    '. Welcome!'
  );
}
```

A third option could be to use [htm](https://github.com/developit/htm), which looks more similar to JSX and is smaller in size compared to the babel script.