<template>
    <div class="w-full h-screen overflow-hidden">
        <img class="w-screen h-screen" src="../assets/404.gif" alt="error">
        <button 
        class="absolite top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        @click="$router.push('/')"
        >返回首頁</button>
    </div>
</template>
<script setup>

</script>