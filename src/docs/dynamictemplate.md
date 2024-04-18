## Dynamic template

Often you need to have some dynamic template. Conditional rendering and listing elements in an array.

### JavaScript

If you know how JavaScript works, you can leverage it to what the render function should return. Meaning there are multiple ways to achive the same outcome. Multiple possibilities are good for flexibility, but it can also lead to confusing about which to choose.

#### Conditional rendering

Option 1:
```jsx
function render() {
  if(isDay) {
    return <p>🌞</p>
  }
}
```

Option 2:
```jsx
function render() {
  return <>
    { isDay && <p>🌞</p> }
  </>
}
```

Option 3:
```jsx
function render() {
  return <>
    { isDay ? <p>🌞</p> : null }
  </>
}
```

#### List

```jsx
<ul>
  {todos.map(todo => 
    <li>{todo.text}</li>
  )}
</ul >
```

### Directive

#### Conditional rendering

```html
<p v-if="isDay">☀️</p>
```

#### List

```html
<ul>
  <li v-for="todo in todos">{{todo.text}}</li>
</ul>
```

### Control flow/Logic blocks

#### Conditional rendering

Svelte:
```svelte
{#if isDay}
  <p>☀️</p>
{/if}
```

Angular:
```html
@if (isDay) {
  <p>☀️</p>
}
```

#### List

Svelte:
```svelte
<ul>
	{#each todos as todo}
		<li>{todo.text}</li>
	{/each}
</ul>
```

Angular:
```html
<ul>
  @for (todo of todos) {
    <li>{{ todo.text }}</li>
  }
</ul>
```

### Dedicated components

Solid uses JSX, but since the component will only run once it needs dedicated components to control dynamic content.

#### Conditional rendering

```jsx
<Show when={isDay}>
  <p>☀️</p>
</Show>
```

#### List

```jsx
<For each={todos()}>
  {todo =>
    <li>{todo.text}</li>
  }
</For>
```