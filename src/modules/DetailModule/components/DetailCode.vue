<template>
  <div class="code-container">
    <div class="codeTabs">
      <div
          v-for="code in content.codes"
          :style="{ color: codeMap[code.lang].color }"
          class="codeTab"
          @click="selectCode(code)"
      >{{ codeMap[code.lang].lang }}
      </div>
    </div>
    <pre><code :class="'language-' + selectedCode.lang">{{ selectedCode.code }}</code></pre>
  </div>
</template>

<script setup lang="ts">
import Prism from 'prismjs';
import {nextTick, onMounted, type PropType, ref} from "vue";
import type {ICode} from "../interfaces";

const props = defineProps({
  content: {
    type: Object as PropType<ICode>,
    required: true
  }
})

const selectedCode = ref(props.content.codes[0]);
const codeMap = {
  javascript: {
    lang: "JS",
    color: 'blue'
  },
  html: {
    lang: "HTML",
    color: '#ff7400'
  },
}

function selectCode(code: any) {
  selectedCode.value = code;
  nextTick(() => Prism.highlightAll())
}

onMounted(() => {
  Prism.highlightAll()
})
</script>

<style scoped lang="scss">
.code-container {
  background-color: #282c34;
  color: white;
  border-radius: 8px;
  position: relative;
}

.codeTabs {
  display: flex;
  position: absolute;
  right: 8px;
  top: 8px;
  gap: 8px;
}

.codeTab {
  font-weight: bold;
  cursor: pointer;
}

pre {
  margin: 0;
  padding: 10px;
}
</style>
