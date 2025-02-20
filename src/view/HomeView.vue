<script setup >

import Header from "@/components/Header.vue";
import InicioAnimation from "@/components/InicioAnimation.vue";
import Welcome from "@/components/Welcome.vue";
</script>
<template>
  <InicioAnimation/>
  <Header class="absolute top-6 w-full"/>
  <router-view></router-view>
</template>
<style scoped>
</style>