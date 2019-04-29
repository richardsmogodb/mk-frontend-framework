<template>
  <section class="container">
    <div>
      <logo />
      <h1 class="title" v-text="title"></h1>
      <p v-text="counter"></p>
      <h2 class="subtitle" v-text="desc"></h2>
      <nuxt-link to="/example">
        <a-button @click="add">开始</a-button>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    Logo: () => import('@/components/Logo'),
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
.container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > div {
    .flex-box(column; center; center);
    color: @_theme_color;
  }
}
</style>
