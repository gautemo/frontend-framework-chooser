## Abot mental model

In all frameworks you write code that will run. But do you prefer the model where the code re-runs on every change or when it was just run when the component was created.

### UI as a simple function of state

UI as a simple function of state, with standard JavaScript values and idioms — is a key part of why React has been approachable for so many developers. You can think of that a state will always produce the same outcome. But is also means that all logic and functions you write, will run at each re-render. There exists some dependency arrays and footguns with that model.

### UI function is only run when component is created

On the other hand you have the model where you write some code to create a component, it will only run then. The framework is responsible for keeping the DOM up to date after that.