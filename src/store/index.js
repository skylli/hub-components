/*
 * @Author: your name
 * @Date: 2022-01-22 09:34:30
 * @LastEditTime: 2022-01-22 10:09:14
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hub-componet\src\store\index.js
 */
import Vue from "vue";
import Vuex from "vuex";
import { state, mutations, getters, actions } from "./mutations";

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
});
