<template>
    這是會員管理頁面
</template>
<script setup>
import { ref, watchEffect } from 'vue'
import axios from 'axios';

const tableData = ref([])

const getMember = async() => {
    const { data: { success, data } } = await axios.post('http://139.162.15.125:9090/api/health-insurance/admin-member.php')
    console.log(data);
}

watchEffect(() => getMember())
</script>