<template>
  <el-container class="common-layout">
    <el-header height="50px">
      <Header />
    </el-header>
    <el-container>
      <el-aside width="220px">
        <Aside :active="state.active" />
      </el-aside>
      <el-container direction="vertical">
        <div class="breadcrumb">
          <el-breadcrumb separator=">">
            <el-breadcrumb-item v-for="item in state.breadList" :to="{ path: item.path }">
              {{ item.label }}
            </el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script setup lang="ts">
import Header from './Header.vue';
import Aside from './Aside.vue';
import { menus } from '@/json/layout';
import { useRoute } from 'vue-router';
import { reactive, watch } from 'vue';

const route = useRoute();

interface IBreadItem {
  path?: string;
  label: string;
}
const state = reactive({ breadList: [] as IBreadItem[], active: '' });

watch(
  () => route.path,
  (nowPath) => {
    const list: IBreadItem[] = [];
    for (const item of menus) {
      const { path, label, children } = item;
      if (children) {
        const subItem = children.find((c) => c.path === nowPath);
        if (subItem) {
          list.push({ path, label }, { label: subItem.label });
          break;
        }
      } else if (path === nowPath) {
        list.push({ path, label });
        break;
      }
    }
    state.breadList = list;
    state.active = nowPath;
  },
  { immediate: true, deep: true }
);
</script>

<style lang="scss" scoped>
.common-layout {
  height: 100%;

  .el-header {
    padding: 0 24px;
    border-bottom: 1px solid #cbd5e0;
  }

  .el-aside {
    border-right: 1px solid #cbd5e0;
  }

  .el-main {
    padding: 0;

    > * {
      padding: 0 20px 0 16px;
    }
  }

  .breadcrumb {
    display: flex;
    align-items: center;
    padding: 0 20px 0 16px;
    height: 50px;
    border-bottom: 1px solid #cbd5e0;
  }
}
</style>
