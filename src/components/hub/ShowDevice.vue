<!--
 * @Author: your name
 * @Date: 2022-01-20 16:58:53
 * @LastEditTime: 2022-01-22 10:15:40
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \zwavejs2mqtt-master\src\components\hub\typeSwitch.vue
-->
<template>
  <v-card class="mx-auto" max-width="344" outlined>
    <v-card-text>
      <div class="text-h5">
        {{ this.device.manufacturer }}
        {{ this.device.areaId }}
      </div>
      <p class="text-h4 text--primary">
        {{ this.device.name }}
      </p>
      <show-switch :switchElements="getElements"></show-switch>
    </v-card-text>
  </v-card>
</template>
<script>
import { mapGetters } from "vuex"
import ShowSwitch from "./ShowSwitch.vue"

export default {
  props: {
    device: Object,
  },
  components: {
    ShowSwitch,
  },
  data () {
    return {
      state: {},
    }
  },
  computed: {
    ...mapGetters(["hubDevices", "elements", "elementMap"]),
    getElements () {
      const eles = []
      for (const eid of this.device.elements) {
        const ele = this.elements[this.elementMap.get(eid)]
        if (ele.type === "switch") {
          eles.push(ele)
        }
      }
      return eles
    },
  },

  created () { },
  methods: {
    switchClick (index) {
      this.status[index].processing = "red"

      setTimeout(
        function (index) {
          this.status[index].processing = false
          this.status[index].isOn = this.status[index].isOn ? false : true
        }.bind(this),
        3000,
        index
      )
    },
  },
};
</script>
