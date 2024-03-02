<script setup lang="ts">
</script>

<template>
  <div :class="['enemy-card']">
  </div>
</template>

<style lang="scss">
.enemy-card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 100px;
  height: 170px;
  background-color: #2b2a2a;
  border-radius: 7px;
  color: #383838;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1;
  }

  &.fliped {
    

    > div { display: none; }
  }

  &:hover {
    box-shadow:
      rgba(255, 238, 0, 0.25) 0px 54px 55px,
      rgba(255, 238, 0, 0.12) 0px -12px 30px,
      rgba(255, 238, 0, 0.12) 0px 4px 6px,
      rgba(255, 238, 0, 0.17) 0px 12px 13px,
      rgba(255, 238, 0, 0.09) 0px -3px 5px;
  }
}
</style>
