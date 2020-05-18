import Vue from 'vue';
import Vuex from 'vuex';
import clone from '@/lib/clone';

Vue.use(Vuex); // 把 store 绑定到 vue.prototype 上面  即 vue.prototype.$store=用户传的 store

const store = new Vuex.Store({
  state: {
    recordList: [] as RecordItem[]
  },
  mutations: { // methods
    fetchRecords(state) {
      state.recordList=JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[]
    },
    createRecord(state, record) {
      const record2: RecordItem = clone(record);
      record2.createdAt = new Date();
      state.recordList.push(record2); // 可选链语法
      //this.recordList && this.recordList.push(record2);
      store.commit('saveRecords')
    },
    saveRecords(state) {
      window.localStorage.setItem('recordList',
        JSON.stringify(state.recordList));
    }
  }
});

store.commit('increment',10);
export default store;

