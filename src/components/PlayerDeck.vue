<template>
  <div class="player-deck" @click="store.pullCard()">
  {{ store.deck.length }}
  </div>
</template>

<script setup lang="ts">
import { usePlayerStore } from '@/stores/player';
const store = usePlayerStore();
</script>

<style lang="scss">
.player-deck {
  position: relative;
  display: flex;
  width: 100px;
  height: 170px;
  background-color: #686868;
  border: 1px solid #fafafa;
  border-radius: 7px;
  color: white;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  font-size: 3em;
  z-index: 0;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
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
