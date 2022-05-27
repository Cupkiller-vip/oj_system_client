<template>
  <div class="monacoEditor" ref="dom"></div>
</template>
<script setup>
import { onMounted, ref, watch } from "vue";
import { editorStore } from "../stores/editor";
import * as monaco from "monaco-editor/esm/vs/editor/editor.main";
import "monaco-editor/esm/vs/basic-languages/cpp/cpp.contribution";
import "monaco-editor/esm/vs/basic-languages/java/java.contribution";
import "monaco-editor/esm/vs/basic-languages/python/python.contribution";
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";
import EditorWorker from "monaco-editor/esm/vs/editor/editor.worker?worker";
import TsWorker from "monaco-editor/esm/vs/language/typescript/ts.worker?worker";
import JsonWorker from "monaco-editor/esm/vs/language/json/json.worker?worker";
import CssWorker from "monaco-editor/esm/vs/language/css/css.worker?worker";
import HtmlWorker from "monaco-editor/esm/vs/language/html/html.worker?worker";

window.MonacoEnvironment = {
  getWorker(workerId, label) {
    if (label === "typescript" || label === "javascript") return new TsWorker();
    if (label === "json") return new JsonWorker();
    if (label === "css") return new CssWorker();
    if (label === "html") return new HtmlWorker();
    return new EditorWorker();
  },
};

const setting = editorStore();
const dom = ref();
let editor;
onMounted(() => {
  const editorModel = monaco.editor.createModel(
    setting.value,
    setting.language
  );
  editor = monaco.editor.create(dom.value, {
    model: editorModel,
    theme: setting.theme,
    selectOnLineNumbers: true,
    roundedSelection: false,
    cursorStyle: "line",
    automaticLayout: true,
    glyphMargin: true,
    useTabStops: false,
    fontSize: setting.fontSize,
    autoIndent: true,
    tabSize: setting.tabSize,
    minimap: {
      enabled: false,
    },
    lineDecorationsWidth: 2,
    lineNumbersMinChars: 2,
  });
  editor.onDidChangeModelContent(() => {
    const value = editor.getValue();
    setting.updateValue(value);
  });
});
watch(
  () => setting.language,
  () => {
    monaco.editor.setModelLanguage(editor.getModel(), setting.language);
  }
);
watch(
  () => setting.hasReset,
  () => {
    if (setting.hasReset === true) {
      editor.setValue(setting.originalValue);
      setting.hasReset = false;
    }
  }
);
watch(
  () => [setting.fontSize, setting.theme, setting.tabSize],
  () => {
    editor.updateOptions({
      fontSize: setting.fontSize,
      theme: setting.theme,
      tabSize: setting.tabSize,
    });
  }
);
</script>
<style scoped>
.monacoEditor {
  width: 100%;
  height: 90%;
}
</style>
