<template>
  <div class="user-menu-impl">
    <el-popover
      placement="right"
      width="320"
      trigger="hover">
      <user-info-panel></user-info-panel>
      <div class="" slot="reference">
        <img src="@/assets/images/logo.png" class="avatar">
        <div class="username">
          {{'LemonIT.CN'}}
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import UserInfoPanel from './UserInfoPanel.vue'

  @Component({
    components: {
      UserInfoPanel
    }
  })
  export default class UserMenu extends Vue {
    lang = 'main.control_menu.user_menu.'

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .user-menu-impl {
    margin: 24px 0 18px 0;
    cursor: pointer;

    .username {
      font-size: 20px;
      margin-top: 8px;
    }

    .avatar {
      width: 90px;
      height: 90px;
    }
  }
</style>
