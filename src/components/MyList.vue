<template>
    <h1>List...  {{ user }} </h1>
    <h1>List...  {{ movies }} </h1>
    <div class="movies-list">
            <div class="movie" v-for="movie in movies" :key="movie.imdbID">
               <router-link :to="'/movie/' + movie.Imdb_id" class="movie-link">
                <div class="product-image">
                <img :src="movie.Poster" alt="">
                <div class="type">{{ movie.Type }}</div>
                </div>
                <div class="detail">
                    <div class="year">{{ movie.Year }}</div>
                    <h3>{{ movie.Title }}</h3>
                </div>
               </router-link>
            </div>
         </div>
</template>

<script>
 import axios from 'axios';
 import { mapGetters } from "vuex";

export default{
    name:'MyList',

    computed: {
        ...mapGetters(['user']),  
    },

    data(){
        return{
            movies:[],     
        }
    },

   async created(){ 

        const response =  await axios.get("Shows/2",);
        //console.log(response.data)
        if(response.status == '200'){
                this.movies = response.data ;
            } 
    }

}
</script>

<style lang="scss">
  .movies-list{
        display: flex;
        flex-wrap: wrap;
        margin: 0px 8px;

        .movie{
            max-width: 50%;
            flex: 1 1 50%;
            padding: 16px 8px;

            .movie-link{
                display: flex;
                flex-direction: column;
                height: 100%;

                .product-image{
                    position: relative;
                    display: block;

                    img{
                        display: block;
                        width: 100%;
                        height: 275px;
                        object-fit: cover;
                    }

                    .type{
                        position: absolute;
                        padding: 8px 16px;
                        background-color: #42B883;
                        color: #FFF;
                        bottom: 16px;
                        left: 0px;
                        text-transform: capitalize;
                    }
                }

                .detail{
                    background-color: #496583;
                    padding: 16px 8px;
                    flex: 1 1 100%; 
                    border-radius: 0px 0px 8px 8px;

                    .year{
                        color: #AAA;
                        font-size: 14px;
                    }

                    h3{
                        color: #FFF;
                        font-weight: 600;
                        font-size: 18px;
                    }
                }
            }
        }
    }
</style>