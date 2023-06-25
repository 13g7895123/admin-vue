<script setup>
import { watchEffect } from 'vue';
import { useAuthStore } from './stores/loginAuth.js';
import { useRoute } from 'vue-router';

const loginStore = useAuthStore()
const router = useRoute()

watchEffect(() => {
  if(localStorage.user_account){
    loginStore.setAuth(true)
    loginStore.setUser(localStorage.userAccount)
  }else{
    router.push('/login')
  }
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
