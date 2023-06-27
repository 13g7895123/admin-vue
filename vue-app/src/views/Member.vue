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
                        @click="handleDelete(scope.row)">
                        <el-icon><Delete /></el-icon>
                    </el-button>
                </template>
            </el-table-column>
            <el-table-column type="index" label="編號" align="center" width="100"/>
            <el-table-column label="帳號" align="center" width="200" prop="account"/>
            <el-table-column label="名稱" align="center" width="200" prop="user_name"/>
            <el-table-column label="電話" align="center" width="200" prop="phone"/>
            <el-table-column label="信箱" align="center" width="200" prop="mail"/>
            <el-table-column label="地址" align="center" width="200" prop="address_country"/>
            <el-table-column label="機構代號" align="center" width="200" prop="medical_institution_code"/>
            <el-table-column label="藥局名稱" align="center" width="200" prop="medical_institution_name"/>
        </el-table>
    </div>
    <DialogModel 
        :show="show"
        :editData="editData"
        @closeModel="closeModel"
        @handleUpdateProfiles="handelUpdateMember"
        />
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios';
import { EditPen, Delete } from "@element-plus/icons-vue";

const tableData = ref([])
const show = ref(false)
const editData = ref()
const operation = ref()   // 0為編輯，1為新增

const getMember = async() => {
    const { data: { success, data } } = await axios.post('http://139.162.15.125:9090/api/health-insurance/admin-member.php')

    if (success){
        tableData.value = data
    }else{
        history.go(0)
    }
}

watchEffect(() => getMember())

const handleAdd = () => {
    console.log('add click')
    console.log(operation.value)
    show.value = true
    operation.value = 1
}

const handleEdit = (row) => {
    console.log('edit click')
    console.log(operation.value)
    console.log(row);
    show.value = true
    editData.value = row
    operation.value = 0
}

const handleDelete = (row) => {}

const handelUpdateMember = () => {
    getMember()
}

const closeModel = () => {
    show.value = false
    editData.value = {}
}

</script>