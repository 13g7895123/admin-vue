<template>
    <Navbar />
    <Sidebar />
    <div class="relative top-0 left-[180px] w-[calc(100% - 180px)] h-[calc(100% - 71px)] overflow-auto">
      <router-view></router-view>
    </div>
    <!-- <div>初始化頁面</div> -->
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue';

</script>
