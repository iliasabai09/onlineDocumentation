<script setup lang="ts">
import DesktopNavigation from "../components/DesktopNavigation.vue";
import MobileNavigation from "../components/MobileNavigation.vue";
import {useNavigationModule} from "../composables";

const {categories} = useNavigationModule()

</script>

<template>
  <DesktopNavigation :categories="categories"/>
  <MobileNavigation/>
</template>

<style scoped lang="scss">

</style>