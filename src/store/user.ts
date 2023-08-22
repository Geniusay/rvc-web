import { defineStore } from "pinia";
import {
  logout as logoutApi,
  login as loginApi,
  register as registerApi,
  phoneLogin,
  userInfo as userInfoApi
} from "@/api/user";

export const useUserStore = defineStore("user", {
  state: () => ({
    userInfo: null,
    token: null,
  }),
  actions: {
    async login(data) {
      const res = await loginApi(data);
      try {
        const { token, userInfo } = res.data;
        if (token && userInfo) {
          this.token = token;
          this.userInfo = userInfo;
        }
      } catch (error) {
        console.log('error: ', error);
        
      }
      return res
    }, 
    async phoneLogin(data) {
      const res = await phoneLogin(data);
      const { token, userInfo } = res.data;
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async register(data) {
      const res = await registerApi(data);
      const { token, userInfo } = res.data;
      if (token && userInfo) {
        this.token = token;
        this.userInfo = userInfo;
      }
    },
    async logout() {
      await logoutApi();
      this.token = null;
      this.userInfo = null;
    },
    async updateUserInfo(){
      if(this.userInfo&&this.userInfo.username){
       await userInfoApi({username: this.userInfo.username}).then(res=>{
          this.userInfo = res.data.userInfo
        })
      }
      return JSON.parse(JSON.stringify(toRaw(this.userInfo)))
    },
    reset(){
      this.token = null;
      this.userInfo = null;
    }
  },
  persist: true,
});
