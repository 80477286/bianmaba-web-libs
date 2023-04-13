<template>
  <el-dialog title="用户编辑"
             :model-value="state.visible"
             @close="state.visible=false"
             destroy-on-close
             fullscreen
             append-to-body
             :close-on-click-modal="false">
    <el-form
        :model="getById.response.data"
        :rules="rules"
        v-loading="getById.loading||save.loading"
        ref="formRef"
        label-position="right"
        label-width="120px">
      <el-form-item label="姓名" prop="name" class="el-col-12">
        <el-input v-model="getById.response.data.name" maxlength="32" min="3" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="所在区域" prop="regin" class="el-col-12">
        <el-input v-model="getById.response.data.regin" maxlength="32" min="1" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="所在省份" prop="province" class="el-col-12">
        <el-input v-model="getById.response.data.province" maxlength="32" min="1" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="所在城市" prop="city" class="el-col-12">
        <el-input v-model="getById.response.data.city" maxlength="32" min="3" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="地址" class="el-col-12">
        <el-input v-model="getById.response.data.address" maxlength="128" min="3" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="电话" prop="phone" class="el-col-12">
        <el-input v-model="getById.response.data.phone" maxlength="18" min="3" show-word-limit></el-input>
      </el-form-item>
      <el-form-item label="URL" class="el-col-12">
        <el-input v-model="getById.response.data.url" maxlength="128" min="3" show-word-limit></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <div>
        <el-button @click="onBtnResetHandler">重置</el-button>
        <el-button type="primary" @click="onBtnSaveHandler">保存</el-button>
      </div>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>

import {reactive} from "vue";
import {ElNotification, FormRules} from "element-plus";
import {userService} from "./UserService";

const getById = userService.createGetById();
const save = userService.createSave();
const state = reactive({
  visible: false,
  srcId: null
})
const rules = reactive<FormRules>({
  name: [{required: true, message: '请输入人员姓名', trigger: 'blur'},
    {min: 3, max: 32, message: '长度必须为 3 - 32个字符', trigger: 'blur'}],
  regin: [{required: true, message: '请输入所在地域', trigger: 'blur'},
    {min: 1, max: 32, message: '长度必须为 1 - 32 个字符', trigger: 'blur'}],
  province: [{required: true, message: '请输入所在省份', trigger: 'blur'},
    {min: 1, max: 32, message: '长度必须为 1 - 32 个字符', trigger: 'blur'}],
  city: [{required: true, message: '请输入所在城市', trigger: 'blur'},
    {min: 1, max: 32, message: '长度必须为 1 - 32 个字符', trigger: 'blur'}],
  phone: [{required: true, message: '请输入联系电话', trigger: 'blur'},
    {min: 1, max: 32, message: '长度必须为 1 - 32 个字符', trigger: 'blur'}]
})
const onBtnResetHandler = () => {
  exeGetById();
}
const onBtnSaveHandler = () => {
  save.execute('/user/save', getById.response).then((resp: any) => {
    state.visible = false;
    ElNotification.success({title: '提示', message: resp.result})
  });
}

const exeGetById = () => {
  getById.execute('user/getById', {id: state.srcId}).then((resp: any) => {
    console.log(resp)
  })
}

const edit = (id: any) => {
  state.srcId = id;
  state.visible = true;
  exeGetById();
}


defineExpose({edit})
</script>
<style scoped>

</style>
