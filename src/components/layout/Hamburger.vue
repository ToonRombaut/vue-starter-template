<template>
  <label for="check" class="hamburger">
    <input type="checkbox" id="check" />
    <span></span>
    <span></span>
    <span></span>
  </label>
</template>

<script>
export default {
  name: "Hamburger",
};
</script>

<style lang="scss" scoped>
.hamburger {
  display: flex;
  flex-direction: column;
  width: 35px;
  cursor: pointer;

  span {
    background: #000;
    border-radius: 10px;
    height: 2.5px;
    margin: 4px 0;
    transition: 0.4s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    &:nth-of-type(1) {
      width: 50%;
    }
    &:nth-of-type(2) {
      width: 100%;
    }
    &:nth-of-type(3) {
      width: 75%;
    }
  }

  input[type="checkbox"] {
    display: none;
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(1) {
    transform-origin: bottom;
    transform: rotatez(45deg) translate(4px, 0px);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(2) {
    transform-origin: top;
    transform: rotatez(-45deg);
  }

  input[type="checkbox"]:checked ~ span:nth-of-type(3) {
    transform-origin: bottom;
    width: 50%;
    transform: translate(15px, -5.5px) rotatez(45deg);
  }
}
</style>