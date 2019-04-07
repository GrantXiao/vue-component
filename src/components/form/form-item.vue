<template>
<div>
    <label for="">{{label}}</label>
    <div>
        <slot></slot>
    </div>
</div>
</template>

<script>
export default {
    name:'iFormItem',
    data(){

    },
    props:{
        label:{
            type:String,
            default:''
        },
        prop:{
            type:String
        }
    }
}

</script>
<style>
</style>