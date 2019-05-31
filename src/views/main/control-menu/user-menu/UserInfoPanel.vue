<template>
  <div class="user-info-panel-impl">
    <v-btn color="error" block @click="logoutNow">{{$t(lang + 'logout')}}</v-btn>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import LoginService from '@/service/login/LoginService'

  @Component
  export default class UserInfoPanel extends Vue {
    lang = 'main.control_menu.user_menu.user_info_panel.'

    logoutNow () {
      LoginService.logout()
    }
  }
</script>

<style scoped>
  .user-info-panel-impl {
    background: #f6f6f6;
  }
</style>
