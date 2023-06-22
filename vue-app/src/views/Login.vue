<template>
    <div class="relative w-screen h-screen bg-loginBg bg-cover bg-no-repeat bg-center">
        <section class="w-[370px] h-[210px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <span class="text-[26px]">後臺管理系統</span>
            <el-form 
            :rules="rules"
            :model="loginUser"
            ref="ruleFormRef"
            label-width="80px"
            class="mt-5 bg-white py-5 px-3 rounded-md shadow-md"
            >
                <el-form-item label="帳號" prop="account">
                    <el-input
                        v-model="loginUser.account"
                        placeholder="請輸入帳號"
                    ></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="password">
                    <el-input 
                        v-model="loginUser.password"
                        placeholder="請輸入密碼"
                        type="password"
                    ></el-input>
                </el-form-item>
                <el-form-item class="w-full flex justify-center">
                    <el-button 
                        @click="handleSubmit(ruleFormRef)"
                        class="w-full"
                    >登入</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>
<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import { useRouter } from "vue-router";
import Swal from 'sweetalert2'
import { useAuthStore } from '../stores/loginAuth.js';

const ruleFormRef = ref()
const router = useRouter();
const store = useAuthStore();

const loginUser = ref({
    account: '',
    password: '',
})

const rules = reactive({
    account: [{ required: true, message: '帳號不可為空', trigger: 'blur' }],
    password: [
        { required: true, message: '密碼不可為空', trigger: 'blur'},
        { min: 4, max: 12, message: '長度在4到12個字串之間', trigger: 'blur'}
    ]
})

const handleSubmit = (formEl) => {
    if (!formEl) return;
    formEl.validate(async(valid) => {
        if (valid){
            const { data } = await axios.post(
                'http://139.162.15.125:9090/api/health-insurance/admin-login.php',
                loginUser.value
            ).then((response) => {                      // 回傳為object
                response = JSON.stringify(response)     // 轉為json string
                response = JSON.parse(response)         // 轉為json object

                const data = response.data              // 取出資料

                if (data.success){

                    console.log(data.user.account)
                    // store.setAuth(true);
                    // store.setUser = data;

                    Swal.fire({
                        title: '登入成功',
                        icon: 'success',
                        showConfirmButton: false,
                        showCancelButton: false,
                        timer: 2000,
                    }).then(() => {
                        // router.push("/")
                    })
                }else{
                    Swal.fire({
                        title: '登入失敗',
                        text: data.msg,
                        icon: 'error',
                        showConfirmButton: false,
                        showCancelButton: false,
                        timer: 2000,
                    }) 
                }
            }).catch(() => {
                alert(data.msg)
            })
        }else{
            return false;
        }
    })
}

</script>