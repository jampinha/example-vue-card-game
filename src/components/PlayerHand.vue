<template>
  <div id="player-hand" :class="`cards-${store.hand.length}`">
    <PlayerCard
      v-for="(card, index) of store.hand.list()"
      :key="index"
      :card="card"
      :fliped="false"
      @clicked="onSelect"
    />
  </div>
</template>

<script setup lang="ts">
import type { Card } from '@/misc/classes/Card'
import PlayerCard from './PlayerCard.vue'
import { usePlayerStore } from '@/stores/player'
import { ref } from 'vue'

const store = usePlayerStore()
const selected = ref<Card>()

const onSelect = (card: Card) => {
  if (selected.value && selected.value === card) selected.value = undefined
  selected.value = card
  // console.log(toRaw(card))
}
</script>

<style lang="scss">
#player-hand {
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: inherit;
  // gap: 7px;

  // &::before {
  //   content: '';
  //   position: absolute;
  //   top: 25%;
  //   left: 15%;
  //   width: 70%;
  //   height: 100%;
  //   background-color: #fff;
  //   border: 2px solid black;
  //   border-radius: 50%;
  // }

  > div:nth-child(n) {
    display: inline-block;
    width: 120px !important;
    height: 180px !important;
    transition: transform 120ms linear;
    transform: scale(0.8);
  }

  > div:nth-child(n):hover {
    transform: translateY(-55px) scale(1.67) !important;
    z-index: 11;
  }

  // &.cards-3 {
  //   > div:nth-child(1) {
  //     transform: translateY(40%) rotateZ(0);
  //   }
  //   > div:nth-child(2) {
  //     transform: translateY(40%) rotateZ(0);
  //   }
  //   > div:nth-child(3) {
  //     transform: translateY(40%) rotateZ(0);
  //   }
  // }

  // &.cards-4 {
  //   > div:nth-child(1) {
  //     transform: translateY(50%) translateX(35px) rotateZ(-15deg);
  //   }
  //   > div:nth-child(2) {
  //     transform: translateY(40%) translateX(10px) rotateZ(-5deg);
  //   }
  //   > div:nth-child(3) {
  //     transform: translateY(40%) translateX(-10px) rotateZ(5deg);
  //   }
  //   > div:nth-child(4) {
  //     transform: translateY(50%) translateX(-35px) rotateZ(15deg);
  //   }
  // }

  // &.cards-5 {
  //   > div:nth-child(1) {
  //     transform: translateY(52%) translateX(50px) rotateZ(-15deg);
  //   }
  //   > div:nth-child(2) {
  //     transform: translateY(43%) translateX(20px) rotateZ(-5deg);
  //   }
  //   > div:nth-child(3) {
  //     transform: translateY(40%) translateX(0) rotateZ(0);
  //   }
  //   > div:nth-child(4) {
  //     transform: translateY(43%) translateX(-20px) rotateZ(5deg);
  //   }
  //   > div:nth-child(5) {
  //     transform: translateY(52%) translateX(-50px) rotateZ(15deg);
  //   }
  // }

  // &.cards-6 {
  //   > div:nth-child(1) {
  //     transform: translateY(55%) translateX(160px) rotateZ(-25deg);
  //   }
  //   > div:nth-child(2) {
  //     transform: translateY(45%) translateX(90px) rotateZ(-15deg);
  //   }
  //   > div:nth-child(3) {
  //     transform: translateY(40%) translateX(30px) rotateZ(-5deg);
  //   }
  //   > div:nth-child(4) {
  //     transform: translateY(40%) translateX(-30px) rotateZ(5deg);
  //   }
  //   > div:nth-child(5) {
  //     transform: translateY(45%) translateX(-90px) rotateZ(15deg);
  //   }
  //   > div:nth-child(6) {
  //     transform: translateY(55%) translateX(-160px) rotateZ(25deg);
  //   }
  // }

  // &.cards-7 {
  //   > div:nth-child(1) {
  //     transform: translateY(55%) translateX(210px) rotateZ(-20deg);
  //   }
  //   > div:nth-child(2) {
  //     transform: translateY(45%) translateX(140px) rotateZ(-10deg);
  //   }
  //   > div:nth-child(3) {
  //     transform: translateY(40%) translateX(70px) rotateZ(-5deg);
  //   }
  //   > div:nth-child(4) {
  //     transform: translateY(36%) translateX(0) rotateZ(0);
  //   }
  //   > div:nth-child(5) {
  //     transform: translateY(40%) translateX(-70px) rotateZ(5deg);
  //   }
  //   > div:nth-child(6) {
  //     transform: translateY(45%) translateX(-140px) rotateZ(10deg);
  //   }
  //   > div:nth-child(7) {
  //     transform: translateY(55%) translateX(-210px) rotateZ(20deg);
  //   }
  // }
}
</style>
