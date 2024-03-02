<template>
  <div class="player-battlefield">
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
    <div class="field-slot">
      <MinionWrapper></MinionWrapper>
    </div>
  </div>
</template>

<script setup lang="ts">
import MinionWrapper from './MinionWrapper.vue';
</script>

<style lang="scss">
.player-battlefield {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 115px;

  > .field-slot {
    display: flex;
    justify-content: center;
    width: 115px;
    height: 115px;

    &.-evidenced {
      box-shadow:
        rgba(255, 238, 0, 0.25) 0px 54px 55px,
        rgba(255, 238, 0, 0.12) 0px -12px 30px,
        rgba(255, 238, 0, 0.12) 0px 4px 6px,
        rgba(255, 238, 0, 0.17) 0px 12px 13px,
        rgba(255, 238, 0, 0.09) 0px -3px 5px;
    }
  }
}
</style>
