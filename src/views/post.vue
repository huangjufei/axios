<template>

    <div>

    </div>
</template>

<script>
    /**
     * 页面要被访问到,需要在router中配置
     */
    import axios from 'axios'

    export default {
        name: 'post',//这个名字一般和文件一致(不是强制)
        /**
         * created()在生命周期的create时会自动加载里面的方法
         */
        created() {

            /**
             * 普通的post请求content-Type = application/json
             * 推荐json格式和后端交互
             * */
            axios({
                url: '/city.json',
                method: 'post',//切换post或其他
                data: {
                    id: 1
                }
            }).then(resResult => {
                console.log(resResult)
            })

            /**
             * 默认post请求都是application/json 格式,如果你想使用formdata格式可以这样:
             * 适合于上传操作
             * 你可以在浏览器查看content-Type
             *
             */
            let data = {age :18}
            let formdata = new FormData();
            for(let key in data){
                formdata.append(key,data[key]);
            }
            axios({
                url: '/suibian',
                method: 'post',//切换post或其他
                data: formdata
            }).then(resResult => {
                console.log(resResult)
            })

            /**
             * 并发请求后,同一处理(可以合并参数),这里只是简单输出
             */
            axios.all([
                axios.get('/data.json'),
                axios.get('/city.json')
            ]).then(axios.spread((dataResult, cityResult) => {
                console.log(dataResult,cityResult)
                })
            )


        }
    }
</script>