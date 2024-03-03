<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/signals.md'

const valid = computed(() => store.value.signals !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>Do you want signals?</legend>
      <label>
        <input type="radio" name="build" value="yes" :checked="store.signals" @change="store.signals = true"/>
        Yes, please!
      </label>
      <label>
        <input type="radio" name="build" value="no" :checked="store.signals === false" @change="store.signals = false" />
        Nope.
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/5">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 7 : 6}`">
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