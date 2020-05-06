<!--
 * @Author: your name
 * @Date: 2020-04-08 10:51:04
 * @LastEditTime: 2020-04-11 13:48:06
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \vue-music\src\App.vue
 -->
<template>
  <div id="app">
    <m-header></m-header>
    <tab></tab>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import MHeader from 'components/m-header/m-header'
  import Tab from 'components/tab/tab'
export default {
  components: {
    MHeader,
    Tab
  }
}
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/variable"
  #app
    color: $color-theme
</style>
