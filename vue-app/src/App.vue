<script setup>
import { watchEffect } from 'vue';
import { useAuthStore } from './stores/loginAuth.js';

const loginStore = useAuthStore

watchEffect(() => {
  if(localStorage.user_account){
    loginStore.setAuth(true)
    loginStore.setUser(account)
  }
})

</script>

<template>
  <router-view></router-view>
</template>

<style scoped>
</style>
