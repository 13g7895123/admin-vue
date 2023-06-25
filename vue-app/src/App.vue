<script setup>
import { watchEffect } from 'vue';
import { useAuthStore } from './stores/loginAuth.js';
import { useRouter } from 'vue-router';
import Swal from 'sweetalert2'

const loginStore = useAuthStore()
const router = useRouter()

watchEffect(() => {
  if(localStorage.user_account){
    loginStore.setAuth(true)
    loginStore.setUser(localStorage.userAccount)
  }else{
    Swal.fire({
      title: '驗證失敗',
      text: '跳轉至登入畫面',
      icon: 'error',
      showConfirmButton: false,
      showCancelButton: false,
      timer: 2000,
    }).then(() => {
      router.push('/login')
    })
  }
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
