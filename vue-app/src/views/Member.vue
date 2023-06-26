<template>
    <div class="h-full px-5 py-3">
        <div>
            <el-form :inline="true">
                <el-form-item class="float-right">
                    <el-button type="primary" size="small" @click="handleAdd"
                        >新增</el-button
                    >
                </el-form-item>
            </el-form>
        </div>
        <el-table
        :data="tableData"
        max-height="450"
        style="width: 100%"
        border
        v-if="tableData.length > 0"
        >
        <el-table-column
                label="操作"
                align="center"
                width="auto"
                prop="operation"
            >
                <template #default="scope">
                    <el-button
                        size="small"
                        type="primary"
                        @click="handleEdit(scope.row)">
                        <el-icon><EditPen /></el-icon>
                    </el-button>
                    <el-button
                        size="small"
                        type="danger"
                        @click="handleDelete(scope.$idnex, scope.row)">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column type="index" label="編號" align="center" width="100" />
            <el-table-column label="帳號" align="center" width="200" prop="account" />
            <el-table-column
                label="名稱"
                align="center"
                width="200"
                prop="user_name"
            />
            <el-table-column
                label="電話"
                align="center"
                width="200"
                prop="phone"
            />
            <el-table-column label="信箱" align="center" width="200" prop="mail" />
            <el-table-column label="地址" align="center" width="200" prop="address_country" />
            <el-table-column label="機構代號" align="center" width="200" prop="medical_institution_code" />
            <el-table-column label="藥局名稱" align="center" width="200" prop="medical_institution_name" />
            
        </el-table>
    </div>
    <DialogModel 
        :show="show"
        @closeModel="show = false"
        :editData="editData"
        />
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios';
import { EditPen, Delete } from "@element-plus/icons-vue";

const tableData = ref([])
const show = ref(false)
const editData = ref()

const getMember = async() => {
    const { data: { success, data } } = await axios.post('http://139.162.15.125:9090/api/health-insurance/admin-member.php')
    console.log(data);
    tableData.value = data
}

watchEffect(() => getMember())

const handleEdit = (row) => {
    show.value = true
    editData.value = row
}
const handleDelete = (row) => {}
const handleAdd = () => {
    show.value = true
}

const handelUpdateMember = () => {
    getMember()
}

</script>