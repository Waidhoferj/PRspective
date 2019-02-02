<template>
<div class="view split">
  <div class="home">
    <header>
        <h1 class="app-title">PRspective</h1>
          <div class="search-bar search-margin">
            <div class="icon"><img src="../assets/search-icon.svg" alt="search"></div>
            <form @submit.prevent="$store.dispatch('search', searchText)">
              <input v-model="searchText" type="text" placeholder="type something" >
            </form>
            
          </div>
    </header>
    <div class="categories">
      <div class="main-story" :style="{background: 'url(' + mainStory.image + ')'}">
        <div class="filter">
          <h4 class="top-story">Top Story</h4>
          <h2>{{mainStory.title}}</h2>
        <div class="main-views">
          <div class="main-view-el" v-for="view in  mainStory.views">
             <span class="feed-view white"> {{view.description}} <div class="counter-circle" @click="openSources(view.sources)"><span class="counter-num"> {{view.sources.length}} </span></div></span>
          </div>
        </div>
        </div>
        
        
      </div>
      <div class="genres">
        <category v-for="category in categories" :key="category.title" :title="category.title" :image="'url(' + category.image + ')'" @goToGenre="goToGenre(category.title)">
        </category>
      </div>
    </div>
    
    
  </div>
  <div class="feed">
    <h4 class="black">Views</h4>
    <ul class="feed-list">
    <li v-for="data in feedData" class="feed-list-el">
      <span class="feed-title">{{data.title}}</span>
      <span class="feed-view" v-for="view in data.views">{{view.description}} <div class="counter-circle"><span class="counter-num"> {{view.sources.length}} </span></div></span>

    </li>
    </ul>
  </div>

<sidebar :sources="selectedSources.sources" :issue="selectedSources.title" @focus="openSources" @blur="closeSources" v-if="sidebarIsHidden" ref="sidebar"></sidebar>

</div>
</template>

<script>
import Category from "@/components/Category.vue"
import Sidebar from "@/components/Sidebar.vue"

export default {
  name: 'home',
  data () {
    return {
      searchText: "",
      selectedSources: [{name: "Default", link: "http://www.google.com"}],
      sidebarIsHidden: true,
    }
  },
  created() {
    console.log(this.$route.params.id)
  },
  components: {
    Category,
    Sidebar
  },
  computed: {
    mainImageURL() {
      const urlString = this.$store.state.mainImage
      console.log(`url('${urlString}')`)
      return `url('${urlString}')`
    },
    categories () {
      return this.$store.state.categories
    },

    mainStory () {
      return this.$store.state.mainStory
    },
    feedData () {
    return this.$store.state.feed
  }
  },
  
  methods: {
    goToGenre (genre) {
      console.log()
      this.$router.push("/genre/" + genre.toLowerCase())
    },
    openSources(sources, title) {
      this.selectedSources = {sources,title}
      this.sidebarIsHidden = false
    },
    closeSources() {
      this.sidebarIsHidden = true
    }
  }
}
</script>


<style>

.view {
  width: 100%;
  height: 100%;
  background: white;

}

.split {
  display: flex;

  
  
}

.top-story {
  z-index: 1;
}

.home {
  text-align: left;
  min-width: auto;
  min-height: 100%;
  width: 70%;
}

.feed {
  width: 30%;
  min-height: 100vh;
  box-shadow: -5px 0 5px rgba(0, 0, 0, 0.322);
}

h1 h2 h3 h4 {
margin:0;
}

.app-title {
  /* The app title */
  margin:0;
  margin-left: 50px;
  margin-top: 0;
  padding:10px;
	font-size: 120px;
	font-weight: 500;
}

h2 {
  /* Title of Top Story */
  color: white;
	font-size: 60px;
	font-weight: 500;
  width: 100%;
  text-align: center;
}

h4 {
  /* Top story and comment */
  color: white;
  margin:0;
  padding: 15px;
	font-size: 40px;
  font-weight: 100;
}


.icon {
  display: inline;
  vertical-align: -5px;
  padding: 15px;
  
}
.search-margin {
  margin-left: 20px;
}
.icon img {
  width: 48px;
  height: auto;
}

input {
  width: 80%;
  font-size: 50px;
	font-weight: 200;
  outline: none;
  border: none;
}


.categories {
  margin-top: 30px;
  padding: 20px;
  text-align: center;
}

.main-story {
  margin-left: 20px;
  overflow:hidden;
  position: relative;
  text-align: left;
  border-radius: 30px;
  background-size: cover;
  padding: 10px;
  width:90%;
  height: 400px;

}

.filter {
  top: 0;
  left: 0;
  margin:0;
  padding:0;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.473);
  border-radius: 30px;
  width: 100%;
  height: 100%;

}
.genres {
  display: flex;
  flex-wrap: wrap;
  padding:20px;

}

.black {
  color: black;
}

.white {
  color: white;
}
.feed-title {
font-size: 25px;
width: 100%;
padding: 10px;
}
.feed-view {
  list-style-type: none;
  display: block;
width: 100%;
padding: 10px 0;
}

.counter-circle {
  cursor: pointer;
  display: inline-block;
  position: relative;
  color:white;
  background: green;
  border-radius:  50%;
  width: 30px;
  height: 30px;
  font-size: 20px;
}

.counter-num {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%)
}

.main-responses {
  display: block;
  color:white;
  width: 100%;
  text-align: center;
  background: linear-gradient(rgba(0,0,0, .2, )rgba(0,0,0, .2));

}

form {
  display: inline;
}

.feed-list {
  padding-left: 0;

}
.feed-list li {
  list-style-type: none;
  text-align: center;
  padding:10;
} 

.feed-list-el::after {
  margin: 10px auto;
  content:"";
  display: block;
  width: 70px;
  height:2px;
  background: gray;
  border-radius: 3px;
}

.main-views {
  display:flex;
  padding:10px
}

.main-view-el {
  width: 30%;
  margin: 5%;

}
</style>

