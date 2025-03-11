<script setup lang="ts">
import {type PropType, ref} from "vue";
import type {IDetail} from "../interfaces";
import Textarea from "primevue/textarea";
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';

const props = defineProps({
  detail: {
    type: Object as PropType<IDetail>,
  }
})

const model = ref(props.detail)

function addCategory() {
  model.value?.sections.push({
    title: '',
    content: []
  });
}

function removeCategory(index: number) {
  model.value?.sections.splice(index, index + 1)
}
</script>

<template>
  <div class="editMode">
    <div class="editDocument">
      <InputText type="text" v-model="model!.title" :value="model!.title"/>
      <Textarea v-model="model!.description" class="textarea" :value="model!.description" rows="5" cols="30"/>
    </div>
    <div class="categories">
      <div class="categories-header">
        <h4 class="categoryTitle">Категории</h4>
        <Button label="Add category" size="small" @click="addCategory"/>
      </div>
      <div class="fieldGroup" v-for="(c, idx) in model?.sections">
        <InputText type="text" v-model="c.title" :value="c.title" class="categoryInput"/>
        <Button icon="pi pi-times" severity="danger" aria-label="Cancel" @click="removeCategory(idx)"/>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.editDocument {
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
}

.categoryInput {
  width: 100%;
}

.fieldGroup {
  display: flex;
  align-items: center;
  gap: 12px;
}

.editMode {

}

.categories {
  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
  }

  display: flex;
  flex-direction: column;
  gap: 12px;
}

.textarea {
  width: 100%;
}
</style>