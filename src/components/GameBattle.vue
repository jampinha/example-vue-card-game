<template>
  <div id="game-battle">
    <div class="oponnent-area">
      <PlayerBattlefield></PlayerBattlefield>
    </div>
    <div class="divider"></div>
    <div class="player-area">
      <PlayerBattlefield></PlayerBattlefield>
    </div>
  </div>
</template>

<script setup lang="ts">
import PlayerBattlefield from './PlayerBattlefield.vue'
</script>

<style lang="scss">
#game-battle {
  position: relative;
  width: 100%;
  height: 245px;

  > .divider {
    width: 100%;
    height: 15px;
  }
}
</style>
