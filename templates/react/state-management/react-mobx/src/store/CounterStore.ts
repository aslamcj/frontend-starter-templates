import { makeAutoObservable, runInAction } from 'mobx';

class CounterStore {
  count = 0;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  // Computed value
  get doubleCount() {
    return this.count * 2;
  }

  get isPositive() {
    return this.count > 0;
  }

  // Actions
  increment() {
    this.count += 1;
  }

  decrement() {
    this.count -= 1;
  }

  reset() {
    this.count = 0;
  }

  setCount(value: number) {
    this.count = value;
  }

  // Async action example
  async incrementAsync() {
    this.isLoading = true;
    await new Promise((resolve) => setTimeout(resolve, 1000));
    runInAction(() => {
      this.count += 1;
      this.isLoading = false;
    });
  }
}

// Create a singleton instance
export const counterStore = new CounterStore();
