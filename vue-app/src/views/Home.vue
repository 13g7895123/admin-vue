<template>
    <div class="w-full h-full px-5 py-3 overflow-hidden">
        <Navbar />
        <Sidebar />
        <div class="relative top-0 left-[180px] w-[calc(100vw - 190px)] h-[calc(100% - 71px)] overflow-auto">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue';

</script>
