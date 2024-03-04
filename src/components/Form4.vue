<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/component.md'

const valid = computed(() => store.value.component !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>How do you want to write your component?</legend>
      <label>
        <input type="radio" name="component" value="yes" :checked="store.component === 'separate'" @change="store.component = 'separate'"/>
        I want to keep HTML, JavaScript, and CSS in separate files
      </label>
      <label>
        <input type="radio" name="component" value="no" :checked="store.component === 'jsx'" @change="store.component = 'jsx'" />
        JSX
      </label>
      <label>
        <input type="radio" name="component" value="no" :checked="store.component === 'sfc'" @change="store.component = 'sfc'" />
        Single File Component
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/3">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 5 : 4}`">
      <button :disabled="!valid">-></button>
    </router-link>
  </nav>
  <dialog ref="dialog">
    <Docs />
    <button @click="dialog?.close()">Close</button>
  </dialog>
</template>

<style scoped>
::backdrop {
  background-image: linear-gradient(
    45deg,
    magenta,
    rebeccapurple,
    dodgerblue,
    green
  );
  opacity: 0.75;
}
</style>