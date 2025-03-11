<script setup lang="ts">
import type {PropType} from "vue";
import type {IDescription} from "../interfaces";

defineProps({
  content: {
    type: Object as PropType<IDescription>,
    required: true
  }
})

const emits = defineEmits(['editMode'])
</script>

<template>
  <p @click="emits('editMode')">{{ content.text }}</p>
</template>

<style scoped lang="scss">
p {
  font-size: 16px;
}
</style>