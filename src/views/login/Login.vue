<template>
  <div class="login-impl">
    <login-header></login-header>
    <div class="center-area">
      <company-info class="company-info"></company-info>
      <login-form class="login-form"></login-form>
    </div>
    <login-footer></login-footer>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import LoginHeader from './login-header/LoginHeader.vue'
  import LoginFooter from './login-footer/LoginFooter.vue'
  import CompanyInfo from './company-info/CompanyInfo.vue'
  import LoginForm from './login-form/LoginForm.vue'
  import LoginService from '@/service/login/LoginService'

  @Component({
    components: {
      LoginForm, CompanyInfo, LoginFooter, LoginHeader
    }
  })
  export default class Login extends Vue {
    mounted () {
      if (LoginService.getLoginState()) {
        this.$router.replace('/')
      }
    }
  }
</script>

<style scoped lang="scss">
  .login-impl {
    display: flex;
    flex-direction: column;

    .center-area {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }

    .company-info {
      margin-right: 30px;
    }

    .login-form {
      width: 360px;
    }
  }
</style>
