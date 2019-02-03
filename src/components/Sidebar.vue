<template>
    <div class="sidebar">
        <div class="icon back-small" @click="close"><img src="@/assets/back-icon.svg" alt="back"></div>
        <h1 class="sidebar-title">Sources for</h1>
        <span class="feed-title">{{issue}}</span>
        <span class="feed-view" v-for="source in sources"> <a :href="source.link"> {{source.name}}</a> <div class="score-circle" :style="{backgroundColor:determineColor(source.score)}"><span class="counter-num"> {{Math.round(source.score *100)/100}} </span></div></span>
    </div>
</template>

<script>
export default {
    props: {
        sources: Array,
        issue: String
    },
    methods: {
        close () {
            this.$emit('close')
        },
        determineColor(score) {
            console.log(score)
            let color
            if (score > -0.25 && score < 0.25) {
                return "green"
            }
            else if (score > -0.5 && score < 0.5) {
                return "rgb(190, 190, 49)"
            }
            else if (score > -1 && score < 1) {
                return "red"
            }
            else {
                return "transparent"
            }
        }
    }
}
</script>

<style>
    .sidebar {
        position: fixed;
        right: 0;
        top: 0;
        text-align: center;
        width: 30vw;
        min-height: 100vh;
        background: white;
        box-shadow: -5px 0 5px rgba(0, 0, 0, 0.158);

    }

    .back-small img {
        width:30px;
        height: 30px;
        
    }

    span a {
        font-size: 30px;
        text-decoration: none;
        color: rgb(87, 86, 86);
    }

    .sidebar-title {
        font-size: 40px;
    }

    .score-circle {
    transform: translateY(11px);
    display: inline-block;
    margin-left: 10px;
    position: relative;
    color:white;
    border-radius:  50%;
    width: 40px;
    height: 40px;
    font-size: 17px;
    }
</style>
