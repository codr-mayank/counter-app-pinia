<template>
  <div>
    <div class="count">
      {{ storeCounter.count }}
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/store/counter';

  const storeCounter = useCounterStore();
</script>

<style scoped>
  .count {
    margin: 20px;
    font-size: 60px;
  }
</style>