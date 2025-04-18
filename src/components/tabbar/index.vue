<script lang="ts" setup>
import { ref, reactive } from "vue"
const active = ref(0)
const tabList = reactive([
  {
    key: "home",
    title: "首页",
    icon: "home-o",
    to: {
      name: "home"
    }
  },
  {
    key: "tools",
    title: "工具",
    icon: "gem-o",
    to: {
      name: "tools"
    }
  },
  {
    key: "my",
    title: "我的",
    icon: "contact-o",
    to: {
      name: "my"
    }
  }
])
</script>
<template>
  <van-tabbar v-model="active">
    <van-tabbar-item
      v-for="item in tabList"
      :key="item.key"
      :icon="item.icon"
      :to="item.to"
      >{{ item.title }}</van-tabbar-item
    >
  </van-tabbar>
</template>
