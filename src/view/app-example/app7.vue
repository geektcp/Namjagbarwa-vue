<template>
    <div>
        <div>
            <!--
              现在我们为每个 todo-item 提供 todo 对象
              todo 对象是变量，即其内容可以是动态的。
              我们也需要为每个组件提供一个“key”，稍后再
              作详细解释。
            -->
            <todo-item
                    v-for="item in groceryList"
                    v-bind:todo="item"
                    :key="item.id"
            ></todo-item>
        </div>

        <div>
            <!--     (ele, key, aaa) 括号内的参数可以随便填，必须和:key对其即可       -->
            <div v-for="(ele, key, aaa) in userList" :key=aaa>
                {{key}} | {{ ele}}
            </div>
        </div>
        <p/>
        <div>
            <div v-for="(ele, key, index) in arrList" :key="key">
              {{key}} | {{ ele}} | {{index}}
            </div>
        </div>
    </div>

</template>

<script>
    // vue import语句后面的组件不支持使用横杠
    import todoItem from '@/components/todo-item'

    export default {
        components: {
            todoItem,
        },
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
        }
    }
</script>
