<script setup lang="ts">
import {useDetailModule} from "../composables";
import Dialog from 'primevue/dialog';
import DetailDescription from "../components/DetailDescription.vue";
import DetailTerminal from "../components/DetailTerminal.vue";
import DetailList from "../components/DetailList.vue";
import DetailDescList from "../components/DetailDescList.vue";
import DetailCode from "../components/DetailCode.vue";
import EditDescription from "../components/EditDescription.vue";
import {onMounted, ref} from "vue";
import type {contentType} from "../interfaces";
import EditDocument from "../components/EditDocument.vue";

const {detail, updateDetail} = useDetailModule()

const contentComponents = {
  description: DetailDescription,
  terminal: DetailTerminal,
  list: DetailList,
  descList: DetailDescList,
  code: DetailCode
}

const editComponents = {
  description: EditDescription,
  terminal: EditDescription,
}

const editSection = ref<contentType>()
const editDoc = ref(false);

onMounted(() => {
  document.addEventListener('keydown', e => {
    if (e.ctrlKey && e.shiftKey) {
      updateDetail()
    }
  });

})
</script>

<template>
  <div class="detail" v-if="detail">
    <h1 @click="editDoc = true">{{ detail.title }}</h1>
    <p class="description">{{ detail.description }}</p>
    <div class="sections">
      <section v-for="section in detail.sections">
        <h2>{{ section.title }}</h2>
        <div class="section-content">
          <component
              v-for="c in section.content"
              :is="contentComponents[c.type]"
              :key="c"
              :content="c"
              @editMode="editSection = c"
          />
        </div>
      </section>
    </div>
  </div>

  <Dialog v-model:visible="editSection" modal header="Edit">
    <component
        :is="editComponents[editSection.type]"
        :content="editSection"
    />
  </Dialog>

  <Dialog v-model:visible="editDoc" modal header="Edit document">
    <EditDocument :detail="detail"/>
  </Dialog>
</template>

<style scoped lang="scss">
.detail {
  padding: 24px;
  width: 100%;
}

.sections {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.section-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

h1 {
  margin-bottom: 12px;
}

h2 {
  margin-bottom: 12px;
}

.description {
  font-size: 1.25rem;
  margin-bottom: 32px;
  color: #656565;
}
</style>