<template>
  <div class="game-hero">
    <div class="mask">
      <div class="image" :style="`background-image: url(${image})`"></div>
      <div class="effect"></div>
      <div class="attributes">
        <div class="attack">10</div>
        <div class="health">30</div>
        <div class="armor">20</div>
      </div>
      <div class="heroic-slot"></div>
      <div class="weapon-slot"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<style lang="scss">
.game-hero {
  width: 130px;

  > .mask {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 70% 70% 20px 20px;

    > .image {
      background-size: cover;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      z-index: 0;

      &:hover {
        box-shadow: 0px 0px 7px 7px rgb(255, 255, 255);
      }
    }

    > .effect {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      // box-shadow: inset 0px 0px 5px rgb(0, 0, 0);
      // background: radial-gradient(
      //   circle,
      //   rgba(0, 0, 0, 0.4) 30%,
      //   rgba(0, 0, 0, 0.7) 40%,
      //   rgba(22, 22, 22, 0.8) 80%
      // );
      z-index: 1;
    }

    > .attributes {
      position: absolute;
      display: flex;
      justify-content: space-between;
      top: 10px;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: inherit;
      z-index: 2;

      > .attack,
      > .health {
        position: absolute;
        display: flex;
        justify-content: center;
        width: 30px;
        height: 30px;
        font-size: 18px;
        color: #fafafa;
        text-shadow: 0px 0px 3px rgb(0, 0, 0);

        border: 1px solid black;
        border-radius: 50%;
        box-shadow:
          inset 0px 0px 10px rgba(black, 0.5),
          0px 0px 5px rgba(black, 0.5);

        align-self: flex-end;
      }

      > .attack {
        left: -10px;
        background-color: #118bdd;
      }

      > .health {
        right: -10px;
        background-color: #e04545;
      }

      > .armor {
        position: absolute;
        display: flex;
        justify-content: center;
        right: -10px;
        bottom: 35px;
        width: 30px;
        height: 34px;

        font-size: 18px;
        color: #fafafa;
        text-shadow: 0px 0px 3px rgb(0, 0, 0);
        // border: 1px solid black;
        // border-radius: 50%;
        // box-shadow:
        //   inset 0px 0px 10px rgba(black, 0.5),
        //   0px 0px 5px rgba(black, 0.5);

        background-image: url('@/assets/images/shield4.png');
        background-size: cover;
        background-position: center;
        padding: 1px;
      }
    }

    > .heroic-slot {
      position: absolute;
      right: -120px;
      bottom: 0;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      // background-color: grey;

      // &::before {
      //   content: '';
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      //   border: 7px solid black;
      //   border-radius: inherit;
      // }

      box-shadow:
        inset 0px 0px 10px rgba(black, 0.5),
        0px 0px 5px rgba(black, 0.5);

      &:hover {
        box-shadow: 0px 0px 7px 7px rgb(255, 255, 255);
      }
    }

    > .weapon-slot {
      position: absolute;
      left: -120px;
      bottom: 0;
      height: 100px;
      width: 100px;
      border-radius: 50%;
      // background-color: grey;

      // &::before {
      //   content: '';
      //   position: absolute;
      //   top: 0;
      //   left: 0;
      //   width: 100%;
      //   height: 100%;
      //   border: 7px solid black;
      //   border-radius: inherit;
      // }

      box-shadow:
        inset 0px 0px 10px rgba(black, 0.5),
        0px 0px 5px rgba(black, 0.5);

      &:hover {
        box-shadow: 0px 0px 7px 7px rgb(255, 255, 255);
      }
    }

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      // border: 2px solid #383838;
      border-radius: inherit;
      box-shadow: inset 0px 0px 5px rgb(0, 0, 0);
      background-color: rgba(56, 56, 56, 0.5);
      content: '';
      z-index: 0;
    }
  }

  // > .mask:before,
  // > .mask:after {
  //   position: absolute;
  //   content: '';
  //   left: 50%;
  //   bottom: 0;
  //   width: 50%;
  //   height: 53%;
  //   margin-bottom: 60.3%;
  //   background-color: navy;
  //   background-color: green;
  //   border-radius: 0 0 70% 70%;
  //   transform: rotate(59deg);
  //   transform-origin: 0 0;
  // }

  // > .mask:after {
  //   background-color: red;
  //   background-color: green;
  //   left: 0;
  //   transform: rotate(-59deg);
  //   transform-origin: 100% 0;
  // }
}
</style>
