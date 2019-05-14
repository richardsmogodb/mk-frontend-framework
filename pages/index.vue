<template>
  <a-layout>
    <a-layout-content>
      <div class="content-scroll">
        <div
          :style="{
            transform: `translateY(${-step * 100}vh)`,
            height: `${progresses.length * 100}vh`,
          }"
          @touchstart="touchstart"
          @touchmove="touchmove"
          @touchend="touchend"
        >
          <Top />
          <Case />
        </div>
      </div>
      <Progress :progresses="progresses" :step="step" />
      <Mouse />
    </a-layout-content>
  </a-layout>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {
    Progress: () => import('@/components/Guide/Progress'),
    Top: () => import('@/components/Guide/Top'),
    Case: () => import('@/components/Guide/Case'),
    Mouse: () => import('@/components/Guide/Mouse'),
  },
  data() {
    return {
      progresses: ['TOP', 'CASE', 'CUSTOMER', 'FOOTER'],
      step: 0,
      touch: {
        x: 0,
        y: 0,
        direction: 'none',
      },
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
  mounted() {
    this.addScrollEvent();
  },
  methods: {
    touchstart({ touches }) {
      if (!touches) {
        return;
      }
      const { pageX, pageY } = touches[0];
      this.touch.x = pageX;
      this.touch.y = pageY;
    },
    touchmove({ touches }) {
      if (!touches) {
        return;
      }
      const { pageY } = touches[0];
      if (pageY < this.touch.y) {
        this.touch.direction = 'down';
      } else if (pageY > this.touch.y) {
        this.touch.direction = 'up';
      } else {
        this.touch.direction = 'none';
      }
    },
    touchend() {
      const filter = {
        up: () => {
          if (this.step > 0) this.step -= 1;
        },
        down: () => {
          if (this.step < this.progresses.length - 1) this.step += 1;
        },
      };
      filter[this.touch.direction] && filter[this.touch.direction]();
    },
    addScrollEvent() {
      const scrollFn = event => {
        const e = event || window.event;
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) {
            this.stepBack();
          }
          if (e.wheelDelta < 0) {
            this.stepForward();
          }
        } else if (e.detail) {
          if (e.detail > 0) {
            this.stepForward();
          }
          if (e.detail < 0) {
            this.stepBack();
          }
        }
      };
      if (window.onmousewheel === null) {
        window.onmousewheel = scrollFn;
      } else {
        document.addEventListener('DOMMouseScroll', scrollFn, false);
      }
    },
    stepForward() {
      if (this.step < this.progresses.length - 1) {
        this.step += 1;
      }
    },
    stepBack() {
      if (this.step > 0) {
        this.step -= 1;
      }
    },
    add() {
      this.$store.dispatch('example/incrementAsync');
    },
  },
};
</script>

<style lang="less" scoped>
.content-scroll {
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  > div {
    .theme-transition;
  }
}
</style>
