<template>
    <div id="app-3">
        <p v-if="seen">现在你看到我了</p>
    </div>

</template>


<script>
    export default {
        data() {
            return {
                seen: true
            }
        }
    }
</script>
