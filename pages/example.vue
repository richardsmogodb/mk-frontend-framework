<template>
  <section @click="abc">example</section>
</template>

<script>
export default {
  asyncData({ app }) {
    console.log(app);
  },
  methods: {
    abc() {
      console.log(this.$api);
    },
  },
};
</script>

<style lang="less" scoped></style>
