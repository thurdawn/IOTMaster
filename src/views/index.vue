<template>
  <div>Hello world.</div>
  <div>{{ userStore.info.name }}</div>
  <el-button>按钮</el-button>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user';

const userStore = useUserStore();
</script>

<style lang="scss" scoped></style>
