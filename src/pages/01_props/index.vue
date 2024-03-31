<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h2>Parent-Child: 01_Props</h2>
      </div>
    </template>
    <father></father>
  </el-card>
</template>

<script setup lang="ts" name="Props_Father">
import father from './father.vue'
</script>

<style scoped></style>
