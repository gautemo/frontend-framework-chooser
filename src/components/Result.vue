<script setup lang="ts">
import { score } from '../store';

console.log(score.value)
</script>

<template>
  <section>
    <p>You should choose {{ score[0].name }}</p>
    <ol>
      <li v-for="s of score" :key="s.name">
        <label>
          <progress :max="score[0].score" :value="s.score">{{ s.score }}</progress>
          {{ s.name }}
        </label>
      </li>
    </ol>
  </section>
  <nav>
    <router-link to="/9">
      <button><-</button>
    </router-link>
  </nav>
</template>

<style scoped></style>