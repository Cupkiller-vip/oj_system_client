<template>
  <div class="questionMessage">
    <headerView></headerView>
    <div class="message">
      <div class="content">
        <div class="contentChange">
          <div>描述</div>
          <div>讨论</div>
          <div>题解</div>
          <div>记录</div>
        </div>
        <div class="restrict">
          <component :is="QuestionContent" :message="message"></component>
        </div>
      </div>
      <div class="line"></div>
      <div class="editor">
        <div class="setting">
          <div class="languageChange">
            <el-select v-model="setting.language">
              <el-option
                v-for="(item, index) in languageList"
                :value="item"
                :key="index"
              ></el-option>
            </el-select>
          </div>
          <div class="fontSizeChange">
            <el-select v-model="setting.fontSize">
              <el-option
                v-for="(item, index) in fontSizeList"
                :value="item"
                :key="index"
              ></el-option>
            </el-select>
          </div>
          <div class="reset" @click="reset">
            <img src="../assets/reset.svg" />
          </div>
          <div class="otherSetting" @click="dialogVisible = true">
            <img src="../assets/setting.svg" />
          </div>
        </div>
        <monacoEditor
          :editorTheme="setting.theme"
          :editorLanguage="setting.language"
          v-model="setting.code"
          :editorFontSize="setting.fontSize"
          :editorTabSize="setting.tabSize"
          :editorHasReset="setting.hasReset"
        ></monacoEditor>
        <div class="result">
          <div
            class="resultButton"
            @click="submit"
            style="background-color: #ffffff"
          >
            提交
          </div>
        </div>
      </div>
      <el-dialog v-model="dialogVisible">
        <div>
          <div>主题设置</div>
          <el-select v-model="setting.theme">
            <el-option
              v-for="(item, index) in themeList"
              :value="item"
              :key="index"
            ></el-option>
          </el-select>
        </div>
        <div>
          <div>Tab缩进</div>
          <el-select v-model="setting.tabSize">
            <el-option
              v-for="(item, index) in tabSizeList"
              :value="item"
              :key="index"
            ></el-option>
          </el-select>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script setup>
import { defineProps, onMounted, ref } from "vue";
import { questionApi } from "../api/questionApi";
import { editorStore } from "../stores/editor";
import HeaderView from "./HeaderView.vue";
import MonacoEditor from "../components/MonacoEditor.vue";
import QuestionContent from "./QuestionContent.vue";

const setting = editorStore();
const props = defineProps({
  id: String,
});
const message = ref({});
const dialogVisible = ref(false);
const languageList = ["cpp", "java", "python", "javascript"];
const fontSizeList = [16, 18, 20, 22, 24, 26, 28, 30, 32];
const themeList = ["vs", "vs-dark"];
const tabSizeList = [2, 4];
onMounted(async () => {
  let req = { id: props.id };
  let res = await questionApi.messageGet(req);
  if (!res.data.result) {
    message.value = res.data;
  }
});
function reset() {
  setting.hasReset = true;
}
async function submit() {
  let req = {
    Language: "C_CPP",
    Name: "%(W[Xp5",
    Debug: true,
    Input: "75",
    TimeOut: 1,
    SrcData: "#include <iostream> \nusing namespace std; \nconst int N = 1e9; \nint main(void) \n{ \n    char n[110]; \n    int *a = new int[N]; \n    for (int i = 0; i < N; i++) \n        a[i] = i; \n    cin >> n; \n    cout << n; \n    return 0; \n}",
    Version: "11"
  };
  let res = await questionApi.codeSubmit(req);
}
</script>
<style scoped>
.questionMessage {
  display: flex;
  flex-direction: column;
}
.message {
  display: flex;
  background-color: rgba(212, 215, 222, 0.3);
}
.content {
  flex: 1;
}
.contentChange {
  display: flex;
  width: 60%;
  height: calc((100vh - 0.3rem) * 0.05);
  font-size: 0.1rem;
}
.contentChange > div {
  flex: 1;
  text-align: center;
  line-height: calc((100vh - 0.3rem) * 0.05);
  cursor: pointer;
  color: #606266;
}
.restrict {
  height: calc(100vh - 0.3rem - (100vh - 0.3rem) * 0.05);
  overflow-y: auto;
}
.line {
  width: 0.5%;
}
.editor {
  flex: 1;
  height: calc(100vh - 0.3rem);
}
.setting,
.result {
  display: flex;
  height: 5%;
}
.setting > div,
.result > div {
  display: flex;
  justify-content: center;
  align-items: center;
}
.reset {
  margin-left: auto;
}
.reset,
.otherSetting {
  width: 0.3rem;
  cursor: pointer;
}
.result {
  font-size: 0.1rem;
  justify-content: right;
  align-items: center;
}
.resultButton {
  width: 15%;
  height: 75%;
  margin-right: 2%;
  border-radius: 0.01rem / 0.02rem;
  cursor: pointer;
  border: 0.01rem solid #303133;
}
.el-dialog__body > div {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
}
.el-dialog__body > div > .el-select {
  margin-left: auto;
}
</style>
