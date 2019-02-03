<template>
    <div class="box" :style="{backgroundImage: image}" @click="goToGenre">
        <div class="filter"></div>
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {title: String,
            image: String},
    methods: {
        goToGenre () {
            this.$emit("goToGenre", this.title)
        }
    }
    }
</script>

<style>
    .box {
        position: relative;
        border-radius: 30px;
        width: 230px;
        height: 200px;
        margin:10px;
        background-image: url('../assets/fillerImg.jpg');
        background-size: cover;
        transform: box-shadow 1s
    }

    .title {
    cursor: pointer;
    color: white;
    font-size: 30px;
	position:absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%, -50%)
    }

    
</style>


