<template>
  <div>
    <h1>Counter</h1>
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <div>
      <p>Counter is {{ storeCounter.oddOrEven }}</p>
    </div>
    <hr />
    <div>
      <h3>Edit Counter</h3>
      <input
        type="number"
        v-model="storeCounter.count"
      />
    </div>
  </div>
</template>

<script setup>
  import { useCounterStore } from '@/store/counter';

  const storeCounter = useCounterStore();

  // const count = ref(0);

  // const increaseCount = () => {
  //   count.value++;
  // }

  // const decreaseCount = () => {
  //   count.value--;
  // }

  // const oddOrEven = computed(() => count.value === 0 ? 'Zero' : count.value % 2 ? 'Odd' : 'Even');

</script>

<style scoped>
  .buttons button {
    font-size: 35px;
    margin: 10px;
    padding: 10px 30px;
    border: 1px solid #d5d5d5;
    border-radius: 4px;
    cursor: pointer;
  }

  .buttons button:hover {
    background-color: #d5d5d5;
  }

  .buttons button:active {
    background-color: #d5d5d5;
    border: 1px solid #999;
  }
</style>