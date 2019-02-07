<template>
<div class="view">
    <nav class="genre-head">
        <div class="genre-head-el">
                    <h1 class="small-app-title purple" @click="goHome">PRspective</h1>
        </div>
        <div class="genre-head-el search-padding">
            <div class="icon"><img src="../assets/search-icon.svg" alt="search"></div>
            <form @submit.prevent="search">
              <input v-model="searchText" type="text" placeholder="type something" >
            </form>
        </div>
        <div class="genre-head-el">
                    <span class="genre-title">{{$route.params.id}}</span>
        </div>
</nav>
    <div class="stories">
        <story v-for="story in stories" :storyData="story" @openSources="openSources"></story>
    </div>

    <transition name="fade" mode="out-in">
<sidebar :sources="selectedSources.sources" :issue="selectedSources.issue" @close="closeSources" v-if="sidebarShown" ></sidebar>
</transition>
        
</div>

</template>

<script>
import Story from "@/components/Story.vue"
import Sidebar from "@/components/Sidebar.vue"
export default {
    
    data () {
        return {
            searchText: "",
            sidebarShown: false
        }
    },
    components: {
        Story,
        Sidebar
    },
    mounted () {
        this.$store.dispatch("refreshGenre", {genre: this.$route.params.id})
    },
    methods: {
        goHome () {
            this.$router.push({name: "home"})
        },
        closeSources() {
      this.sidebarShown = false
    },
    openSources(sources, title) {
      this.$store.commit("changeSources", {title, sources})
      this.sidebarShown = true
    },
    search (event) {
      const keyword = event.target.querySelector("input").value
      this.$store.dispatch("search", {keyword})
    }
    },
    computed: {
        stories () {
            return this.$store.state.specifiedFeed
        },
        selectedSources () {
            return this.$store.state.selectedSources
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
    text-align: center;
    position: relative;
    width:33%;
}

.genre-title {
    color:#5C1787;
	font-size: 100px;
	font-weight: 500;
	line-height: 164px;
    
    }
    
 .search-padding {
     padding-top: 60px;
     padding-bottom: 20px;
    }

.stories {
    display: flex;
    justify-content: center;
    align-content: flex-start;
    flex-wrap: wrap;
    width: 90%;
    min-height: 100vh;
    margin: auto;
    padding-top: 50px;
    text-align: center;
    border-top: 1px solid black;
}

.small-app-title {
    text-align: center;
    position: relative;
    width: 100%;
    margin-top: 60px;
    font-size: 40px;
    cursor: pointer;
    color: #5C1787;
}
.purple {
    color: #5C1787;
}

.fade-enter-active, .fade-leave-active {
  transition:opacity 0.5s
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>

