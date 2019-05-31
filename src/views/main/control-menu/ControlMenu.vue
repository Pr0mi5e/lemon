<template>
  <div class="control-menu-impl">
    <user-menu></user-menu>
    <function-menu class="function-menu"></function-menu>
    <div class="info-area">{{appOrgName}}</div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import FunctionMenu from './function-menu/FunctionMenu.vue'
  import UserMenu from './user-menu/UserMenu.vue'
  import AppInfoDefine from '@/define/info/AppInfo'

  @Component({
    components: {
      UserMenu, FunctionMenu
    }
  })
  export default class ControlMenu extends Vue {
    appOrgName = AppInfoDefine.APP_ORG_NAME
  }
</script>

<style scoped lang="scss">
  .control-menu-impl {
    background: #444444;
    color: #eeeeee;
    display: flex;
    flex-direction: column;

    .function-menu {
      flex-grow: 1;
    }

    .info-area {
      font-size: 12px;
      margin: 10px 0;
      letter-spacing: 1.5px;
    }
  }
</style>
