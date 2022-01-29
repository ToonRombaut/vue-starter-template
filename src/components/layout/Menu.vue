<template>
  <nav class="menu">
    <div class="inner"></div>
  </nav>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style lang="scss" scoped>
.menu {
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
  }
}
</style>