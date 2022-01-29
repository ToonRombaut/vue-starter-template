<template>
  <nav class="mobile-menu">
    <div class="inner">
      <Hamburger />
      <div class="logo-container">
        <img src="@assets/img/logo.jpg" alt="logo" class="logo" />
      </div>
      <router-link to="/cart" @click.native="playAnimation">
        <div ref="lottieContainer" class="lottie-container" />
      </router-link>
    </div>
  </nav>
</template>

<script>
import Hamburger from "./Hamburger.vue";
import Lottie from "lottie-web";
import basket from "@assets/animations/basket.json?url";
export default {
  name: "MobileMenu",
  components: {
    Hamburger,
    Lottie,
  },
  mounted() {
    this.animation = Lottie.loadAnimation({
      container: this.$refs.lottieContainer,
      renderer: "svg",
      loop: false,
      autoplay: false,
      path: basket,
    });
  },
  data() {
    return {
      animation: null,
    };
  },
  methods: {
    playAnimation() {
      this.animation.play();
      setTimeout(() => {
        this.animation.stop();
      }, 1000);
    },
  },
};
</script>

<style lang="scss" scoped>
.mobile-menu {
  position: fixed;
  height: $mobile-menu-height;
  width: 100%;
  top: 0;
  left: 0;
  box-shadow: 0 1px 6px rgba(0, 0, 0, 0.15);

  @include screen-md {
    height: $desktop-menu-height;
  }

  .inner {
    width: $width;
    max-width: $max-width;
    height: 100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .logo-container {
      height: 60%;

      .logo {
        height: 100%;
      }
    }

    .lottie-container {
      width: 40px;
      height: 100%;
    }
  }
}
</style>