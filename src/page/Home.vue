<template>
    <div>
        {{ getlist}}
        <label for="">弹框: <button @click='flag=true'>显示</button> </label>
        <!-- <input type="text" v-model="modulinp">  -->
        <!-- <Chil v-model="modulinp"/>
        <Eventchild v-model="modulinp"/> -->
        <Deilog v-if="flag" v-model="flag"/>
        <!-- <Deilog v-if="flag" :isshow.sync="flag"/> -->
    </div>
</template>

<script>
import {mapMutations,mapState,mapActions,mapGetters} from 'vuex'
export default {
    created(){
        
        this.getAction()
    },
    data(){
        return {
            modulinp:"输入...",
            flag:false,
            list:[]
        }
    },
    components:{
        Chil:{
            //传下来的是input的value值  必须用value去接受props值
            props:["value"],
            template:`
                <div>我是子组件--:{{value}}</div>
            `
        },
        Eventchild:{
            props:["value"],
            template:`
                <div>
                    我是第二个{{value}}
                    <button @click="chengval">改变</button>
                </div>
            `,
            methods:{
                chengval(){
                    this.$emit("input","我来改变你")
                }
            }
        },
        Deilog:{
            props:["flag"],
            //props:["isshow"],
            template:`
                <div>
                    <p>是否执行此操作</p>
                    <button @click="changdei">取消</button>
                    <button>确定</button>
                </div>
            `,
            methods:{
                changdei(){
                     this.$emit("input",false)
                    // this.$emit("update:isshow",false)
                }
            }
        }
    },
    computed:{
        ...mapGetters(["getlist"])
    },
    methods:{
       ...mapActions(['getAction'])
        
    }
}
</script>

<style>

</style>
