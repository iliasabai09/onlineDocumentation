<script setup lang="ts">
import {type PropType, ref} from "vue";
import type {IDescription} from "../interfaces";
import Textarea from 'primevue/textarea';

const props = defineProps({
  content: {
    type: Object as PropType<IDescription>
  }
})

const model = ref(props.content);
</script>

<template>
  <div class="textMode">
    <Textarea v-model="model!.text" class="textarea" :value="model?.text" rows="5" cols="30"/>
  </div>
</template>

<style scoped lang="scss">
.textMode {
  min-width: 700px;
  @media (max-width: 768px) {
    min-width: auto;
  }
}

.textarea {
  width: 100%;
  height: 200px;
}
</style>