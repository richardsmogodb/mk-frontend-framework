<template>
  <ul>
    <li
      v-for="(progress, index) in progresses"
      :key="index"
      :class="{ active: step === index }"
    >
      <span v-text="progress"></span>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    progresses: {
      type: Array,
      default: () => [],
    },
    step: {
      type: Number,
      default: 0,
    },
  },
};
</script>

<style lang="less" scoped>
ul {
  position: absolute;
  top: 50vh;
  left: 40px;
  transform: translateY(-50%);
  z-index: 2;
  > li {
    position: relative;
    &:before {
      position: absolute;
      top: 50%;
      left: -35px;
      content: '';
      width: 20px;
      height: 1px;
      background: gray;
      .theme-transition;
    }
    &:not(.active) {
      list-style-type: none;
      > span {
        visibility: hidden;
      }
    }
    &.active {
      &:before {
        left: -80px;
        width: 65px;
        background: black;
      }
    }
  }
}
</style>
