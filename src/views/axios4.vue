<template>
    <div>
        <van-button type="default">默认按钮</van-button>
        <van-button type="primary">主要按钮</van-button>
        <van-button type="info">信息按钮</van-button>
        <van-button type="warning">警告按钮</van-button>
        <van-button type="danger">危险按钮</van-button>
    </div>
</template>

<script>
    /**
     * 如何使用vant 组件:
     * 1,进去vant 官网,安装vant
     * 2,在babel.config.js添加配置
     * 3,在import {Button} from 'vant';
     * 4,在conponents中注册
     */
    import {Button} from 'vant';
    export default {
        name: "axios4",
        components:{
            /**
             * 注意必须注册组件
             */
            [Button.name]:Button
        }
    }

</script>

<style scoped>

</style>