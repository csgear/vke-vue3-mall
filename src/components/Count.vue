<template>
  <div class="count">
    <h2>The sum: {{ countStore.sum }}</h2>
    <select v-model.number="step">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="Add">Add</button>
    <button @click="Substract">Substract</button>
  </div>
</template>

<script setup lang="ts" name="Count">
import { ref } from 'vue'
import { useCountStore } from '@/store/count'

let countStore = useCountStore()
let step = ref(1)

function Add() {
  // option 1
  countStore.sum += step.value
  // option 2
  // countStore.$patch({
  //   sum: 2,
  // })
  // option 3, use action
}

function Substract() {
  countStore.sum -= step.value
}
</script>

<style scoped>
.count {
  background-color: skyblue;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>
