<template>
    <div>
            <van-contact-list :list="list"/>
    </div>
</template>

<script>
    import {ContactList, Toast} from 'vant';
    import axios from 'axios';
    export default {
        name: "axios5",
        components:{
            [ContactList.name]:ContactList,
            [Toast.name]:Toast
        },
        created() {
            /**
             *初始化一个axios并赋值给data中的instance
             */
           this.instance = axios.create({
               baseURL:"http://127.0.0.1:9090/"
            })

            /**
             * 项目初始化时调用后端list接口
             */
            this.instance.get('/getList').then(resResult=>{
                console.log(resResult.data)
                this.list = resResult.data}).catch(error=>{
                console.log(error)
                Toast('getList出错!'+error);
            })
        },
        data(){
            return {
               list:[],
                instance:null//axios实例
            }
        }
    }


    /**
    @GetMapping(value = "/getList")
    @CrossOrigin
    public List getList(){
        List<Map> list = new ArrayList<>();
        Map<String,String> map = new HashMap<>();
        map.put("id","1");
        map.put("tel","标题");
        map.put("name","黄举飞");
        Map<String,String> map2 = new HashMap<>();
        map2.put("id","2");
        map2.put("tel","标2");
        map2.put("name","黄举飞2");
        list.add(map);
        list.add(map2);
        return list;
    }*/
</script>

<style scoped>

</style>