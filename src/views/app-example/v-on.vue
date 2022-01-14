<template>
    <div>
        <p>{{ message }}</p>
        <button v-on:click="reverseMessage">反转消息</button>
    </div>

</template>


<script>
    export default {
        data() {
            return {
                message: 'Hello Vue5555'
            }
        },
        methods: {
            reverseMessage: function () {
                this.message = this.message.split('').reverse().join('')
            }
        }
    }
</script>
