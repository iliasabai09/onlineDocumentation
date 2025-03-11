<script setup lang="ts">
import type {PropType} from "vue";
import type {IList} from "../interfaces";

defineProps({
  content: {
    type: Object as PropType<IList>,
    required: true
  }
})
</script>

<template>
  <div class="numbered-list-container">
    <h4>{{ content.title }}</h4>
    <div class="numbered-list">
      <div v-for="(item, index) in content.items" :key="index">
        <span class="list-number">{{ index + 1 }}.</span> {{ item }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.numbered-list-container {
  //padding: 12px;
  //background-color: #f4f4f9;
  border-radius: 10px;
  width: 100%;
  max-width: 700px;
  //border: 2px solid #eaeaea;
}

h4 {
  color: #333;
  margin-bottom: 12px;
}

.numbered-list {
  padding-left: 8px;
  list-style-type: decimal;
  font-size: 1em;
  line-height: 1.3;
}

.numbered-list div {
  margin-bottom: 10px;
  color: #555;
}

.list-number {
  font-weight: bold;
  color: #007BFF;
  margin-right: 8px;
}
</style>