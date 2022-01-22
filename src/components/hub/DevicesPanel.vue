<!--
 * @Author: your name
 * @Date: 2022-01-06 14:24:05
 * @LastEditTime: 2022-01-22 10:15:30
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \zwavejs2mqtt-master\src\components\hub\DevicesPanel.vue
-->

<template>
  <v-container fluid>
    <div v-for="(device, i) in this.hubDevices" :key="i">
      <ShowDevice :device="device"> </ShowDevice>
    </div>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex"
import ShowDevice from "@/components/hub/ShowDevice"

export default {
  name: "DevicesPanel",
  props: { socket: Object },
  components: {
    ShowDevice,
  },
  computed: {
    ...mapGetters(["hubDevices", "elements", "elementMap"]),
    deviceGroups () {
      // return this.elements[this.elementMap.get('switch.smart_plug_1_channel')]
      return this.elements
    },
  },
};
</script>
