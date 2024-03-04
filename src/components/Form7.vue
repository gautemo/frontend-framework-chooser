<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/mutability.md'

const valid = computed(() => store.value.mutable !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>Mutability?</legend>
      <label>
        <input type="radio" name="mutable" value="yes" :checked="store.mutable === false" @change="store.mutable = false"/>
        I prefer an immutable API
      </label>
      <label>
        <input type="radio" name="mutable" value="no" :checked="store.mutable" @change="store.mutable = true" />
        I prefer a mutable API
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/6">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 8 : 7}`">
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