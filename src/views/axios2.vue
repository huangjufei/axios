<template>
    <div></div>
</template>

<script>

    import axios from 'axios'

    export default {
        name: "axios2",
        /**
         * 如果你的后端有多个端口或域名,可以实例不同的变量,然后被引用
         *
         * 配置从弱到高:
         * 全局 实例 使用
         */
        created() {
            //全局配置
            axios.defaults.baseURL = 'http://localhost:8080';

            //实例配置
            let instance = axios.create({
                baseURL:"http://localhost:8080"
                ,timeout:1000
            })

            let instance2 = axios.create({
                baseURL:"http://localhost:9090"
                ,timeout:2000
            })

            axios({
                //使用配置
                baseURL:"http://localhost:8082"
            }).then(resResult=>{

            })
        }


    }
</script>

<style scoped>




</style>