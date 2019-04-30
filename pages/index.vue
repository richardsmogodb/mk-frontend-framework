<template>
  <a-layout-content :style="{ margin: '24px 16px 0', overflow: 'auto' }">
    <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
      <p v-for="n in 30" :key="n" v-text="n"></p>
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
  asyncData(context) {
    return {
      title: '卖客web前端框架start',
      desc: '使用nuxt服务器渲染vue',
    };
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
}
</style>
