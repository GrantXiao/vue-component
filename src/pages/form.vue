<template>
    <div>
        <h2>具有数据校验功能的表单组件——Form</h2>
        <i-form ref="form" :model="formValidate" :rules="ruleValidate">
            <i-form-item label="用户名" prop="name">
                <i-input v-model="formValidate.name"></i-input>
            </i-form-item>
            <i-form-item label="邮箱" prop="mail">
                <i-input v-model="formValidate.mail"></i-input>
            </i-form-item>
        </i-form>
        <button @click="handleSubmit">提交</button>
        <button @click="handleReset">重置</button>
    </div>
</template>

<script>
import iForm from '@/components/form/form'
import iFormItem from '@/components/form/form-item'
import iInput from '@/components/input/input'
export default {
    components:{iForm,iFormItem,iInput},
    data(){
        return {

        }
    },
    created(){
        
    }
}

</script>
<style>
</style>