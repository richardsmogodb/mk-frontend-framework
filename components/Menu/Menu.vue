<template>
  <circle :class="{ 'full-screen': active }">
    <switch @click="switchActive">
      菜单
      <icon-font :type="active ? 'iconclose' : 'iconmenu'" />
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
  width: @circle-default-width;
  height: @circle-default-width;
  background: @_theme_color;
  border-bottom-left-radius: 100%;
  z-index: 3;
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
    text-align: center;
    cursor: pointer;
    color: white;
    font-size: 15px;
    .flex-box(row, center, center);
    padding: 0 0 20px 20px;
    > .anticon {
      vertical-align: top;
      font-size: 26px;
      padding: 0 5px;
    }
  }
}
</style>
