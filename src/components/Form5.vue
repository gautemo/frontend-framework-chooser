<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/dynamictemplate.md'

const valid = computed(() => store.value.template !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>How do you want to write the dynamic parts of your template?</legend>
      <label>
        <input type="radio" name="template" value="yes" :checked="store.dynamicTemplate === 'js'" @change="store.dynamicTemplate = 'js'"/>
        JavaScript
      </label>
      <label>
        <input type="radio" name="template" value="no" :checked="store.dynamicTemplate === 'directive'" @change="store.dynamicTemplate = 'directive'" />
        Directive
      </label>
      <label>
        <input type="radio" name="template" value="no" :checked="store.dynamicTemplate === 'control-flow'" @change="store.dynamicTemplate = 'control-flow'" />
        Control flow/Logic blocks
      </label>
      <label>
        <input type="radio" name="template" value="no" :checked="store.dynamicTemplate === 'dedicated-components'" @change="store.dynamicTemplate = 'dedicated-components'" />
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