<template>
    <div>

        <button v-on:click="read">读取文件</button>
    </div>


</template>

<script>
    export default {
        methods: {
            read: function () {
                console.log('读取文件: ' + 1111111111)
            }
        }
    }

</script>
