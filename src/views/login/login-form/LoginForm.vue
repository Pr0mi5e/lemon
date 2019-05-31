<template>
  <div class="login-form-impl">
    <div class="form-header">
      {{$t(lang + 'header_title')}}
    </div>
    <v-form
      ref="form"
      lazy-validation
      class="form-body">
      <v-text-field
        :label="$t(lang + 'number')"
        v-model="loginForm.number"
        required></v-text-field>
      <v-text-field
        :label="$t(lang + 'password')"
        v-model="loginForm.password"
        type="password"
        required></v-text-field>
      <v-switch v-model="loginForm.rememberPassword" color="primary" :label="$t(lang + 'remember_password')"></v-switch>
      <v-btn
        block
        color="primary"
        @click="login">
        {{$t(lang + 'login')}}
      </v-btn>
    </v-form>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import LoginService from '@/service/login/LoginService'
  import AppInfoDefine from '@/define/info/AppInfo'

  @Component
  export default class LoginForm extends Vue {
    lang = 'login.login_form.'
    loginForm = LoginService.getLoginFormCache()

    mounted () {
      console.log(this.loginForm)
    }

    login () {
      LoginService.login(this.loginForm).then(() => {
        this.$notify.success({
          title: this.$t(this.lang + 'login_success_title').toString(),
          message: this.$t(this.lang + 'login_success_content').toString() + AppInfoDefine.APP_NAME
        })
      })
    }
  }
</script>

<style scoped lang="scss">
  .login-form-impl {
    border: 1px #dddddd solid;
    border-top: 4px var(--primary) solid;

    .form-header {
      font-size: 16px;
      line-height: 46px;
      border-bottom: 2px solid;
      border-image: -webkit-linear-gradient(to right, #fff 10%, var(--accent), #fff 90%) 30 30;
      border-image: -moz-linear-gradient(to right, #fff 10%, var(--accent), #fff 90%) 30 30;
      border-image: linear-gradient(to right, #fff 10%, var(--accent), #fff 90%) 30 30;
      background: #f6f6f6;
    }

    .form-body {
      margin: 14px 30px 24px 30px;
    }
  }
</style>
