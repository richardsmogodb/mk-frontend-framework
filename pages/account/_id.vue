<template>
  <section>
    <h2>account</h2>
    <p v-text="account.userName"></p>
  </section>
</template>

<script>
export default {
  async asyncData({ params, $axios }) {
    const { data } = await $axios._getAccount(params.id);
    return { account: data.result || {} };
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>

<style lang="less" scoped></style>
