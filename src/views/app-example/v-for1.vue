<template>
    <div id="app-4">
        <ol>
            <li v-for="todo in todos" :key="todo.text">
                {{ todo.text }}
            </li>
        </ol>
    </div>
</template>


<script>
    export default {
        data() {
            return {
                todos: [
                    { text: '学习 JavaScript' },
                    { text: '学习 Vue' },
                    { text: '整个牛项目' }
                ]
            }
        }
    }
</script>
