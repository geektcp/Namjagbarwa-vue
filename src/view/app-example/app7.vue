<template>
    <div>
        <ol>
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
        </ol>

        <ul>
            <li v-for="user in userList" :key=user.id>
                {{ user}}
            </li>
        </ul>

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
                    1,
                    2,
                    3
                ]
            }
        }
    }
</script>
