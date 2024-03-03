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
      <legend>How do you want to write the dynamic parts of your template?</legend>
      <label>
        <input type="radio" name="build" value="yes" :checked="store.template === 'jsx'" @change="store.template = 'jsx'"/>
        JSX
      </label>
      <label>
        <input type="radio" name="build" value="no" :checked="store.template === 'directive'" @change="store.template = 'directive'" />
        Directive
      </label>
      <label>
        <input type="radio" name="build" value="no" :checked="store.template === 'control-flow'" @change="store.template = 'control-flow'" />
        Control flow/Logic blocks
      </label>
      <label>
        <input type="radio" name="build" value="no" :checked="store.template === 'dedicated-components'" @change="store.template = 'dedicated-components'" />
        Dedicated components
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/4">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 6 : 5}`">
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