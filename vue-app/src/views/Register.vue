<template>
    <div class="relative w-screen h-screen bg-registerBg bg-cover bg-no-repeat bg-center">
        <section class="w-[370px] h-[210px] absolute top-[10%] left-[34%] text-center">
            <sapn class="text-[26px]">後臺管理系統</sapn>
            <el-form 
            label-width="100px"
            class="mt-5 bg-white py-5 px-3 rounded-md shadow-md"
            >
                <el-form-item label="使用者名稱" prop="name">
                    <el-input placeholder="請輸入使用者名稱"></el-input>
                </el-form-item>
                <el-form-item label="信箱" prop="email">
                    <el-input placeholder="請輸入信箱"></el-input>
                </el-form-item>
                <el-form-item label="密碼" prop="password">
                    <el-input placeholder="請輸入密碼"></el-input>
                </el-form-item>
                <el-form-item label="確認密碼" prop="passwordCheck">
                    <el-input placeholder="請確認密碼"></el-input>
                </el-form-item>
                <el-form-item class="w-full flex justify-center">
                    <el-button class="w-full">註冊</el-button>
                </el-form-item>
            </el-form>
        </section>
    </div>
</template>