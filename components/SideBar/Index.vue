<template>
  <a-layout-sider
    class="side-bar"
    :class="{ active: sideBarActive }"
    breakpoint="lg"
    collapsed-width="0"
    width="130"
    @collapse="onCollapse"
    @breakpoint="onBreakpoint"
  >
    <div class="side-bar-inner">
      <div class="top"></div>
      <div class="center">
        <p v-for="(item, index) in languages" :key="index">
          <a
            :class="{ active: item.label === language.label }"
            @click="$store.commit('languages/changeLanguage', index)"
            v-text="item.label"
          >
          </a>
        </p>
      </div>
      <div class="bottom"></div>
    </div>
  </a-layout-sider>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    sideBarActive: {
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters({
      languages: 'languages/languages',
      language: 'languages/language',
    }),
  },
  methods: {
    onCollapse(collapsed, type) {
      console.log(collapsed, type);
    },
    onBreakpoint(broken) {
      console.log(broken);
    },
  },
};
</script>

<style lang="less" scoped>
@top_height: 130px;
@bottom_height: 200px;

.side-bar {
  position: absolute;
  top: 0;
  left: 0;
  height: @top_height;
  background: #4c4c4c;
  z-index: 3;
  .theme-transition;
  &.active {
    height: 100vh;
  }
  .side-bar-inner {
    .flex-box(column);
    height: 100%;
    > div {
      width: 100%;
    }
    .top {
      flex-basis: @top_height;
    }
    .bottom {
      flex-basis: @bottom_height;
      text-align: center;
      font-size: @_theme_font_size_small;
      color: @_theme_font_color;
    }
    .center {
      flex: 1;
      > p {
        text-align: center;
        font-weight: 600;
        > a {
          &:not(.active) {
            color: white;
          }
        }
      }
    }
  }
}
</style>
