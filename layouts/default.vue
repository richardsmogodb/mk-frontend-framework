<template>
  <a-layout :has-sider="true" class="full-screen">
    <SideBar />
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <nuxt />
      <a-layout-footer style="textAlign: center">
        Copyright © 2013-2016 杭州卖客网络科技有限公司 卖客星球
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>

<script>
export default {
  components: {
    SideBar: () => import('@/components/SideBar/SideBar'),
  },
};
</script>

<style lang="less">
.full-screen {
  width: 100vw;
  height: 100vh;
  overflow: auto;
}
</style>
