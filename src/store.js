import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from "./router"
import { async } from 'q';
axios.defaults.baseURL = "https://medium-api-230506.firebaseio.com/"
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    avaliableSearches: ["tech", "money", "politics", "global", "entertainment", "sports", "health", "travel"],
    selectedSources: {issue: "blah", sources:[{name: "Default", link: "http://www.google.com"}]},
    categories: [
      {image: "https://images.unsplash.com/photo-1478358161113-b0e11994a36b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80", title: "Tech"},
      {image: "https://images.unsplash.com/photo-1515606378517-3451a4fa2e12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2600&q=80", title: "Money"},
      {image: "https://images.unsplash.com/photo-1529107386315-e1a2ed48a620?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80", title: "Politics"},
      {image: "https://images.unsplash.com/photo-1526470608268-f674ce90ebd4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80", title: "Global"},
      {image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80", title: "Entertainment"},
      {image: "https://images.unsplash.com/photo-1530177245316-034d99cd7b4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2167&q=80", title: "Sports"},
      {image: "https://images.unsplash.com/photo-1543363136-3fdb62e11be5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=80", title: "Health"},
      {image: "https://images.unsplash.com/photo-1516738901171-8eb4fc13bd20?ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80", title: "Travel"},
      ],
    mainStory: {
      title: "Building a Wall",
      image: "https://images.unsplash.com/photo-1519851814087-c58f18889edf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2700&q=80",
      views: [{description: "The wall should not be built", sources: [{name: "CNN", link: "http://www.google.com"}]}, {description: "The wall must be built", sources: [{name: "Fox News", link: "https://insider.foxnews.com/2019/02/02/douglas-macgregor-donald-trump-needs-act-his-authority-secure-border"}]}]
    },
    feed: [
      {
        "image" : "https://images.unsplash.com/photo-1519781542704-957ff19eff00?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1146&q=80",
        "title" : "23 and me",
        "views" : [ {
          "description" : "23 and me shows signs of cancer",
          "sources" : [ {
            "content" : "Back in 2015, I decided to send my spit to 23andMe, the company that sells direct to consumer genetics test. The test gave me information as varied as how much DNA I share with our Neanderthal ancestors, how much caffeine I most likely consume, and whether I may have a unibrow. I also let me know whether I'm carrying certain genetic variations related to diseases that could be passed on to kids.",
            "link" : "https://www.businessinsider.com/review-of-23andmes-new-genetic-health-risks-reports-2017-4",
            "magnitude" : 2.0999999046325684,
            "name" : "Business insider",
            "score" : 0.20000000298023224
          } ]
        }, {
          "description" : "Beware of 23andMe",
          "sources" : [ {
            "content" : "Last month, the DNA testing company 23andMe secured Food and Drg Administration approval for a new screening for gene based health risks. Along with celiac disease, Alzheimer's, Parkinson's, breast cancer and several other medical conditions, the company can now screen clients for two mutations that have been linked to colorectal cancer. But FDA approved does not necessarily mean clinically usefuil. 23andMe relies on much simpler technology than tests that you'd get at your doctor's offic, As a result, the company's tests cannot tell you much about your actual risk of developing the diseases in question.",
            "link" : "https://www.nytimes.com/interactive/2019/02/01/opinion/23andme-cancer-dna-test-brca.html?mtrref=www.google.com",
            "magnitude" : 0.6000000238418579,
            "name" : "New York Times",
            "score" : 0
          } ]
        } ]
      }, {
        "image" : "",
        "title" : "Vitro Fertilization(IVF)",
        "views" : [ {
          "description" : "Vitro Fertilization potential risk",
          "sources" : [ {
            "content" : "What is wrong with IVF In Vitro Fertilization? Can IVF be used in an acceptable way? What's wrong with some babies dying? IVF was founded on dishonest logic; Isn't it poor logic to hamper today's advances out of fear? What's wrong with some technology, if it's used for good? IVF isn't about cloning so why mention it? If God is the author of life, can't He create life using IVF too? It isn't abortion and prenatal selection, what's the big deal?",
            "link" : "http://catholicbridge.com/catholic/what-is-wrong-with-ivf-in-vitro-fertilization.php",
            "magnitude" : 4.599999904632568,
            "name" : "Catholic Bridge",
            "score" : -0.5
          } ]
        }, {
          "description" : "Benefits through Vitro Fertilization",
          "sources" : [ {
            "content" : " The in-vitro diagnostics market will register a CAGR of almost 7 percent by 2023. Global adoption of advanced treatment solutions to gain traction in the market. The use and adoption of in-vitro diagnostics to manage and test for cancer, CVD, and kidney infectious diseases with immunoassay and molecular diagnostic devices are increasing. The availability of advanced treatment care also enables increased adoption rates among healthcare providers.",
            "link" : "https://www.prnewswire.com/news-releases/global-in-vitro-diagnostics-market-to-2023-high-demand-for-personalized-medicine-inadequate-reimbursements--competitive-landscape-300787423.html",
            "magnitude" : 2.200000047683716,
            "name" : "Cision PR Newswire",
            "score" : 0.5
          } ]
        } ]
      },
      {
        "image" : "https://images.unsplash.com/photo-1511873364543-cccea2309397?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80",
        "title" : "Hobo become richet man alive",
        "views" : [ {
          "0" : {
            "score" : -0.10000000149011612
          },
          "description" : "Being poor isn't a destiny",
          "sources" : [ {
            "content" : "Gerald Lynch spent the last 6 months like an other homeless person- outside common shopping areas looking for spare change. Two week ago he was scavenging for food in a forest and struck oil. He is now the richest man alive and will save the economy millions with his discovery.",
            "link" : "https://www.google.com",
            "magnitude" : 0.800000011920929,
            "name" : "wall street journal",
            "score" : -0.10000000149011612
          }, {
            "content" : "“He wondered on private property and is being sued. Amazing luck for him. He isn’t giving any of his new wealth to the poor”",
            "link" : "https://www.google.com",
            "magnitude" : 2.0999999046325684,
            "name" : "Business insider",
            "score" : -0.30000001192092896
          } ]
        } ]
      }, 
      {
        "image" : "",
        "title" : "Fastest man alive",
        "views" : [ {
          "0" : {
            "score" : 0.30000001192092896
          },
          "description" : "Too fast. No one could have kept up",
          "sources" : [ {
            "content" : "Last night, it was discovered that there is a new fastest man alive. It was previously thought that the record was to run a miles in 3 minutes and 42 seconds; however, Leo Smith is able to run in 2 minutes and 50 seconds.",
            "link" : "https://www.google.com",
            "magnitude" : 0.699999988079071,
            "name" : "espn",
            "score" : 0.30000001192092896
          }, {
            "content" : "“he is on steroids… he cheated. It’s impossible to run that fast. I saw him run with my own eyes. It was incredible”",
            "link" : "\"https://www.google.com",
            "magnitude" : 2.4000000953674316,
            "name" : "FOX",
            "score" : -0.10000000149011612
          } ]
        } ]
      },
      {
        "image" : "https://cdn.neow.in/news/images/uploaded/2019/02/1549059882_samsung_s10e_360_story.jpg",
        "title" : "Samsung s10 leaked!",
        "views" : [ {
          "0" : {
            "score" : 0.10000000149011612
          },
          "description" : "Best anticipated phone in 2019",
          "sources" : [ {
            "content" : "Samsung has just released the design and features of their newest phone, the s10, which will have a simpler design and the ability to transport people to the location of their choice. The leak comes just in time for Super Bowl Sunday with the potential of seeing an ad tomorrow night.",
            "link" : "https://www.google.com",
            "magnitude" : 1.100000023841858,
            "name" : "Gadget",
            "score" : 0.10000000149011612
          }, {
            "content" : "the unexpectedly s10 shocks me when it gets we. it’s the most lightweight phone ever. It comes in hideous colors”",
            "link" : "https://www.google.com",
            "magnitude" : 1.5,
            "name " : "SJW",
            "score" : 0
          } ]
        } ]
      }, {
        "image" : "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2018/02/07/104994086-RTX4RL3Z.1910x1000.jpg",
        "title" : "Elon Musk hosting meme review",
        "views" : [ {
          "description" : "Felix doesn't think so",
          "sources" : [ {
            "content" : "While it seemed that Musk was hell-bent on hosting the show, PewDiePie isn't so sure that the collaboration will actually come to fruition, as stated during an episode of Meme review on Feburary 2.",
            "link" : "https://www.dexerto.com/entertainment/pewdiepie-gives-doubtful-update-on-elon-musk-possibly-hosting-meme-review-327055",
            "magnitude" : 0.699999988079071,
            "name" : "Dexerto",
            "score" : -0.699999988079071
          } ]
        }, {
          "description" : "Elon Musk would fly his private jet into PewDiePie",
          "sources" : [ {
            "content" : "In the days leading up to Tesla fourth-quarter earnings report, an unexpected controversy broke out for a company that's no stranger to monthly and even weekly crisis management. Spacex has provided tesla and spacex ceo elon musk with a 2015 70 million gulfstream g650er business jet - an exceptionally nice aircraft - and musk clocked 1500000 miles flight time on it in 2018, according to the washington post.",
            "link" : "https://www.businessinsider.com/elon-musk-should-fly-his-gulfstream-g650er-jet-anywhere-he-wants-2019-1",
            "magnitude" : 1.2999999523162842,
            "name" : "Business Insider",
            "score" : 0
          } ]
        } ]
      } 
    ],
    specifiedFeed: [],

    

  },
  mutations: {
    changeSources: (state, payload) => {
      state.selectedSources = {issue: payload.title, sources: payload.sources}
    },
    queueFeed: (state) => {
      state.feed.unshift(state.feed.pop())
    }
  },
  actions: {
    async search ({state}, {keyword}) {
      if (state.avaliableSearches.includes(keyword)) {
        try{
          let res = await axios.get(`/feed/${keyword}.json`)
          state.specifiedFeed = res.data
          
          router.push("/genre/" + keyword.toLowerCase())
        }
        catch(err) {
          console.log(err)
        }
      }
      

      },
      async pullMain ({state}) {
        try{
          let res = await axios.get(`/mainStory.json`)
          state.mainStory = res.data
        }
        catch(err) {
          console.log(err)
        }
    },
    async refreshGenre ({state}, {genre}) {
      try {
        let res = await axios.get(`/feed/${genre}.json`)
          state.specifiedFeed = res.data
      } catch (err) {
        console.log(error)
      }
    }
  
  }
})
