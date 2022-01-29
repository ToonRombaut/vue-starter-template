<template>
  <div class="default-layout" id="default-layout">
    <MobileMenu v-if="!isDesktop" />
    <Menu v-if="isDesktop" />
    <div asscroll-container>
      <div class="content" ref="content">
        <transition name="fade" mode="out-in">
          <router-view />
        </transition>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Menu from "@components/layout/Menu.vue";
import MobileMenu from "@components/layout/MobileMenu.vue";
import { mapActions, mapGetters } from "vuex";
import Footer from "@components/layout/Footer.vue";

export default {
  name: "DefaultLayout",
  components: {
    Menu,
    MobileMenu,
    Footer,
  },
  methods: {
    ...mapActions(["setWindowWidth"]),
    handleResize() {
      this.setWindowWidth(window.innerWidth);
    },
    async setupSmoothScroll() {
      const scrollObservable = (await import("@store/scrollObservable"))
        .default;

      const myObserver = new ResizeObserver(() => {
        scrollObservable.resize(window.innerWidth, window.innerHeight);
      });

      myObserver.observe(this.$refs.content);
      scrollObservable.enable();
    },
    setupEvents() {
      window.addEventListener("resize", this.handleResize);
    },
    removeEvents() {
      window.removeEventListener("resize", this.handleResize);
    },
  },
  computed: {
    ...mapGetters(["isDesktop"]),
  },
  async mounted() {
    await this.setupSmoothScroll();
    this.setupEvents();
  },
  beforeDestroy() {
    this.removeEvents();
  },
};
</script>

<style lang="scss" scoped>
.default-layout {
  height: 100%;
  min-height: 100vh;
  .content {
    width: $width;
    max-width: $max-width;
    margin: 0 auto;
    padding-top: $mobile-menu-height;
    @include screen-md {
      padding-top: $desktop-menu-height;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>