<template>
    <form action="">
        <slot></slot>
    </form>
</template>

<script>
export default {
    name:"iForm",
    data(){
        items:[]
    },
    props:{
        model:{
            type:Object
        },
        rules:{
            type:Object
        }
    },
    created(){
        this.$on('form-item-add',item =>{
            if(item){
                this.items.push(item);
            }
        });

        this.on('form-item-remove',item=>{
            if(item.prop){
                this.items.splice(this.items.indexof(item),1)
            }
        })
    }
}
</script>

<style>

</style>
