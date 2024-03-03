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
</style>