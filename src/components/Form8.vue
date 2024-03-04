<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/innovation.md'

const valid = computed(() => store.value.innovation !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>Stability and innovation?</legend>
      <label>
        <input type="range" min="1" :value="store.innovation" @change="e => store.innovation = Number((e.target as HTMLInputElement).value)"/>
        I want a lot of innovation, improvements and frequent changes
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/7">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 9 : 8}`">
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