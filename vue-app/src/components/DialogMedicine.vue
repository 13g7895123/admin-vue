<template>
    <el-dialog 
        :before-close="handleClose"
        v-model="props.show"
        :title="props.operation ? '新增會員資料' : '編輯會員資料'">
        <el-form
            :model="dialogData"
            ref="dialogRef"
            label-width="120px"
            style="margin: 10px; width: auto"
            >
            <el-form-item prop="account" label="帳號">
                <el-input v-model="dialogData.account" :readonly="!props.operation"></el-input>
            </el-form-item>
            <el-form-item prop="user_name" label="聯絡人">
                <el-input v-model="dialogData.user_name"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密碼">
                <el-input v-model="dialogData.password" type="password" :placeholder="!props.operation ? '不修改則留空' : ''"></el-input>
            </el-form-item>
            <el-form-item prop="passwordCheck" label="密碼確認">
                <el-input v-model="dialogData.passwordCheck" type="password" :placeholder="!props.operation ? '不修改則留空' : ''"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="手機">
                <el-input v-model="dialogData.phone"></el-input>
            </el-form-item>
            <el-form-item prop="mail" label="郵件">
                <el-input v-model="dialogData.mail"></el-input>
            </el-form-item>
            <!-- 地址先不開放變更 -->
            <el-form-item prop="medical_institution_name" label="藥局名稱">
                <el-input v-model="dialogData.medical_institution_name"></el-input>
            </el-form-item>
            <el-form-item prop="medical_institution_code" label="醫療機構代號">
                <el-input v-model="dialogData.medical_institution_code"></el-input>
            </el-form-item>
            <el-form-item class="text-right">
                <el-button @click="handleClose">取消</el-button>
                <el-button type="primary" @click="handleSubmit(dialogRef)">提交</el-button>
            </el-form-item>
        </el-form>
    </el-dialog>
</template>
<script setup>
import { ref, watch } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'

const dialogRef = ref()
const apiUrl = ref()

const dialogData = ref({    
    medicine_code : '',
    eng_name : '',
    medicine_name : '',
    ingredient : '',
    ingredient_num : '',
    specification_quantity : '',
    single_compound : '',
    price : '',
    start_and_end : '',
    medicine_manufacturer : '',
    dosage : '',
    classification : '',
    classification_group : '',
    ATC_code : '',
    remark : '',
})

watch(
    () => props.editData,
    () => {
        dialogData.value = props.editData;
    }
);

const handleSubmit = (formEl) => {
    if (!formEl) return;
    formEl.validate(async(valid) => {
        if (valid){
            const apiUrlOperation = props.operation == true ? 'add': 'edit'
            const apiUrlOperationText = apiUrlOperation == 'add' ? '新增' : '編輯'
            apiUrl.value = `http://139.162.15.125:9090/api/health-insurance/admin-medicine-${apiUrlOperation}.php`
            const { data: { success, msg } } = await axios.post(
                apiUrl.value,
                dialogData.value
            )

            if (success){
                handleClose()
                Swal.fire({
                    title: `${apiUrlOperationText}藥品成功`,
                    icon: 'success',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000,
                }).then(() => {
                    emits('handleUpdateProfiles')
                })
            }else{
                handleClose()
                Swal.fire({
                    title: `${apiUrlOperationText}藥品失敗`,
                    text: msg,
                    icon: 'error',
                    showConfirmButton: false,
                    showCancelButton: false,
                    timer: 2000,
                })
            }
        }
    })
}

const handleClose = () => {
    emits("closeModel");
}

// 接收父層資料
const props = defineProps({
    show: Boolean,
    editData: Object,
    operation: Boolean
})

// 回傳至父層，要觸發的方法
const emits = defineEmits(["closeModel", "handleUpdateProfiles"]);
</script>