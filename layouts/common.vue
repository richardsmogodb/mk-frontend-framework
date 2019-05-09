<template>
  <a-layout :has-sider="true" class="full-screen">
    <SideBar />
    <a-layout>
      <nuxt />
    </a-layout>
    <Menu />
  </a-layout>
</template>

<script>
export default {
  components: {
    SideBar: () => import('@/components/SideBar/Index'),
    Menu: () => import('@/components/Menu/Menu'),
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
