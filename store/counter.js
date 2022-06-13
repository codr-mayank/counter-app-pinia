import { defineStore } from 'pinia';

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    count: 0
  }),
  actions: {
    increaseCount() {
      this.count++;
    },
    decreaseCount() {
      this.count++;
    }
  },
  getters: {
    oddOrEven: (state) => state.count === 0 ? 'Zero' : count.value % 2 ? 'Odd' : 'Even'
  }
});
