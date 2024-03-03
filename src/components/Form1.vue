<script setup lang="ts">
import { computed, ref } from 'vue';
import { store } from '../store'
import Docs from '../docs/buildtools.md'

const valid = computed(() => store.value.build !== undefined)
const dialog = ref<HTMLDialogElement | null>(null)
</script>

<template>
  <form>
    <fieldset>
      <legend>What's your thought about build tools?</legend>
      <label>
        <input type="radio" name="build" value="yes" :checked="store.build" @change="store.build = true"/>
        Yes, please!
      </label>
      <label>
        <input type="radio" name="build" value="no" :checked="store.build === false" @change="store.build = false" />
        No, package.json, npm, and such scares me.
      </label>
    </fieldset>
  </form>
  <button @click="dialog?.showModal()">Read more about this topic</button>
  <nav>
    <router-link to="/">
      <button><-</button>
    </router-link>
    <router-link :to="`/${valid ? 2 : 1}`">
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