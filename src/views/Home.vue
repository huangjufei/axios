<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

import HelloWorld from '@/components/HelloWorld.vue'

/**
 * 通过使用axios插件来完成,对后端接口的调用
 * 使用:
 * 1,安装npm install axios,后查询package.json中是否添加了axios
 * 2,在页面的script中导入,就可以使用了
 */
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  created() {
    axios.get('/data.json').then((response)=>{
      console.log(response)
    })
  }
}
</script>
