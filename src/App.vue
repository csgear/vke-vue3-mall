<template>
  <div>
    <router-view></router-view>
    <!-- <svg>
      <use href="#icon-copyright" fill="red" />
    </svg> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { reqLogin } from '@/api/user'
onMounted(() => {
  reqLogin({
    username: 'admin',
    password: '111111',
  })
})
</script>

<style scoped></style>
