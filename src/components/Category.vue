<template>
    <div class="box" :style="{backgroundImage: image}">
        <span class="title">{{title}}</span>
    </div>
</template>

<script>
export default {
    props: {title: String,
            image: String},
    created () {

    }}
</script>

<style>
    .box {
        border-radius: 30px;
        width: 200px;
        height: 200px;
        margin:10px;
        background-image: url('../assets/fillerImg.jpg');
        background-size: cover;
        transform: box-shadow 1s
    }

    .title {
	position:absolute;
    top: 50%;
    left:50%;
    transform:translate(-50%, -50%)
    }
</style>


