<template>
    <el-table
      :data="tableData"
      style="width: 95%"
      max-height="450"
      border
      v-if="tableData.length > 0"
    >
      <el-table-column type="index" label="編號" align="center" width="70" />
      <el-table-column label="帳號" align="center" width="auto" prop="account" />
      <el-table-column
        label="名稱"
        align="center"
        width="auto"
        prop="user_name"
      />
      <el-table-column
        label="電話"
        align="center"
        width="auto"
        prop="phone"
      />
      <el-table-column label="信箱" align="center" width="auto" prop="mail" />
      <el-table-column label="地址" align="center" width="auto" prop="address_country" />
      <el-table-column label="機構代號" align="center" width="auto" prop="medical_institution_code" />
      <el-table-column label="藥局名稱" align="center" width="auto" prop="medical_institution_name" />
    </el-table>
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios';

const tableData = ref([])

const getMember = async() => {
    const { data: { success, data } } = await axios.post('http://139.162.15.125:9090/api/health-insurance/admin-member.php')
    console.log(data);
    tableData.value = data
}

watchEffect(() => getMember())
</script>