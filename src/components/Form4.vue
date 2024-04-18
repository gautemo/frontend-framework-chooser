<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/template.md'

const valid = computed(() => store.value.template !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>How do you want to write your template?</legend>
      <label>
        <input type="radio" name="component" value="yes" :checked="store.template === 'html'" @change="store.template = 'html'"/>
        HTML file
      </label>
      <label>
        <input type="radio" name="component" value="yes" :checked="store.template === 'template-literals'" @change="store.template = 'template-literals'"/>
        Template literals
      </label>
      <label>
        <input type="radio" name="component" value="no" :checked="store.template === 'jsx'" @change="store.template = 'jsx'" />
        JSX
      </label>
      <label>
        <input type="radio" name="component" value="no" :checked="store.template === 'sfc'" @change="store.template = 'sfc'" />
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