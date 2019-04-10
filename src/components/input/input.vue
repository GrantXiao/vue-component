<template>
    <input
        type="text"
        :value="currentValue"
        @input="handleInput"
        @blur="handleBlur"
    />
</template>
<script>
    import emit from '../../utils/emit.js';
    export default {
        name: 'iInput',
        mixins: [emit],
        props: {
            value: {
                type: String,
                default: ''
            },
        },
        data () {
            return {
                currentValue: this.value
            }
        },
        watch: {
            value (val) {
                this.currentValue = val;
            }
        },
        methods: {
            handleInput (event) {
                const value = event.target.value;
                this.currentValue = value;
                this.$emit('input', value); //实时调用input事件
                this.dispatch('iFormItem', 'on-form-change', value); //想formitem组件派发事件
            },
            handleBlur () {
                this.dispatch('iFormItem', 'on-form-blur', this.currentValue);
            }
        }
    }
</script>