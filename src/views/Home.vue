<template>
<div class="view split">
  <div class="home">
    <header>
        <h1 class="app-name">Prspective</h1>
          <div class="search-bar search-margin">
            <div class="icon"><img src="../assets/search-icon.svg" alt=""></div>
            <input type="text" placeholder="type something">
          </div>
    </header>
    <div class="categories">
      <div class="main-story">
        <div class="filter">
        </div>
        <h4 class="top-story">Top Story</h4>
        <h2>Building Bridges</h2>
        <h4>Here is a comment</h4>
      </div>
      <div class="genres">
        <!-- Add in the genres here -->
        <category v-for="category in categories" :key="category.title" :title="category.title" :image="'url(' + category.image + ')'">
          {{category}}
        </category>
      </div>
    </div>
    
    
  </div>
  <div class="feed">
    <h4 class="black">Views</h4>
    <ul>
      <li></li>
    </ul>
    <li v-for="data in feedData">
      <span class="feed-title">{{data.title}}</span>
      <span class="feed-view" v-for="response in data.responses">{{response.title}} <div class="counter">{{response.number}}</div></span>
      <div class="counter"></div>

    </li>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import Category from "@/components/Category.vue"

export default {
  name: 'home',
  data () {
    return {
      categories: [
        {image: "https://cdn.cnn.com/cnnnext/dam/assets/190202074327-trump-putin-split-0202-medium-tease.jpg", title: "Tech"},
        {image: "https://cdn.cnn.com/cnnnext/dam/assets/171222111337-president-trump-signs-tax-bill-12-22-2017-story-body.jpg", title: "Support"},
        ],
      feedData: [
        {title: "Trump Adds Tarrifs", responses: [{title:"thats good", number: 50}, {title: "thats bad", number: 55}]}
      ]
    }
  },
  components: {
    Category
  },
  computed: {
    mainImageURL() {
      const urlString = this.$store.state.mainImage
      console.log(`url('${urlString}')`)
      return `url('${urlString}')`
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

.home {
  text-align: left;
  min-width: auto;
  min-height: 100%;
  width: 70%;
}

.feed {
  border-left: 3px black solid;
  width: 30%;
  height: 100%;
}

h1 {
  /* The app title */
  margin:0;
  padding:0;
	font-size: 120px;
	font-weight: 500;
}

h2 {
  /* Title of Top Story */
  color: white;
	font-size: 90px;
	font-weight: 500;
  width: 100%;
  text-align: center;
}

h4 {
  /* Top story and comment */
  color: white;
  padding: 15px;
	font-size: 40px;
  font-weight: 100;
}

.app-name {
  margin: 10px;
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
  font-size: 50px;
	font-weight: 200;
  outline: none;
  border: none;
}

.categories {
  padding: 20px;
  text-align: center;
}

.main-story {
  overflow:hidden;
  position: relative;
  margin:auto;
  background-image: url('../assets/fillerImg.jpg');
  text-align: left;
  border-radius: 30px;
  background-size: cover;
  padding: 10px;
  width:80%;
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
.feed-title {
width: 100%;
padding: 10px;
}
.feed-view {
width: 100%;
padding: 20px;
}

.counter {
  background: green;
  border-radius:  50%;
  width: 40px;
  height: 40px;
  font-size: 40px;
}

</style>

