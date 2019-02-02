import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
axios.defaults.baseURL = "https://medium-api-230506.firebaseio.com/"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    displaySearchError: true,
    categories: [
      {image: "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", title: "Tech"},
      {image: "https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80", title: "Money"},
      {image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", title: "Politics"},
      {image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80", title: "Global"},
      {image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80", title: "Entertainment"},
      {image: "https://images.unsplash.com/photo-1530177245316-034d99cd7b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80", title: "Sports"},
      {image: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80", title: "Health"},
      {image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80", title: "Travel"},
      {image: "https://images.unsplash.com/reserve/LJIZlzHgQ7WPSh5KVTCB_Typewriter.jpg?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1241&q=80", title: "Other"}
      ],
    mainStory: {
      title: "Building a Wall",
      image: "https://images.unsplash.com/photo-1519851814087-c58f18889edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      views: [{description: "The wall should not be built", sources: [{name: "CNN", link: "http://www.google.com"}]}, {description: "The wall must be built", sources: [{name: "Fox News", link: "http://www.google.com"}]}]
    },
    searchResults: [
      {
        title: "This is something else",
        image: "",
        views: [{desciption: "The wall should not be built"}, {desciption: "The wall must be built", sources: [{name: "Fox News", link: "http://www.google.com"}]}]
      }
    ]

    

  },
  mutations: {

  },
  actions: {
    search(context, searchText) {
      axios.get()
      return axios.post("/Test.json", {searchText})
      
    }
  }
})
