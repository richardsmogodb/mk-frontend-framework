<template>
  <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'auto' }">
    <div :style="{ padding: '24px', background: '#fff' }">
      <p
        v-for="item in list"
        :key="item.uid"
        @click="jump(item.uid)"
        v-text="item.userName"
      ></p>
      <p @click="$router.push('/example')">To example</p>
    </div>
  </a-layout-content>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      list: [],
    };
  },
  computed: {
    ...mapGetters({
      counter: 'example/counter',
    }),
  },
  async asyncData({ app }) {
    try {
      const { data } = await app.$api._getAccounts();
      return { list: data.result || [] };
    } catch (err) {
      return { list: [] };
    }
  },
  methods: {
    add() {
      this.$store.dispatch('example/incrementAsync');
    },
    jump(uid) {
      this.$router.push(`/account/${uid}`);
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
