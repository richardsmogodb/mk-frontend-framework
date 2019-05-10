<template>
  <icon-font type="iconmouse" />
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
i {
  position: absolute;
  left: 50%;
  bottom: 40px;
  transform: translateX(-50%);
  font-size: 30px;
  animation: upAndDown 1s ease-in-out infinite;
}
@keyframes upAndDown {
  from {
    bottom: 40px;
  }
  to {
    bottom: 35px;
  }
}
</style>
