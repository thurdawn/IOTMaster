import { defineStore } from 'pinia';

interface IState {
  info: { name: string };
}

export const useUserStore = defineStore('user', {
  state: (): IState => ({
    info: { name: 'John' },
  }),
  getters: {},
  actions: {},
});
