<template>
  <section class="w-[100vw] h-[100vh]">
    <van-config-provider>
      <NavBar />
      <router-view />
      <Tabbar />
    </van-config-provider>
  </section>
</template>
<script lang="ts" setup>
import Tabbar from "@/components/tabbar/index.vue"
import NavBar from "@/components/navbar/index.vue"
</script>
