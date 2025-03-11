<script setup lang="ts">
import {type PropType} from "vue";
import type {ITerminal} from "../interfaces";

defineProps({
  content: {
    type: Object as PropType<ITerminal>,
    required: true
  }
})

const emits = defineEmits(['editMode'])
</script>

<template>
  <pre
      class="terminal"
      style="white-space: pre-wrap"
      @click="emits('editMode')"
  >{{ content.text }}</pre>
</template>

<style scoped lang="scss">
.terminal {
  background-color: #000;
  color: #fff;
  border-radius: 12px;
  padding: 12px 16px;
  width: 100%;
  line-height: 1.3rem;
  max-width: 700px;
  font-weight: 700;
  font-size: 14px;
  letter-spacing: 1px;
}
</style>