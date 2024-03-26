<template>
  <h2 class="title">Vue Router Test</h2>
  <nav class="navbar">
    <ul class="nav-list">
      <li><RouterLink to="/home">Home</RouterLink></li>
      <li><RouterLink to="/news">News</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
    </ul>
  </nav>
  <main class="main-content">
    <RouterView></RouterView>
  </main>
</template>

<script setup lang="ts" name="Person">
import { RouterView, RouterLink } from 'vue-router'
</script>

<style scoped>
.title {
  text-align: center;
  word-spacing: 5px;
  height: 70px;
  line-height: 70px;
  border-radius: 10px;
}

.main-content {
  background-color: aqua;
  height: 60vh;
}

.navbar {
  background-color: #333;
  padding: 10px;
}

.nav-list {
  list-style: none;
  padding: 0;
  display: flex;
}

.nav-list li {
  margin-right: 20px;
}

.nav-list li a {
  text-decoration: none;
  color: white;
}

.nav-list li a:active {
  color: darkorange;
}

.nav-list li a:hover {
  color: #ffd700;
}
</style>
