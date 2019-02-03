<template>
    <div class="story">
        <div class="pic"> <img :src="storyData.image" alt="img"> </div>
        <div class="story-viewpoints">
            <span class="feed-title"> {{storyData.title}}</span>
            <span v-for="view in storyData.views" class="feed-view indented">  <div class="side-circle" @click="$emit('openSources', view.sources, view.description)"><span class="counter-num"> {{view.sources.length}} </span></div> {{view.description}}</span>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        storyData: Object
    }
    
}
</script>

<style>
    .story {
        display: flex;
        flex-wrap: wrap;
        width:450px;
        height: auto;
        padding: 15px;
        overflow: hidden;
        margin-bottom: 50px;

    }

    .story .pic {
        position: relative;
        width: 100px;
        height: 175px;
        border-radius: 30px;
        overflow: hidden;

        
    }

    .pic img {
        display: block;
        background-size: cover;
        margin:auto;
        height:100%;
        width: auto;
        height:200px;
    }

    .story-viewpoints {
        text-align: left;
        width: 300px;
        height: 100%;
        padding-left: 10px;

    }

    .indented {
        margin-left: 30px;
    }
</style>
