<template>
    <div class="relative w-screen h-screen bg-registerBg bg-cover bg-no-repeat bg-center">
        <section class="w-[370px] h-[210px] absolute top-[10%] left-[34%] text-center">
            <sapn class="text-[26px]">後臺管理系統</sapn>
            <el-form 
            :rules="rules"
            :model="registerUser"
            label-width="100px"
            class="mt-5 bg-white py-5 px-3 rounded-md shadow-md"
            >
                <el-form-item label="使用者名稱" prop="name">
                    <el-input
                        v-model="registerUser.name"
                        placeholder="請輸入使用者名稱"
                    ></el-input>
                </el-form-item>
                <el-form-item label="信箱" prop="email">
                    <el-input
                        v-model="registerUser.email"
                        placeholder="請輸入信箱"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="password">
                    <el-input 
                        v-model="registerUser.password"
                        placeholder="請輸入密碼"
                    ></el-input>
                </el-form-item>
                <el-form-item label="確認密碼" prop="passwordCheck">
                    <el-input
                        v-model="registerUser.passwordCheck"    
                        placeholder="請確認密碼"
                    ></el-input>
                </el-form-item>
                <el-form-item class="w-full flex justify-center">
                    <el-button class="w-full">註冊</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'

const registerUser = ref({
    name: '',
    email: 'test@gmail.com',
    password: '123123',
    passwordCheck: '123123'
})

const validatorPassCheck = (value, callback) => {
    if (value !== registerUser.value.password){
        callback(new Error("Two inputs don't match"))
    }
}

const rules = reactive({
    name: [
        { required: true, message: '使用者名稱不可為空', trigger: 'change'},
        { min: 2, max: 12, message: '長度在2到12個字串之間', trigger: 'blur'}
    ],
    email: [{ type: 'email', required: true, message: '信箱格式不正確', trigger: 'blur' }],
    password: [
        { required: true, message: '密碼不可為空', trigger: 'blur'},
        { min: 6, max: 12, message: '長度在6到12個字串之間', trigger: 'blur'}
    ],
    passwordCheck: [
        { required: true, message: '密碼不可為空', trigger: 'blur'},
        { min: 6, max: 12, message: '長度在6到12個字串之間', trigger: 'blur'},
        { validator: validatorPassCheck, trigger: 'blur'}
    ],
})
</script>