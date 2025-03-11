<script setup lang="ts">
import {type PropType} from 'vue';
import Tree from 'primevue/tree'

defineProps({
  categories: {
    type: Object as PropType<any[]>,
    default: [],
    required: false
  }
})
</script>

<template>
  <Tree :value="categories" class="tree">
    <template #default="slotProps">
      <div class="mainItem">
        <img :src="slotProps.node.icon" alt="vue" width="22">
        <b>{{ slotProps.node.label }}</b>
      </div>
    </template>
    <template #url="slotProps">
      <router-link :to="slotProps.node.data"
                   class="text-surface-700 dark:text-surface-0 hover:text-primary">
        {{ slotProps.node.label }}
      </router-link>
    </template>
  </Tree>
</template>

<style scoped lang="scss">
.tree {
  min-width: 400px;
  height: 100%;
}

.mainItem {
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>