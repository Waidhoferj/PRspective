<template>
    <div class="story">
        <div class="pic"> <img :src="storyData.image" alt="img"> </div>
        <div class="story-viewpoints">
            <span class="feed-title"> {{storyData.title}}</span>
            <span v-for="view in storyData.views" class="feed-view"> {{view.description}} <div class="counter-circle"><span class="counter-num"> {{view.sources.length}} </span></div></span>
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
        width:600px;
        height: 170px;
        padding: 15px;
        overflow: hidden;

    }

    .story .pic {
        position: relative;
        width: 167px;
        height: 100%;
        border-radius: 30px;
        overflow: hidden;

        
    }

    .pic img {
        height:200px;
        width: auto;
    }

    .story-viewpoints {
        width: 350px;
        height: 100%;

    }
</style>
