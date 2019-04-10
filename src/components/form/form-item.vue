<template>
<div>
    <label for="">{{label}}</label>
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
import emit from '../../utils/emit.js'
export default {
    name:'iFormItem',
    data(){
        return {
            isRequired:false,   //是否必须
            validateStatus:'',//校验状态
            validateMessage:''  //校验提示信息
        }
    },
    mixins:[emit],
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String
        }
    },
    methods:{
        //初始化设置规则，是否必须校验等，包括监听input组件派发的输入事件和失焦事件
        setRules(){
            let rules = this.getRules();
            if(rules.length){
                rules.foeEach(rule => {
                    this.isRequired = rule.isRequired
                })
            }
        },
        getRules(){

        }
    },
    mounted(){
        //如果没有传入prop,则无需验证，更不需要派发事件到from组件缓存
        if(this.prop){
            this.dispatch('iForm','form-item-add',this);
        }
    },
    //组件销毁前，将缓存从form组件清除掉
    beforeDestroy(){
        this.dispatch('iForm','form-iten-remove',this);
    }
}

</script>
<style>
</style>