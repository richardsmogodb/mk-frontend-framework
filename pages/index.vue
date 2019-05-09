<template>
  <a-layout>
    <a-layout-content :style="{ overflow: 'hidden' }">
      <Top></Top>
      <Progress :step="step" />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    Progress: () => import('@/components/Guide/Progress'),
    Top: () => import('@/components/Guide/Top'),
  },
  data() {
    return {
      step: 0,
    };
  },
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
