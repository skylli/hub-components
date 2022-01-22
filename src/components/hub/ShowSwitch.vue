<!--
 * @Author: your name
 * @Date: 2022-01-20 16:58:53
 * @LastEditTime: 2022-01-22 13:48:47
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
        @click="switchClick(key)"
      >
      </v-switch>
    </v-list-item>
  </div>
</template>
<script>
import { stringify } from "querystring"

export default {
  props: {
    switchElements: [],
  },
  data () {
    return {
      buttonState: this.buttoninit(),
    }
  },
  computed: {
    state () {
      const s = []
      let i = 0
      // // todo cancel timer
      console.log("state change: ", this.switchElements)
      for (const ele of this.switchElements) {
        if (
          typeof this.buttonState[i] === "object" &&
          this.buttonState[i].type == "clieked"
        ) {
          s.push(this.buttonState[i])
          console.log("show button ")
        } else {
          const currentState = {
            id: ele.id,
            type: "update",
            isOn: ele.value.state === "on" ? true : false,
            processing: false,
          }
          if (this.buttonState[i].timer != 0) {
            clearTimeout(this.buttonState[i].timer)
          }
          s.push(currentState)
          console.log("show device: ", currentState)
        }
      }
      return s
    },
  },
  created () { },
  methods: {
    buttoninit () {
      const s = []
      for (const ele of this.switchElements) {
        s.push({
          id: ele.id,
          type: "init",
          isOn: ele.state === "on" ? true : false,
          processing: false,
          timer: 0,
        })
      }
      return s
    },
    switchClick (index) {
      clearTimeout(this.buttonState[index].timer)
      this.buttonState[index].processing = "red"
      this.buttonState[index].type = "clieked"
      this.buttonState[index].isOn =
        this.switchElements[index].value.state === "on" ? false : true
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
