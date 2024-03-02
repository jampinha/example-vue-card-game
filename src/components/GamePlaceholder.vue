<template>
  <div id="game-placeholder">
    <slot></slot>
  </div>
</template>

<style lang="scss">
#game-placeholder {
  position: relative;
  z-index: 1000;
  width: 100%;
  height: 100%;
}
</style>