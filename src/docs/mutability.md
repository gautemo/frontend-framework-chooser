## About mutability

You can mutate state in all frameworks, but they provide different APIs to achieve this. The main difference is if the API is mutable or immutable. What is best, it is actually just a developer preference.

### Immutable

Here the value is separated from the setter.

```js
const [count, setCount] = useState(0)
setCount(count + 1)
```

Benefits is that you don't have to pass around the setter function and are more in control over where the update is happening. The downside is a more verbose API

Example of how verbose it can be on an object:
```js
const [country, setCountry] = useState({
  name: 'Norway',
  counties: {
    Oslo: {
      code: 'NO-03',
      population: 700_000,
    }
  }
})
setCountry({
  ...country,
  counties: {
    ...country.counties,
    Oslo: {
      ...country.counties.Oslo,
      population: 710_000
    }
  }
})
```

### Mutable

Here you can read and update the same value.

```js
const count = ref(0)
count.value++
```

Benefits is that it is simpler and gives the developer more freedome.

Example of a simpler world for the country example, updating just the population for Oslo.

```js
const country = reactive({
  name: 'Norway',
  counties: {
    Oslo: {
      code: 'NO-03',
      population: 700_000,
    }
  }
})
country.counties.Oslo.population = 710_000
```

Note that in some frameworks, Preact and Lit, you mutate the same state but you require an assignment for the reactivity to trigger.