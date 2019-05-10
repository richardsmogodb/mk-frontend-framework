<template>
  <section class="page">
    <circle />
  </section>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
circle {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 150px;
  height: 150px;
  background: @_theme_color;
  border-top-right-radius: 100%;
}
</style>
