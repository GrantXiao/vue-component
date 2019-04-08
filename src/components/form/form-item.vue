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