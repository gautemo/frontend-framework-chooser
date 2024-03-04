<script setup lang="ts">
import { score } from '../store';
</script>

<template>
  <section>
    <div class="result">You should choose {{ score[0].name }}<div :class="score[0].logo"></div></div>
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

<style scoped>
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.result > div {
  display: inline-block;
  font-size: 2rem;
}
</style>