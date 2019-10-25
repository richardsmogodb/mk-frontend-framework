<template>
  <a-layout-sider
    class="side-bar"
    breakpoint="lg"
    collapsed-width="0"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="inline"
      :default-selected-keys="[menus[0].key]"
      @click="onMenuClick"
    >
      <template v-for="menu in menus">
        <a-menu-item :key="menu.key">
          <icon-font :type="menu.icon" />
          <span class="nav-text" v-text="menu.title" />
        </a-menu-item>
      </template>
    </a-menu>
  </a-layout-sider>
</template>

<script>
export default {
  data() {
    return {
      menus: [
        {
          key: 'index',
          icon: 'iconkanban',
          title: '实时看板',
        },
        {
          key: 'user',
          icon: 'iconliuliang',
          title: '流量分析',
        },
      ],
    };
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
    onMenuClick({ key }) {
      if (key === this.$route.name) return;

      this.$router.push({ name: key });
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
