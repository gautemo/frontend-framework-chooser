<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/mentalmodel.md'

const valid = computed(() => store.value.componentType !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>What suits your mental model?</legend>
      <label>
        <input type="radio" name="componentType" value="yes" :checked="store.componentType === 're-run'" @change="store.componentType = 're-run'"/>
        UI as a function of state
      </label>
      <label>
        <input type="radio" name="componentType" value="no" :checked="store.componentType === 'create'" @change="store.componentType = 'create'" />
        UI create function
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/2">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 4 : 3}`">
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