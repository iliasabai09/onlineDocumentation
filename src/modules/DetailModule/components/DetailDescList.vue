<script setup lang="ts">
import type {PropType} from "vue";
import type {IDescList} from "../interfaces";

defineProps({
  content: {
    type: Object as PropType<IDescList>,
    required: true
  }
})
</script>

<template>
  <div class="descList">
    <div v-for="(desc, idx) in content.list">
      <h3>{{ idx + 1 }}. {{ desc.title }}</h3>
      <p>{{ desc.text }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.descList {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-top: 4px;
}

h3 {
  margin-bottom: 4px;
}

p {
  font-size: 16px;
  font-style: italic;
  line-height: 1.5rem;
  color: #555555;
}
</style>