<script setup lang="ts">

</script>

<template>
<h1>Which framework should you choose?</h1>
<p>Answer some questions and figure out which is best suited for your needs</p>
<div>
  <router-link to="/1">
    <button>Let's go</button>
  </router-link>
</div>
<section class="frameworks">
  Frameworks: 
  <div class="i-logos-react"></div>
  <div class="i-logos-vue"></div>
  <div class="i-logos-angular-icon"></div>
  <div class="i-logos-svelte-icon"></div>
  <div class="i-logos-preact"></div>
  <div class="i-logos-solidjs-icon"></div>
</section>
</template>

<style scoped>
h1 {
  font-size: 2rem;
}

h1, p {
  text-align: center;
}

a {
  width: 100%;
}

div {
  display: grid;
  place-items: center;
}

div > a {
  width: fit-content;
}

.frameworks {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.frameworks > div {
  display: inline-block;
}
</style>