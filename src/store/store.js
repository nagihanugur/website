import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
//769b3bca59af48e8b55b85e68188d6a3
export const store = new Vuex.Store({

    state : {
        categories : ["Business","Entertainment","General","Health","Science","Sports","Technology"],
        news : [],

    },

    getters : {

        getCategories(state){
            return state.categories;
        },
        getNews(state){

            return state.news;
        }

    },

    mutations : {

        setNews(state,payload){

            
            state.news.push(payload);
        }


    },
    actions : {

        newsList({commit}){
            this.$http
            .get("")
            .then(response => {
           
             
             commit("setNews",response.data)
             
    
            })

        }


    }

})