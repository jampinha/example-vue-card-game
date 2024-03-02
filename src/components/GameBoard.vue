<template>
  <div id="game-board">
    <div class="fade"></div>
    <!-- <div class="timeline"></div> -->
    <div class="battle-area enemy-area">
      <GameHero
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmUykQO66JCAoYEaYXuTxS3_MIMYOGDNYNw&usqp=CAU"
      ></GameHero>
    </div>
    <div class="battle">
      <div class="mesa">
        <div class="__inner">
          <GameBattle />
        </div>
      </div>
      <!-- <EnemyHand class="hand" /> -->

      <!-- <PlayerHand class="hand" /> -->
      <div class="mana-container">
        <div class="mana-counter"></div>
        <div class="mana-stones">
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
          <div class="mana-crystal"></div>
        </div>
      </div>
    </div>
    <div class="battle-area player-area">
      <GameHero
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdmUykQO66JCAoYEaYXuTxS3_MIMYOGDNYNw&usqp=CAU"
      ></GameHero>
    </div>
    <!-- <div class="table">
      <div class="opponent-table">
        <EnemyDeck />
      </div>
      <div class="mid-table">
        <button class="end-turn">END TURN</button>
      </div>
      <div class="player-table">
        <PlayerDeck />
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
// import PlayerDeck from './PlayerDeck.vue'
// import PlayerHand from './PlayerHand.vue'
// import EnemyHand from './EnemyHand.vue'
import GameBattle from './GameBattle.vue'
// import EnemyDeck from './EnemyDeck.vue'
import { onMounted } from 'vue'
import { usePlayerStore } from '@/stores/player'
import GameHero from './GameHero.vue'

const store = usePlayerStore()

const start = () => {
  store.deckGenerate()
  store.handInitialize()
}

onMounted(() => {
  start()
})
</script>

<style lang="scss">
#game-board {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  // border-radius: 7px;
  background-image: url('https://assets.codepen.io/450456/seamless-wood-floor-texture-free_1.jpeg');
  background-size: 350px;
  overflow: hidden;

  > .fade {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: radial-gradient(rgba(black, 0), black);
  }

  > .timeline {
    width: 10%;
  }

  > .battle-area {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 150px;
    height: 150px;
    z-index: 3;

    &.enemy-area {
      top: 65px;
    }

    &.player-area {
      bottom: 115px;
    }
  }

  > .battle {
    position: relative;
    display: flex;
    z-index: 1;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    width: 960px;
    height: 700px;
    padding: 7px;
    border-radius: 20px;
    background-color: #251400;;
    box-shadow:
      0px 0px 15px 2px rgba(black, 0.5),
      inset 0px 0px 5px rgba(black, 0.5);

    // > .hand {
    //   height: 150px;
    //   align-items: center;
    //   justify-content: center;
    // }

    > .mesa {
      padding: 7px;
      margin: 0 0 50px 0;
      border-radius: 20px;
      background-color: #5b230d;
      box-shadow:
        0px 0px 15px 2px rgba(black, 0.5),
        inset 0px 0px 5px rgba(black, 0.5);
    }

    > .mesa > .__inner {
      position: relative;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      background-image: url('@/assets/images/battlefield.png');
      background-size: 930px 360px;
      border: 1px solid rgb(44, 44, 44);
      border-radius: 60px;
      width: 930px;
      height: 360px;
      z-index: 3;

      box-shadow:
        inset 0px 0px 10px rgba(black, 0.5),
        0px 0px 5px rgba(black, 0.5);
    }

    > .mana-container {
      position: absolute;
      display: flex;
      right: 0;
      bottom: 0;
      width: 200px;
      height: 30px;
      margin: 7px;
      padding: 0 5px;

      background-color: #1e1005;
      border-radius: 30px;
      box-shadow: inset 0px 0px 5px rgba(black, 0.5);

      > .mana-counter {
        position: relative;
      }
      > .mana-stones {
        position: relative;
        display: flex;
        align-items: center;
        gap: 1px;

        .mana-crystal {
          display: inline-block;
          background-image: url('@/assets/images/mana.png');
          background-size: contain;
          width: 18px;
          height: 20px;
          filter: opacity(0.7);
        }
      }
    }
  }

  > .table {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    width: 10%;

    > .opponent-table,
    > .player-table {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 1em;
      width: 100%;
      height: 200px;
      z-index: 10;
    }

    > .mid-table {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0.5em;
      width: 100%;
      height: calc(100% - 400px);

      > button {
        width: 100%;
        height: 60px;
        font-size: 18px;
      }
    }
  }
}
</style>
