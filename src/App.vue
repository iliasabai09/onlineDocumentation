<script setup lang="ts">
import NavigationModule from "./modules/NavigationModule/views/NavigationModule.vue";
</script>

<template>
  <header>
    <h1>Online Documentation</h1>
  </header>
  <main>
    <NavigationModule/>
    <router-view/>
  </main>
</template>

<style scoped lang="scss">
header {
  height: 60px;
  width: 100%;
  background-color: #2b2b2b;
  color: #fff;
  box-sizing: border-box;
  padding: 0 30px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
}

main {
  margin-top: 60px;
  display: flex;
  height: 100%;
  background-color: #f8fafc;
}
</style>
