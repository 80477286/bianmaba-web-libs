<template>
  <el-config-provider :locale="locales[local]" size="large">
    <div style="display: flex;flex-direction: row;justify-content: space-between">{{ query.data.page }}
      <el-button-group>
        <el-select v-model="local" class="m-2" placeholder="Select">
          <el-option v-for="key in keys" :key="key" :label="key" :value="key"/>
        </el-select>
      </el-button-group>
      <el-button-group style="margin-left: 5px;">
        <el-input v-model="query.data.query" @clear="exeQuery"
                  v-on:keypress.enter="exeQuery" clearable>
          <template #append>
            <el-button @click="exeQuery">Search</el-button>
          </template>
        </el-input>
      </el-button-group>
    </div>
    <el-table :data="query.response.data" v-mask="{visible:true}"
              @row-dblclick="onRowDblClickHandler"
              :default-sort="query.data.order"
              @sort-change="sortChangeHandler"
              border stripe style="padding: 10px 0 10px 0;">
      <el-table-column prop="id" label="ID" width="180"/>
      <el-table-column prop="name" label="姓名" width="180" sortable/>
      <el-table-column prop="regin" label="所在地域"/>
      <el-table-column prop="province" label="所在省份"/>
      <el-table-column prop="city" label="所在城市"/>
      <el-table-column prop="address" label="地址"/>
      <el-table-column prop="phone" label="联系电话"/>
      <el-table-column prop="url" label="URL地址"/>
    </el-table>
    <el-pagination background
                   @current-change="exeQuery"
                   @size-change="exeQuery"
                   :total="query.response.total"
                   v-model:current-page="query.data.page"
                   v-model:page-size="query.data.size"
                   :hide-on-single-page="false"
                   :page-sizes="[10, 15, 20, 25,30, 35,40]"
                   layout="total, sizes, prev, pager, next, jumper"></el-pagination>
    <user-editor ref="userEditorRef"></user-editor>
    {{ query.data.order }}
  </el-config-provider>
</template>

<script lang="ts" setup>
import {onMounted, ref} from "vue";
import {userService} from "./UserService";
import * as locales from 'element-plus/es/locale/index'
import UserEditor from "./UserEditor.vue";
import {merge} from "@bianmaba/utils";
import {Order} from "@bianmaba/http-client";

const keys = ref(Object.keys(locales));
const local = ref('zhCn');

const query = userService.createQuery();
const userEditorRef = ref();

const sortChangeHandler = (column) => {
  exeQuery();
}
onMounted(() => {
  exeQuery();
})
const onRowDblClickHandler = (row: any) => {
  userEditorRef.value.edit(row.id)
}
const exeQuery = () => {
  query.execute()
}
</script>

<style scoped>

</style>