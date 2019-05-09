<template>
  <a-layout-sider
    class="side-bar"
    breakpoint="lg"
    collapsed-width="0"
    width="130"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="side-bar-inner">
      <div class="top"></div>
      <div class="center">
        <a-icon
          type="left"
          :style="{ fontSize: '50px', color: 'white', cursor: 'pointer' }"
        />
      </div>
      <div class="bottom">
        <a-button icon="qq" ghost block>QQ咨询</a-button>
        <a-button icon="wechat" ghost block>微信咨询</a-button>
        <p><a-icon type="phone" />&nbsp;028-83231924</p>
      </div>
    </div>
  </a-layout-sider>
</template>

<script>
export default {
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style lang="less" scoped>
.side-bar {
  background: #4c4c4c;
  .side-bar-inner {
    .flex-box(column);
    height: 100%;
    padding: 15px;
    > div {
      width: 100%;
    }
    .top,
    .bottom {
      flex-basis: 200px;
      text-align: center;
      font-size: @_theme_font_size_small;
      color: @_theme_font_color;
      button {
        margin-bottom: 24px;
        font-size: @_theme_font_size_small;
      }
    }
    .center {
      .flex-box(column, center, center);
      flex: 1;
    }
  }
}
</style>
