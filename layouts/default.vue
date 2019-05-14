<template>
  <a-locale-provider :locale="language.value">
    <a-layout :has-sider="true" class="full-screen">
      <SideBar :side-bar-active="sideBarActive" />
      <nuxt />
      <Menu @switchActive="switchSideBar" />
    </a-layout>
  </a-locale-provider>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    SideBar: () => import('@/components/SideBar/Index'),
    Menu: () => import('@/components/Menu/Menu'),
  },
  data() {
    return {
      sideBarActive: false,
    };
  },
  computed: {
    ...mapGetters({
      language: 'languages/language',
    }),
  },
  methods: {
    switchSideBar(status) {
      this.sideBarActive = status;
    },
  },
};
</script>

<style lang="less">
.full-screen {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}
</style>
