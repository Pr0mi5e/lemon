<template>
  <div class="function-menu-impl">
    <div class="function-item-list">
      <router-link v-for="item in mainRouters.children" :key="item.name" :to="'/' + item.path"
                   class="function-menu-item" active-class="function-menu-item-active">
        <i :class="'item-icon el-icon-' + item.name"></i>
        <div class="item-title-container">
          <div class="item-title">{{$t('functions.' + item.name)}}</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import Component from 'vue-class-component'
  import mainRouterDefine from '@/router/main'

  @Component
  export default class FunctionMenu extends Vue {
    mainRouters = mainRouterDefine

    mounted () {
    }
  }
</script>

<style scoped lang="scss">
  .function-menu-impl {
    border-top: 2px solid;
    border-bottom: 2px solid;
    border-image: -webkit-linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
    border-image: -moz-linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
    border-image: linear-gradient(to right, #444444 10%, #999, #444444 90%) 30 30;
  }

  .function-item-list {
    display: flex;
    flex-wrap: wrap;

    .function-menu-item {
      width: 46%;
      height: 100px;
      border: 1px solid #888888;
      cursor: pointer;
      margin-left: 3%;
      margin-top: 6px;
      color: #999999;
      text-decoration: none;

      .item-icon {
        font-size: 40px;
        margin-top: 10px;
      }

      .item-title-container {
        height: 32px;
        display: flex;
        margin: 6px 10px 0 10px;
        align-items: center;
      }

      .item-title {
        line-height: 16px;
        font-size: 14px;
      }
    }

    .function-menu-item-active {
      color: #fff;
      background: radial-gradient(circle at 50% 100%, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0));
    }

  }

</style>
