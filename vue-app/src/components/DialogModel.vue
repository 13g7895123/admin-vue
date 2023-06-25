<template>
    <el-dialog v-model="props.show"></el-dialog>
</template>
<script setup>
const props = defineProps({
    show: String
})
</script>