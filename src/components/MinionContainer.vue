<template>
  <div :class="['minion-container', classes]" @click="handleClick">
    <div class="image" style="background-image: url('https://i.redd.it/2s0y7grd1ro21.jpg')"></div>
    <div v-show="!sleeping" class="attributes">
      <div class="attack">{{ attack }}</div>
      <div class="health">{{ health }}</div>
    </div>
    <div v-show="!sleeping" class="icons">
      <div v-show="skull" class="icon skull"></div>
      <div v-show="star" class="icon star"></div>
      <div v-show="heart" class="icon heart"></div>
      <div v-show="poison" class="icon poison"></div>
    </div>
    <div class="effects">
      <div v-show="waiting" class="effect waiting">
        <span>z</span>
        <span>z</span>
        <span>z</span>
      </div>
      <div v-show="shield && !silence" class="effect shield"></div>
      <div v-show="reborn && !silence" class="effect reborn"></div>
      <div v-show="stealth && !silence" class="effect stealth"></div>
      <div v-show="imunity" class="effect imunity"></div>
      <div v-show="sleeping && !silence" class="effect sleeping"></div>
      <div v-show="silence" class="effect silence"></div>
    </div>

    <div v-show="stealth" class="smoke-effect">
      <div class="smoke-wrap">
        <img class="smoke" src="@/assets/images/smoke3.png" />
      </div>
      <div class="smoke-wrap">
        <img class="smoke2" src="@/assets/images/smoke3.png" />
      </div>
      <div class="smoke-wrap">
        <img class="smoke3" src="@/assets/images/smoke3.png" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

defineProps<{
  image: string

  attack: number
  health: number

  star?: boolean
  skull?: boolean
  heart?: boolean
  poison?: boolean

  shield?: boolean
  reborn?: boolean
  stealth?: boolean
  imunity?: boolean
  silence?: boolean
  sleeping?: boolean
  waiting?: boolean
}>()

const selected = ref(false)
const handleClick = () => {
  selected.value = !selected.value
}

const classes = computed(() => {
  return {
    '-selected': selected.value
  }
})
</script>

