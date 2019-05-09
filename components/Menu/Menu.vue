<template>
  <circle :class="{ 'full-screen': active }">
    <switch @click="switchActive">
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
  methods: {
    switchActive() {
      this.active = !this.active;
      this.$emit('switchActive', this.active);
    },
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
  .theme-transition;
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
