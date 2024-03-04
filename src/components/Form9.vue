<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/important.md'

const valid = computed(() => store.value.innovation !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>What is most important?</legend>
      <label>
        <input type="range" name="innovation" :value="store.dx" @change="e => store.dx = Number((e.target as HTMLInputElement).value)"/>
        Developer Experience
      </label>
      <label>
        <input type="range" name="innovation" :value="store.perf" @change="e => store.perf = Number((e.target as HTMLInputElement).value)"/>
        Performance
      </label>
      <label>
        <input type="range" name="innovation" :value="store.popular" @change="e => store.popular = Number((e.target as HTMLInputElement).value)"/>
        Ecosystem
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/8">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 'result' : 8}`">
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