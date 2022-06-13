<template>
  <div>
    <h1>About</h1>
    <Counter />
    <button
      class="counter-button"
      @click="storeCounter.increaseCount"
    >
      +
    </button>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/store/counter';

  const storeCounter = useCounterStore();
</script>

<style scoped>
  .counter-button {
    font-size: 35px;
    margin: 10px;
    padding: 10px 30px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    cursor: pointer;
  }
</style>