<style lang="scss">
.minion-container {
  position: relative;
  width: 85px;
  height: 115px;
  padding: 7px;
  border-radius: 50%;
  background-color: grey;
  z-index: 0;
  transform: scale(1);
  transition: scale 0.7s ease-in-out;
  box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);

  @keyframes float {
    0% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px);
    }
    50% {
      box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
      transform: translatey(-20px) scale(1.1);
    }
    100% {
      box-shadow: 0 5px 15px 0px rgba(0, 0, 0, 0.6);
      transform: translatey(0px) scale(1);
    }
  }

  &.-selected {
    transition: scale 0.7s ease-in-out;
    transform: scale(1.1);
    box-shadow: 0 25px 15px 0px rgba(0, 0, 0, 0.2);
    // transform: translatey(0px);
    // animation: float 0.7s ease-in-out infinite;
  }

  > .image {
    width: 100%;
    height: 100%;
    z-index: 0;
    border-radius: inherit;
    background-size: cover;
    background-position: center;
    box-shadow:
      inset 0px 0px 7px 3px rgba(0, 0, 0, 0.8),
      0px 0px 3px rgba(0, 0, 0, 0.801);
    z-index: 1;
  }

  > .attributes {
    > .attack,
    > .health {
      position: absolute;
      bottom: 10px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 20px;
      height: 20px;
      z-index: 8;

      font-size: 18px;
      color: #fafafa;
      text-shadow: 0px 0px 3px rgb(0, 0, 0);

      border: 1px solid black;
      border-radius: 50%;
      box-shadow:
        inset 0px 0px 10px rgba(black, 0.5),
        0px 0px 5px rgba(black, 0.5);
    }

    > .attack {
      left: 10px;
      background-color: #ddad11;
    }

    > .health {
      right: 10px;
      background-color: #e04545;
    }
  }

  > .icons {
    position: absolute;
    display: flex;
    justify-content: center;
    left: 0;
    bottom: -15px;
    width: 100%;
    height: 30px;
    z-index: 8;

    > .icon {
      position: relative;
      display: block;
      width: 23px;
      height: 23px;
      background-size: contain;
      background-position: center;
      z-index: 5;

      &.star {
        background-image: url('@/assets/images/star.png');
      }
      &.skull {
        background-image: url('@/assets/images/skull.png');
      }
      &.heart {
        background-image: url('@/assets/images/heart.png');
      }
      &.poison {
        background-image: url('@/assets/images/poison.png');
      }
    }
  }

  > .effects {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: transparent;

    > .effect {
      position: absolute;
      display: block;
      border-radius: inherit;
      background: transparent;

      &.shield {
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        z-index: 9;

        border: 1px solid rgba(255, 230, 0, 0.7);
        background-color: rgba(255, 251, 0, 0.2);
      }
      &.reborn {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 6;

        // background-color: rgb(121, 212, 248);
        // background-image: url('@/assets/images/spell-circle.png');
        // background-size: cover;
        // background-position: center;
        // background-blend-mode: multiply;
        // mix-blend-mode: color-burn;

        // box-shadow: 0px 0px 7px 7px rgba(49, 239, 253, 0.808) inset;

        box-shadow:
          inset 0px 0px 7px 3px rgba(0, 0, 0, 0.9),
          0px 0px 19px 9px rgba(49, 239, 253, 0.6) inset;

        // box-shadow:
        //   inset 0px 0px 10px rgb(3, 3, 3),
        //   0px 0px 5px rgba(51, 77, 146, 0.801);
      }
      &.stealth {
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 7;
      }
      &.imunity {
        top: -15px;
        left: -15px;
        width: calc(100% + 30px);
        height: calc(100% + 30px);
        z-index: 10;

        border: 1px solid rgba(0, 255, 242, 0.7);
        background-color: rgba(0, 255, 242, 0.2);
      }
      &.silence {
        top: -10px;
        left: -10px;
        width: calc(100% + 20px);
        height: calc(100% + 20px);
        z-index: 10;

        border: 1px solid rgba(247, 22, 255, 0.9);
        background-color: rgba(247, 22, 255, 0.1);
        background-image: url('@/assets/images/magic-circle.png');
        background-size: cover;
        background-position: center;
        background-blend-mode: multiply;
        mix-blend-mode: hue;
      }
      &.sleeping {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        z-index: 11;
        border: 2px solid black;
        background: radial-gradient(
          circle,
          rgba(0, 0, 0, 0.4) 30%,
          rgba(0, 0, 0, 0.7) 40%,
          rgba(22, 22, 22, 0.8) 80%
        );
      }
      &.waiting {
        position: absolute;
        top: 50px;
        right: 50px;
        width: 10px;
        height: 10px;
        transform: translate(-50%, -50%);
        transition: display 3s;
        z-index: 15;

        span {
          color: #65d10d;
          position: absolute;
          bottom: 10px;
          left: 10px;
          font-size: 30px;
          opacity: 0;
          animation: sleep 3s infinite linear;
          text-shadow: 0px 0px 3px #000;

          &:nth-child(2n) {
            animation-delay: 2s;
          }

          &:nth-child(3n) {
            animation-delay: 4s;
          }
        }
      }
    }
  }

  > .smoke-effect {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 7;

    > .smoke-wrap {
      position: absolute;
      overflow: hidden;
      width: 100%;
      height: 100%;
      left: 50%;
      bottom: 0;
      border-radius: inherit;
      transform: translateX(-50%);
    }

    .smoke,
    .smoke2,
    .smoke3 {
      background-size: cover;
      background-position: center;
      width: 100%;
      height: 130px;
      filter: blur(5px);
      transform-origin: 50% 50%;
    }

    .smoke {
      animation: smoke1 3s linear infinite;
      animation-delay: 0.5s;
    }

    .smoke2 {
      animation: smoke2 3s linear infinite;
      animation-delay: 1.5s;
    }

    .smoke3 {
      width: 500px;
      animation: smoke3 4s linear infinite;
      animation-delay: 2.5s;
    }

    @keyframes smoke1 {
      0% {
        filter: blur(0px);
        transform: translateY(0px) scale(-1, 1);
        opacity: 0;
      }

      25% {
        filter: blur(3px);
        transform: translateY(-10px) scale(-1, 1.05);
        opacity: 0.5;
      }

      50% {
        filter: blur(5px);
        transform: translateY(-20px) scale(-1, 1.1);
        opacity: 1;
      }

      75% {
        filter: blur(5px);
        transform: translateY(-30px) scale(-1, 1.15);
        opacity: 0.5;
      }

      100% {
        filter: blur(7px);
        transform: translateY(-40px) scale(-1, 1.2);
        opacity: 0;
      }
    }

    @keyframes smoke2 {
      0% {
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
      }

      25% {
        filter: blur(3px);
        transform: translateY(-10px) scale(1.05);
        opacity: 0.5;
      }

      50% {
        filter: blur(5px);
        transform: translateY(-20px) scale(1.1);
        opacity: 1;
      }

      75% {
        filter: blur(5px);
        transform: translateY(-30px) scale(1.15);
        opacity: 0.5;
      }

      100% {
        filter: blur(7px);
        transform: translateY(-40px) scale(1.2);
        opacity: 0;
      }
    }

    @keyframes smoke3 {
      0% {
        filter: blur(0px);
        transform: translateY(0px) scale(1);
        opacity: 0;
      }

      25% {
        filter: blur(3px);
        transform: translateY(-20px) scale(1.05);
        opacity: 0.5;
      }

      50% {
        filter: blur(5px);
        transform: translateY(-40px) scale(1.1);
        opacity: 1;
      }

      75% {
        filter: blur(5px);
        transform: translateY(-60px) scale(1.15);
        opacity: 0.5;
      }

      100% {
        filter: blur(7px);
        transform: translateY(-80px) scale(1.2);
        opacity: 0;
      }
    }
  }
}
</style>
