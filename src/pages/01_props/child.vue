<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h2>Child:</h2>
      </div>
    </template>
    <h3>My Toy：{{ toy }}</h3>
    <h4>Car from Parent：{{ car }}</h4>
    <br />
    <button @click="getToy(toy)">Give Toy</button>
  </el-card>
</template>

<script setup lang="ts">
import { ref, defineProps } from 'vue'
const toy = ref('Ultraman')
defineProps(['car', 'getToy'])
</script>

<style scoped></style>
