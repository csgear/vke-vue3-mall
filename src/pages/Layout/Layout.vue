<template>
  <el-row class="tac">
    <el-col :span="4">
      <h5 class="mb-2">Default colors</h5>
      <el-menu default-active="2">
        <el-menu-item index="1">
          <el-icon><Compass /></el-icon>
          <span>Navigator One</span>
        </el-menu-item>
        <el-menu-item index="2">
          <el-icon><Link /></el-icon>
          <span>Navigator Two</span>
        </el-menu-item>
        <el-menu-item index="3">
          <el-icon><Document /></el-icon>
          <span>Navigator Three</span>
        </el-menu-item>
        <el-menu-item index="4">
          <el-icon><Setting /></el-icon>
          <span>Navigator Four</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="8">
      <RouterView />
    </el-col>
  </el-row>
</template>

<script setup lang="ts" name="Layout">
import { Document, Compass, Setting, Link } from '@element-plus/icons-vue'
import { RouterView } from 'vue-router'
</script>

<style scoped></style>
