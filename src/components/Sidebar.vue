<template>
    <div class="sidebar">
        <div class="icon back-small" @click="close"><img src="@/assets/back-icon.svg" alt="back"></div>
        <div class="sources">
            <h1 class="sidebar-title">Sources for</h1>
            <span class="feed-title">{{issue}}</span>
            <span class="feed-view" v-for="source in sources"> <a :href="source.link"> {{source.name}}</a> <div class="score-circle" :style="{backgroundColor:determineColor(source.score)}"><span class="counter-num"> {{ Math.abs(Math.round(source.score *100)/100)}} </span></div></span>
        </div>
        <div class="legend">
            <h1 class="legend-title">Emotionality</h1>
            <div class="scale">
            <div class="scale-section">
                <div class="score-circle" style="background: green"><span class="counter-num">0</span></div>
                <p class="scale-label">Low</p>
            </div>
            <div class="scale-section">
                <div class="score-circle" style="background: rgb(190, 190, 49)"><span class="counter-num">0.5</span></div>
                <p class="scale-label">Medium</p>
            </div>
            <div class="scale-section">
                <div class="score-circle" style="background: red"><span class="counter-num">1</span></div>
                <p class="scale-label">High</p>
            </div>
            </div>
        </div>
        
            
        
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
    
    .legend {
        position: fixed;
        bottom: 0;
        width: 30vw;
        height: 170px;
    }

    .scale {
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: center;
        flex-wrap: nowrap;
        flex-basis: 30%;

        

    }
    .scale-label {
        padding: 20px;

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

    .legend-title {
        font-size: 40px;
        font-weight: 300;
    }
    .legend-title::before {
        content: "";
        display:block;
        margin: auto;
        width: 70%;
        height: 2px;
        background:gray;
        margin-bottom: 10px;
        border-radius: 5px;
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
