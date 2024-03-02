<script setup lang="ts">
import type { Card } from '@/misc/classes/Card'
import { onMounted } from 'vue'

defineProps<{ card: Card; fliped: boolean }>()

const emit = defineEmits<{
  clicked: [card: Card]
}>()

const onSelect = (card: Card) => {
  emit('clicked', card)
}

onMounted(() => {
  console.log('eu fui montada')
})
</script>

<template>
  <div :class="['player-card', { fliped: fliped }]" @click.prevent="onSelect(card)">
    <div class="title">{{ card.name }}</div>
    <div class="stats">
      <div class="attack">{{ card.attack }}</div>
      <div class="life">{{ card.life }}</div>
    </div>
  </div>
</template>

<style lang="scss">
.player-card {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  height: 300px;
  background-color: #c4c4c4;
  // border: 2px solid #383838;
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

  &.-selected {
    border: 1px dashed red;
  }

  // &:hover {
  //   box-shadow:
  //     rgba(255, 238, 0, 0.25) 0px 54px 55px,
  //     rgba(255, 238, 0, 0.12) 0px -12px 30px,
  //     rgba(255, 238, 0, 0.12) 0px 4px 6px,
  //     rgba(255, 238, 0, 0.17) 0px 12px 13px,
  //     rgba(255, 238, 0, 0.09) 0px -3px 5px;
  // }

  > .title {
    align-self: flex-start;
    text-align: center;
    font-size: 12px;
    font-weight: bold;
    width: 100%;
    height: 50%;
    padding: 3px;
    border-bottom: 1px solid black;
  }

  > .stats {
    display: flex;
    align-self: flex-end;
    width: 100%;
    height: 50%;
    justify-content: space-between;
    align-items: flex-end;

    > .attack,
    > .life {
      display: flex;
      place-content: center;
    }

    > .attack {
      width: 30px;
    }

    > .life {
      width: 30px;
      color: rgb(211, 49, 49);
    }
  }
}
</style>
