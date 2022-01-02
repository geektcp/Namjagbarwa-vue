<template>
    <div>
        <p>{{ todo.text }}  | {{ todo.id }}</p>

    </div>
</template>

<script>
    export default {
        name: "todo-item",
        props: [
            'todo'
        ],
    }
</script>

<style scoped>

</style>



