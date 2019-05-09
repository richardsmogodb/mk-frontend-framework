<template>
  <section>
    <div class="left">
      <div class="introduce">
        <h2>设计手段重塑商业价值</h2>
        <p>重新定义视觉用户体验</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    step: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
section {
  position: relative;
  width: 100%;
  height: 100%;
  .left {
    position: absolute;
    top: 0;
    left: 0;
    width: 60%;
    height: 100%;
    background: @_theme_color;
    border-bottom-right-radius: 100%;
    .flex-box(column, center, center);
    .introduce {
      h2 {
        font-size: 40px;
      }
      p {
        position: relative;
        font-size: 32px;
        &:after {
          position: absolute;
          top: calc(100% + 16px);
          left: 0;
          content: '';
          width: 40px;
          height: 5px;
          background: black;
        }
      }
    }
  }
}
</style>
