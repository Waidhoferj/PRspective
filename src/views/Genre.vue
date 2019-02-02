<template>
<div class="view">
    <nav class="genre-head">
        <div class="genre-head-el">
                    <div class="icon icon-padded" @click="goBack"><img src="../assets/back-icon.svg" alt="back"></div>
        </div>
        <div class="genre-head-el search-padding">
            <div class="icon"><img src="../assets/search-icon.svg" alt="search"></div>
            <form @submit.prevent="$store.dispatch('search', searchText)">
              <input v-model="searchText" type="text" placeholder="type something" >
            </form>
        </div>
        <div class="genre-head-el">
                    <span class="genre-title">{{$route.params.id}}</span>
        </div>
</nav>
    <div class="stories"></div>
        <story></story>
</div>

</template>

<script>
import Story from "@/components/Story.vue"
export default {
    
    data () {
        return {
            searchText: "",
        }
    },
    components: {
        Story
    },
    methods: {
        goBack () {
            this.$router.go(-1)
        }
    }
}
</script>

<style>
.genre-head {
    text-align: left;
    display: flex;
}

.genre-head-el {
    position: relative;
    width:33%;
}

.genre-title {
	font-size: 100px;
	font-weight: 500;
	line-height: 164px;
    width:100%;
    margin-left: 50px;
    }
    
 .search-padding {
     padding-top: 60px;
    }

.icon-padded {
    border: 1px solid black;
    padding-top:100px;
}

.stories {
    width: 100%
    disp
}
</style>

