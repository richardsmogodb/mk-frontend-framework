<template>
  <a-layout :has-sider="true" class="full-screen">
    <SideBar />
    <a-layout>
      <a-layout-header :style="{ background: '#fff', padding: 0 }" />
      <nuxt />
      <a-layout-footer style="textAlign: center">
        Ant Design ©2018 Created by Ant UED
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
