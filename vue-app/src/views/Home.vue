<template>
    <div class="w-full h-full overflow-hidden">
        <Navbar />
        <Sidebar />
        <div class="relative top-0 left-[180px] h-[calc(100% - 71px)] overflow-auto">
            <router-view></router-view>
        </div>
    </div>
</template>
<script setup>
import Navbar from '../components/Navbar.vue'
import Sidebar from '../components/Sidebar.vue';

</script>
