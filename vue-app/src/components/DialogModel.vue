<template>
    <el-dialog 
        :before-close="handleClose"
        v-model="props.show"
        :title="editData ? '編輯會員資料' : '新增會員資料'">
        <el-form
            :model="dialogData"
            ref="dialogRef"
            label-width="120px"
            style="margin: 10px; width: auto"
            >
            <el-form-item prop="account" label="帳號">
                <el-input v-model="dialogData.account" type="account"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="密碼">
                <el-input v-model="dialogData.password" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="passwordCheck" label="密碼確認">
                <el-input v-model="dialogData.passwordCheck" type="password"></el-input>
            </el-form-item>
            <el-form-item prop="phone" label="手機">
                <el-input v-model="dialogData.phone"></el-input>
            </el-form-item>
            <el-form-item prop="mail" label="郵件">
                <el-input v-model="dialogData.mail"></el-input>
            </el-form-item>
            <!-- 地址先不開放變更 -->
            <el-form-item prop="MIName" label="藥局名稱">
                <el-input v-model="dialogData.MIName"></el-input>
            </el-form-item>
            <el-form-item prop="MICode" label="醫療機構代號">
                <el-input v-model="dialogData.MICode"></el-input>
            </el-form-item>
            <!-- <el-form-item label="收支类型">
                <el-select v-model="formData.type" placeholder="收支类型">
                <el-option
                    v-for="(formType, index) in typeList"
                    :key="index"
                    :label="formType"
                    :value="formType"
                ></el-option>
                </el-select>
            </el-form-item> -->
            <el-form-item prop="MICate" label="醫療機構種類123">
                <!-- <el-input v-model="dialogData.MICate"></el-input> -->
                <el-select v-model="dialogData.MICate" placeholder="醫療機構種類">
                    <el-option
                        v-for="(formType, index) in miCate"
                        :key="index"
                        :label="formType"
                        :value="formType"
                    ></el-option>
                    <!-- <el-option :label="自開藥局" :value="自開藥局"></el-option>
                    <el-option :label="受聘藥師" :value="受聘藥師"></el-option> -->
                    <!-- <el-option>受聘藥師</el-option> -->
                </el-select>
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

const dialogRef = ref()
const miCate = ref(['自開藥局', '受聘醫師'])

const dialogData = ref({
    account: '',
    name: '',               // 聯絡人
    password: '',           // 密碼
    passwordCheck: '',      // 密碼確認
    phone: '',              // 電話
    mail: '',               // 郵件
    address1: '',
    address2: '',
    address3: '',
    MIName: '',
    MICode: '',
    MICate: ''
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
            const { data } = await axios.post(
                'http://139.162.15.125:9090/api/health-insurance/admin-member-add.php',
                dialogData.value
            )
        }
    })
}

const handleClose = () => {
    console.log('close dialog');
    emits("closeModel");
}

const props = defineProps({
    show: Boolean,
    editData: Object
})

const emits = defineEmits(["closeModel", "handleUpdateProfiles"]);
</script>