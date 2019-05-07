<template>
    <div>
        <span>{{total}}</span>
        <button type="button" @click="showTotal">

        </button>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    data(){
        return {
            money:''
        }
    },
    methods:{
        showTotal(){
            this.money = this.total
            console.log(this.money)
        }
    },
    computed:{
        ...mapGetters(['total'])
        // total(){
        //     return this.$store.getters.total;   
        // }
    }
}

</script>
<style>
</style>