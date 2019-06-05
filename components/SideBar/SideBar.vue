<template>
  <a-layout-sider
    class="side-bar"
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="logo" />
    <a-menu theme="dark" mode="inline">
      <a-menu-item v-for="n in 20" :key="n">
        <a-icon :type="getRandomIcon()" />
        <span class="nav-text">nav {{ n }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      icons: ['user', 'video-camera', 'upload'],
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    getRandomIcon() {
      return this.icons[(Math.random() * this.icons.length) | 0];
    },
  },
};
</script>

<style lang="less" scoped>
.side-bar {
  height: 100vh;
  overflow: auto;
  .logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px;
  }
}
</style>
