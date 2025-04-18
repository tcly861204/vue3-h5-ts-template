<template>
  <section class="w-[100vw] h-[100vh]">
    <van-config-provider>
      <router-view />
      <Tabbar />
    </van-config-provider>
  </section>
</template>
<script lang="ts" setup>
import Tabbar from "@/components/tabbar/index.vue"
</script>
