<template>
    <div>
        <p>
            111111111111111
        </P>
        <li>{{ todo.text }}</li>
        <li>{{ todo.id }}</li>
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



