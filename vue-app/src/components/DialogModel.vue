<template>
    <el-dialog 
        :before-close="handleClose"
        v-model="props.show"
        :title="editData ? '編輯會員資料' : '新增會員資料'">

    </el-dialog>
</template>
<script setup>
const props = defineProps({
    show: Boolean,
    editData: Object
})

const handleClose = () => {
    console.log('close dialog');
    emits("closeModel");
}

const emits = defineEmits(["closeModel", "handleUpdateProfiles"]);
</script>