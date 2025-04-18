<template>
    <van-config-provider>
        <router-view />
        <Tabbar />
    </van-config-provider>
</template>
<script lang="ts" setup>
import Tabbar from '@/components/tabbar/index.vue'
import { ref } from "vue";
const active = ref(0);
</script>