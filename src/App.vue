<script setup>
import Header from "@/components/Header.vue";
import CustomCursor from "@/components/CustomCursor.vue";
</script>

<template>
  <router-view ></router-view>
  <CustomCursor/>
</template>

<style scoped>
body {
  cursor: none;
}
</style>
