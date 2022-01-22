<!--
 * @Author: your name
 * @Date: 2022-01-20 16:58:53
 * @LastEditTime: 2022-01-22 10:15:50
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \zwavejs2mqtt-master\src\components\hub\typeSwitch.vue
-->
<template>
  <div>
    <v-list-item v-for="(val, key) of this.state" :key="key">
      <v-switch
        v-model="val.isOn"
        :loading="val.processing"
        @click="switchClick(val.id)"
      >
      </v-switch>
    </v-list-item>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  props: {
    switchElements: [],
  },
  data () {
    return {
      buttonState: this.buttoninit(),
      b2: {},
    }
  },
  computed: {
    ...mapGetters(["hubDevices", "elements", "elementMap"]),

    state () {
      const s = []
      // // todo cancel timer
      for (const ele of this.switchElements) {
        if (
          typeof this.buttonState[ele.id] === "object" &&
          this.buttonState[ele.id].type == "clieked"
        ) {
          s.push(this.buttonState[ele.id])
        } else {
          const currentState = {
            id: ele.id,
            type: "update",
            isOn: ele.state === "on" ? true : false,
            processing: false,
          }
          if (this.buttonState[ele.id].timer != 0) {
            clearTimeout(this.buttonState[ele.id].timer)
          }
          s.push(currentState)
        }
      }
      return s
    },
  },
  created () { },
  methods: {
    buttoninit () {
      const s = {}
      for (const ele of this.switchElements) {
        s[ele.id] = {
          id: ele.id,
          type: "init",
          isOn: ele.state === "on" ? true : false,
          processing: false,
          timer: 0,
        }
      }
      return s
    },
    switchClick (index) {
      clearTimeout(this.buttonState[index].timer)
      this.buttonState[index].processing = "red"
      this.buttonState[index].type = "clieked"
      this.buttonState[index].isOn =
        this.elements[this.elementMap.get(index)] === "on" ? false : true
      this.buttonState[index].timer = setTimeout(
        function (index) {
          this.buttonState[index].type = "timeout"
          this.buttonState[index].processing = false

          console.debug("index: ", index)
          console.debug("this.state", this.buttonState)
        }.bind(this),
        3000,
        index
      )
    },
  },
};
</script>
