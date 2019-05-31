<template>
  <v-app id="app">
    <router-view class="router-root"/>
  </v-app>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import { Watch } from 'vue-property-decorator'
  import NameUtil from '@/utils/NameUtil'
  import StoreDefineLogin from '@/define/store/login/login'
  import LoginService from '@/service/login/LoginService'

  @Component
  export default class App extends Vue {
    mounted () {
      this.redirectWithLoginState(LoginService.getLoginState())
    }

    get loginState (): boolean {
      return this.$store.getters[NameUtil.CalculateStoreComponentKey(StoreDefineLogin.GET_LOGIN_STATE)]
    }

    @Watch('loginState')
    onLoginStateChange (loginState: boolean) {
      this.redirectWithLoginState(loginState)
    }

    redirectWithLoginState (loginState: boolean) {
      this.$router.replace(loginState ? '/' : '/login')
    }
  }
</script>

<style lang="scss">
  #app {
    --primary: #1976D2;
    --secondary: #424242;
    --accent: #82B1FF;
    --error: #FF5252;
    --info: #2196F3;
    --success: #4CAF50;
    --warning: #FFC107;

    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    .router-root {
      display: flex;
      width: 100%;
      height: 100%;
    }
  }
</style>
