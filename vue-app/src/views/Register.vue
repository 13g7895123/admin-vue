<template>
    <div class="relative w-screen h-screen bg-registerBg bg-cover bg-no-repeat bg-center">
        <section class="w-[370px] h-[210px] absolute top-[10%] left-[34%] text-center">
            <span class="text-[26px]">後臺管理系統</span>
            <el-form 
            :rules="rules"
            :model="registerUser"
            ref="ruleFormRef"
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
                        type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item label="確認密碼" prop="passwordCheck">
                    <el-input
                        v-model="registerUser.passwordCheck"    
                        placeholder="請確認密碼"
                        type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item class="w-full flex justify-center">
                    <el-button 
                        @click="handleSubmit(ruleFormRef)"
                        class="w-full"
                    >註冊</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from "vue-router";
// import type { FormInstance } from 'element-plus'

const ruleFormRef = ref()
const router = useRouter();

const registerUser = ref({
    name: '123',
    email: '123@gmail.com',
    password: '123123',
    passwordCheck: '123123'
})

const validatorPassCheck = (rule, value, callback) => {
    if (value !== registerUser.value.password){
        callback(new Error("Two inputs don't match"))
    }else{
        callback()
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

const handleSubmit = (formEl) => {
    if (!formEl) return;
    formEl.validate(async(valid) => {
        if (valid){
            const { data } = await axios.post(
                'http://139.162.15.125:9090/api/health-insurance/admin-register.php',
                registerUser.value
            ).then((response) => {                      // 回傳為object
                response = JSON.stringify(response)     // 轉為json string
                response = JSON.parse(response)         // 轉為json object

                data = response.data

                if (data.success){
                    ElMessage({
                    message: "用户注册成功.",
                    type: "success",
                    })
                    router.push("/")
                }else{
                    alert(data.msg)  
                }
            }).catch(() => {
                alert(data.msg)
            })
        }else{
            return false;
        }
    })
    // console.log(formEl);
}
</script>