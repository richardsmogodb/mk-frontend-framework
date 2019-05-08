<template>
  <circle :class="{ 'full-screen': active }">
    <switch @click="active = !active">
      菜单
      <a-icon type="bars" />
    </switch>
  </circle>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
};
</script>

<style lang="less" scoped>
@circle-default-width: 130px;
circle {
  position: absolute;
  top: 0;
  right: 0;
  display: block;
  width: @circle-default-width;
  height: @circle-default-width;
  background: @_theme_color;
  border-bottom-left-radius: 100%;
  font-size: @_theme_font_size_larger;
  color: white;
  transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  &.full-screen {
    width: ~'calc(100% - @{circle-default-width})';
    height: 100%;
    border-bottom-left-radius: 0;
  }
  switch {
    position: absolute;
    top: 0;
    right: 0;
    display: block;
    width: @circle-default-width;
    height: @circle-default-width;
    line-height: @circle-default-width * 3 / 4;
    text-align: center;
    cursor: pointer;
    > .anticon {
      font-size: @_theme_font_size_larger + 2;
    }
  }
}
</style>
