## About component

There are mulitple formats of how you can write a component.

### Separate

Angular keeps the TypeScript file separate from the HTML and CSS. You can inline the HTML and CSS, but you will se most people keep them separate.

### JSX

JSX is a syntax where you are allowed to include HTML elements inside the JavaScript syntax. You have the full power of JavaScript which is good. The bad is that it could be a bit tangled.

Not many know this, but Vue also allows [JSX syntax](https://github.com/vuejs/babel-plugin-jsx).

### Single File Component

SFC is a natural extension of the classic trio of HTML, CSS and JavaScript. Keeping them separate but close together have the benefit of not mixing the languages (keeping it clean), but still have close proximity. A downside is if you would like to have multiple components in the same file, you would have to accept some alternative syntax.