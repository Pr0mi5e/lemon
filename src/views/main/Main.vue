<template>
  <div class="main-impl">
    <control-menu class="control-menu"></control-menu>
    <router-view class="router-main-content"/>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import ControlMenu from './control-menu/ControlMenu.vue'
  import LoginService from '@/service/login/LoginService'

  @Component({
    components: {
      ControlMenu
    }
  })
  export default class Main extends Vue {
    lang = 'main.'

    created () {
      if (!LoginService.getLoginState()) {
        this.$notify({
          title: this.$t(this.lang + 'not_login_tip_title').toString(),
          message: this.$t(this.lang + 'not_login_tip_message').toString(),
          type: 'warning'
        })
        this.$router.replace('/login')
      }
    }
  }
</script>

<style scoped lang="scss">
  .main-impl {
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    align-items: stretch;

    .control-menu {
      min-width: 240px;
      width: 240px;
      overflow: scroll;
    }

    .router-main-content {
      flex-grow: 1;
    }
  }
</style>
