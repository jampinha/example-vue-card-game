<template>
  <div id="library">
    <div class="card-viewer">
      <GameCard
        v-for="i in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]"
        :key="i"
        :shape="'pointy'"
        :accent="'black'"
        :color="'black'"
        :shiny="false"
      />
    </div>
    <div class="options"></div>
  </div>
</template>

<script setup lang="ts">
import GameCard from '@/components/GameCard.vue'
</script>

<style lang="scss">
#library {
  position: relative;
  display: flex;
  gap: 2em;
  height: inherit;
  background-color: rgb(147 103 72);
  border-radius: 20px;
  padding: 2em;

  > .card-viewer {
    display: flex;
    flex-wrap: wrap;
    width: 80%;
    padding: 1.5em;

    background-color: rgb(247, 210, 143);
    border-width: 2px;
    border-color: rgb(143 108 83);
    border-radius: 20px;
    border-style: solid;

    box-shadow:
      inset 0px 0px 15px 2px rgba(141, 70, 19, 0.7),
      inset 0px 0px 5px rgba(141, 70, 19, 0.7);

    // box-shadow:
    //   rgba(141, 70, 19, 0.25) 0px 54px 55px,
    //   rgba(141, 70, 19, 0.12) 0px -12px 30px,
    //   rgba(141, 70, 19, 0.12) 0px 4px 6px,
    //   rgba(141, 70, 19, 0.17) 0px 12px 13px,
    //   rgba(141, 70, 19, 0.09) 0px -3px 5px;
  }

  > .options {
    width: 20%;
    background-color: #5a5a5a;
    border-radius: 20px;
  }
}
</style>
