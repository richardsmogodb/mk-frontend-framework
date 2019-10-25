<template>
  <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'auto' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <p
        v-for="item in list"
        :key="item.uid"
        @click="$router.push(`/account/${item.uid}`)"
        v-text="item.userName"
      ></p>
    </div>
  </a-layout-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      counter: 'example/counter',
    }),
  },
  async asyncData({ app }) {
    const { data } = await app.$api._getAccounts();
    return { list: data.result || [] };
  },
  methods: {
    add() {
      this.$store.dispatch('example/incrementAsync');
    },
  },
};
</script>

<style lang="less" scoped>
p {
  text-align: center;
  font-size: 24px;
}
</style>
