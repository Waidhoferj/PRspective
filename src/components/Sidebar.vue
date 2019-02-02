<template>
    <div class="sidebar">
        <h1>Sources</h1>
        <h4>{{issue}}</h4>
    </div>
</template>

<script>
export default {
    props: {
        sources: Object,
        issue: String
    },
    methods: {
        close () {
            this.$emit('close')
        }
    }
}
</script>

<style>
    .sidebar {
        text-align: center;
        width: 30vw;
        min-height: 100vh;

    }
</style>
