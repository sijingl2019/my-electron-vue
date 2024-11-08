import { createStore } from 'vuex';
import request from '@/assets/request';

const isDownload = (item: Market.Plugin, targets: any[]) => {
  let isDownload = false;
  targets.some((plugin) => {
    if (plugin.name === item.name) {
      isDownload = true;
    }
    return isDownload;
  });
  return isDownload;
};

export default createStore({
  state: {
    totalAgents: [],
    totalChats: [],
    searchValue: '',
    active: ['agent'],
  },
  mutations: {
    commonUpdate(state: any, payload) {
      Object.keys(payload).forEach((key) => {
        state[key] = payload[key];
      });
    },
    setSearchValue(state: any, payload) {
      state.searchValue = payload;
    },
  },
  actions: {
    async init({ commit }) {
      const totalAgents = await request.getTotalAgents();
      const totalChats = await request.getTotalChats();
      // totalPlugins.forEach((origin: Market.Plugin) => {
      //   origin.isdownload = isDownload(origin, localPlugins);
      //   origin.isloading = false;
      // });
      // // 修复卸载失败，一直转圈的问题。
      // localPlugins.forEach((origin: Market.Plugin) => {
      //   origin.isloading = false;
      // });

      commit('commonUpdate', {
        totalAgents,
        totalChats,
      });
    },
  },
  modules: {},
});
