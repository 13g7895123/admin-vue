<template>
  <nav class="w-full min-w-[600px] p-1 bg-[#074c62] text-white border-b-2">
    <el-row>
      <el-col :span="12" class="flex justify-start items-center pl-3">
      <!-- <el-col :span="12" class="logo-container"> -->
        <img src="../assets/logo.png" class="logo" alt="logo" />
        <span class="title">後台管理系统</span>
      </el-col>
      <el-col :span="12" class="user">
        <div class="userinfo">
          <img src="../assets/default.jpeg" class="avatar" alt="" />
          <div class="welcome-content">
            <p class="content welcome">Welcome</p>
            <p class="content username">米斯特吴</p>
          </div>
          <span class="dropdown">
            <!-- <el-dropdown> -->
            <el-dropdown trigegr="click" @command="handleDropdown">
              <span class="el-dropdown-link">
                  <el-icon>   
                  <arrow-down />
                  </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item command="info">个人信息</el-dropdown-item>
                  <el-dropdown-item command="logout">退出</el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </span>
        </div>
      </el-col>
    </el-row>
  </nav>
</template>
  
<script setup>
import { ArrowDown } from "@element-plus/icons-vue";
import { useAuthStore } from "../stores/loginAuth";
import { useRouter } from "vue-router";

const handleDropdown = (item) => {
  console.log(item);
  switch (item) {
    case 'info':
      showUserInfo();
      break;
    case 'logout':
      logout();
      break;
  }
};

const showUserInfo = () => {
  console.log('跳轉至個人訊息');
}

const logout = () => {
  console.log('登出');

  localStorage.removeItem('userId')
  localStorage.removeItem('userAccount')

  const loginAuth = useAuthStore()
  loginAuth.setAuth(false)
  loginAuth.setUser('')

  const router = useRouter()
  router.push('/login')
}
</script>
  
  <style scoped>
  /* .nav {
    width: 100%;
    height: 60px;
    min-width: 600px;
    padding: 5px;
    background: #074c62;
    color: #fff;
    border-bottom: 1px solid #1f2d3d;
  } */
  
  .logo-container {
    line-height: 60px;
    min-width: 400px;
  }
  .logo {
    height: 50px;
    width: 50px;
    margin-right: 5px;
    vertical-align: middle;
    display: inline-block;
  }
  .title {
    vertical-align: middle;
    font-size: 22px;
    font-family: "Microsoft YaHei";
    letter-spacing: 3px;
  }
  
  .user {
    line-height: 60px;
    text-align: right;
    padding-right: 10px;
  }
  .avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    vertical-align: middle;
    display: inline-block;
  }
  .welcome-content {
    display: inline-block;
    width: auto;
    vertical-align: middle;
    padding: 0 5px;
  }
  .content {
    line-height: 20px;
    text-align: center;
    font-size: 14px;
  }
  .welcome {
    font-size: 12px;
  }
  .username {
    color: #409eff;
    font-weight: bolder;
  }
  .dropdown {
    cursor: pointer;
    margin-right: 5px;
  }
  .el-dropdown {
    color: #fff;
  }
  
  .dropdown i {
    margin-top: 20px;
  }
  </style>