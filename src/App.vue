<!--
 * @Author: your name
 * @Date: 2022-01-22 09:34:30
 * @LastEditTime: 2022-01-22 10:59:27
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hub-componet\src\App.vue
-->
<template>
  <v-app>
    <div id="app">
      <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <router-view />
    </div>
  </v-app>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
// eslint-disable-next-line no-unused-vars
import { mapActions, mapMutations, mapGetters } from "vuex"
import { HubDevice, HubElements } from "@/configure/hubData"
export default {
  beforeMount () {
    console.log("beforeMount")
    this.initData()
  },
  methods: {
    ...mapMutations([
      "initDevices",
      "initHubDevices",
      "updateElement",
      "removeElement",
    ]),
    initData () {
      /// get device
      // eslint-disable-next-line no-unused-vars
      Object.entries(HubElements).forEach(([key, val]) => {
        this.updateElement(val)
      })
      /// get elements
      this.initHubDevices(HubDevice)
    },
  },
};
</script>
