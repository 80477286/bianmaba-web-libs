<template>
  <div class="bpmn-box">
    <div ref="containerRef" class="bpmn-container"></div>
    <div ref="propertiesPanelRef" id="properties-panel"></div>
  </div>
</template>

<script lang="ts" setup>
import {markRaw, onMounted, ref} from 'vue';
import 'bpmn-js/dist/assets/diagram-js.css';
import 'bpmn-js/dist/assets/bpmn-font/css/bpmn-embedded.css';
import BpmnModeler from 'bpmn-js/lib/Modeler';
import { BpmnPropertiesPanelModule, BpmnPropertiesProviderModule } from 'bpmn-js-properties-panel';

const containerRef = ref();
const propertiesPanelRef = ref();
onMounted(() => {
  console.log("BmbNpmnDesigner")
  setTimeout(() => {
    init();
  }, 50)
})
const init = () => {
  let containerEl = containerRef.value;
  // 加markRaw去除双向绑定作用域
  let bpmnModeler = markRaw(new BpmnModeler({
    container: containerEl,
    propertiesPanel: {
      parent: '#properties-panel'
    }
  }));
  bpmnModeler.createDiagram();
}
</script>
<style scoped>
.bpmn-box {
  width: 100%;
  height: 100%;
}

.bpmn-box .bpmn-container {
  width: 100%;
  height: 100%;
}
</style>
