<template>
    <div>

        <button v-on:click="read">读取文件</button>
    </div>


</template>

<script>
    // vue import语句后面的组件不支持使用横杠
    import { readJson } from '@/utils/file'

    export default {
        data() {
            return {
                groceryList: [
                    {id: 0, text: '蔬菜'},
                    {id: 1, text: '奶酪'},
                    {id: 2, text: '随便其它什么人吃的东西'}
                ],
                userList: [
                    "userA",
                    "userB",
                    "userC",
                ],
                arrList: [
                    11,
                    12,
                    13,
                    1114
                ]
            }
        },
        methods: {
            read: function () {
                console.log(1111111111)
                readJson('D:\\Desktop\\tmp.txt')
            }
        }
    }

</script>
