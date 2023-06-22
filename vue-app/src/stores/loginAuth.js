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
        setUser(user){
            if(user){
                this.user = user;
            }else {
                this.user = {}
            }
        }
    }
})