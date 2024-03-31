<template>
  <el-card>
    <template #header>
      <div class="card-header">
        <h2>Parent:</h2>
      </div>
    </template>
    <h3>My car：{{ car }}</h3>
    <h4>Toy from Child：{{ toy }}</h4>
    <br />
    <br />
    <child :car="car" :getToy="getToy"></child>
  </el-card>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import child from './child.vue'

let car = ref('Mercedes-Benz')
let toy = ref('')

function getToy(value: string) {
  toy.value = value
}
</script>

<style scoped></style>
