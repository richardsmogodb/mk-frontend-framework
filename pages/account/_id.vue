<template>
  <section>
    <h2>account</h2>
    <p v-text="account.userName"></p>
  </section>
</template>

<script>
export default {
  async asyncData({ params, app }) {
    const { data } = await app.$api._getAccount(params.id);

    return { account: data.result || {} };
  },
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
};
</script>

<style lang="less" scoped></style>
