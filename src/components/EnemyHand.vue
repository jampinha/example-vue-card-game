<template>
  <div id="enemy-hand">
    <EnemyCard></EnemyCard>
  </div>
</template>

<script setup lang="ts">
import EnemyCard from './EnemyCard.vue';
</script>

<style lang="scss">
#enemy-hand {
  position: relative;
  display: flex;
  width: 100%;
  height: inherit;
  gap: 15px;
}
</style>
