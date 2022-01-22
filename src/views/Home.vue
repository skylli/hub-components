<!--
 * @Author: your name
 * @Date: 2022-01-22 09:34:30
 * @LastEditTime: 2022-01-22 11:07:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \hub-componet\src\views\Home.vue
-->
<template>
  <v-card>
    <devices-panel></devices-panel>
  </v-card>
</template>

<script>
// @ is an alias to /src
import DevicesPanel from "@/components/hub/DevicesPanel"

export default {
  name: "Home",
  components: {
    DevicesPanel,
  },
};
</script>
