<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/typescript.md'

const valid = computed(() => store.value.typescript !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>Do you want to use JavaScript or TypeScript?</legend>
      <label>
        <input type="radio" name="typescript" value="yes" :checked="store.typescript === 'js'" @change="store.typescript = 'js'"/>
        JavaScript
      </label>
      <label>
        <input type="radio" name="typescript" value="no" :checked="store.typescript === 'ts'" @change="store.typescript = 'ts'" />
        TypeScript
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/1">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 3 : 2}`">
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