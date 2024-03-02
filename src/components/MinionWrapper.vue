<template>
  <div :class="['minion-wrapper', classes]" @click="clicked">
    <div :class="['hit-balloon', { '-visible': attacked }]">{{ hit }}</div>
    <MinionContainer
      image="https://i.pinimg.com/564x/01/78/48/017848c809b603a547e2b902d9f2faa9.jpg"
      :attack="attr.attack"
      :health="attr.health"
      :star="attr.star"
      :heart="attr.heart"
      :skull="attr.skull"
      :poison="attr.poison"
      :sleeping="status.isSleeping"
      :waiting="status.isWaiting"
      :silence="status.isSilenced"
      :shield="status.hasShield"
      :reborn="status.hasReborn"
      :stealth="status.hasStealth"
      :imunity="status.hasImunity"
    ></MinionContainer>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MinionContainer from './MinionContainer.vue'

const status = ref({
  isReady: false,
  isSleeping: false,
  isWaiting: false,
  isSilenced: false,
  hasTaunt: false,
  hasSpeed: false,
  hasStealth: false,
  hasShield: false,
  hasImunity: false,
  hasReborn: false
})

const attr = ref({
  attack: 0,
  health: 0,
  star: false,
  heart: false,
  skull: false,
  poison: false
})

const attacked = ref(false)
const hit = ref(0)

const classes = computed(() => {
  return {
    '-taunt': status.value.hasTaunt && !status.value.isSilenced,
    '-speed': status.value.hasSpeed,
    '-sleep': status.value.isSleeping,
    '-ready': status.value.isReady,
    '-stealth': status.value.hasStealth,
    '-waiting': status.value.isWaiting,
    '-attaked': attacked.value
  }
})

const clicked = () => {
  hit.value = Math.floor(Math.random() * 30)
  attacked.value = true
  setTimeout(() => (attacked.value = false), 2000)
}
</script>

<style lang="scss">
.minion-wrapper {
  position: relative;
  display: flex;
  justify-content: center;
  border-radius: 50%;
  // animation: burn1 2s normal linear;

  .hit-balloon {
    position: absolute;
    top: 0;
    left: calc(50% - 12px);
    width: 25px;
    height: 25px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 24px;
    font-weight: bold;
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: black;
    color: rgb(255, 230, 0);
    transition: all 0.3s;
    z-index: 20;
    opacity: 0;

    &.-visible {
      animation: fade-in-move-up 2s;
    }

    @keyframes fade-in-move-up {
      0% {
        opacity: 1;
        transform: translateY(0) scale(1);
      }
      100% {
        opacity: 0;
        transform: translateY(-3rem) scale(2);
      }
    }
  }

  > .minion-container.-invoke {
    animation: burn2 1.3s normal linear;
  }

  &.-on-attack {
    animation: on-attack 1.5s;
    z-index: 100;
  }

  @keyframes on-attack {
    0% {
      transform: translate(0, 0) scale(1);
    }
    5% {
      transform: scale(1.5);
    }
    15% {
      transform: scale(1.4);
    }
    40% {
      transform: scale(1.5);
    }
    50% {
      transform: translate(345px, -80px) scale(1.5);
    }
    90% {
      transform: scale(1);
    }
    100% {
      transform: translate(0, 0) scale(1);
    }
  }

  &:not(-taunt) {
    width: 85px;
    height: 115px;
  }

  &.-taunt {
    width: 100px;
    height: 125px;
    transition: border-radius 80ms ease-out;
    transition: background-image 1000ms linear;
    transition: box-shadow 80ms ease-out;

    // border-radius: 20% 20% 70% 70% / 22% 22% 99% 99%;
    border-radius: 20% 20% 55% 55% / 10% 10% 99% 99%;
    background-image: linear-gradient(90deg, rgb(100, 100, 100) 50%, rgb(160, 157, 157) 100%);
    box-shadow:
      inset 0px 0px 10px rgba(black, 0.5),
      0px 0px 5px rgba(black, 0.5);

    &.-stealth {
      background-image: linear-gradient(
        90deg,
        rgba(100, 100, 100, 0.5) 50%,
        rgba(160, 160, 160, 0.5) 100%
      );
    }

    &.-sleep {
      transition: border-radius 1000ms ease-out;
      transition: background-image 1000ms linear;
      transition: box-shadow 1000ms ease-out;
      background: none;
      box-shadow: none;
      border: none;
    }
  }

  &.-ready {
    box-shadow: 0 0 7px 7px rgb(51, 161, 0);
  }

  &.-speed {
    box-shadow: 0 0 25px rgb(85, 255, 7);
  }

  &:focus {
    box-shadow: 0 0 7px 7px rgb(253 153 22);
  }

  // &:hover {
  //   box-shadow: 0px 0px 7px 7px rgb(255, 255, 255);
  // }

  @keyframes sleep {
    0% {
      transform: translate(0, 0) scale(0.3);
      opacity: 0;
    }
    1% {
      opacity: 0;
    }
    3% {
      opacity: 1;
    }
    50% {
      transform: translate(90%, -50%) scale(0.65);
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(180%, -100%) scale(1);
      opacity: 0;
    }
  }

  @keyframes burn1 {
    0% {
      box-shadow: 0 0 0px rgba(3, 3, 3, 0);
    }
    25% {
      box-shadow: 0 0 25px rgba(3, 3, 3, 0.5);
    }
    50% {
      box-shadow: 0 0 50px rgba(3, 3, 3, 1);
    }
    75% {
      box-shadow: 0 0 100px rgba(3, 3, 3, 0.5);
    }
    100% {
      box-shadow: 0 0 200px rgba(3, 3, 3, 0);
    }
  }

  @keyframes burn2 {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    60% {
      opacity: 0.6;
    }
    80% {
      opacity: 0.8;
    }
    100% {
      opacity: 1;
    }
  }
}
</style>
