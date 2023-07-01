import { defineStore } from "pinia";

export const useAuthStore = defineStore('auth', {
    state: () => {
        return { isAuthenticated: false, user: {} }
    },
    getters: {
        getAuthenticated: (state) => state.isAuthenticated,
        getUser: (state) => state.user,
      },
      actions: {
        setAuth(isAuth){
            this.isAuthenticated = isAuth;            
        },
        setUser(user , userName){
            if(user){
                this.user = user;
                this.userName = userName;
            }else {
                this.user = {}
                this.userName = {}
            }
        },
    }
})