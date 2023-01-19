<template>
<div class="movie-detail">
    <img :src="movie.Poster" alt="Movie Poster" class="featured-img"/>
    <h2>{{ movie.Title }}</h2>
    <p>{{ movie.Year }}</p>
    <p>{{ movie.Plot }}</p>
    <form @submit.prevent="" class="search-box"> 
        <input type="hidden" v-model="movie.Year" />         
        <input type="submit" v-on:click="addToList"  value="Add to Watch-List" />
     </form>
</div>
</template>

<script>
import env from '@/env';
import { ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { mapGetters } from "vuex";


export default{
    setup() {
        const movie = ref({});
        const route = useRoute(); 
        onBeforeMount(() => {
            fetch(`http://www.omdbapi.com/?i=${route.params.id}&plot=full&apikey=${env.apikey}`)
            .then(response => response.json())
                .then(data => {
                    movie.value = data;              
                });
        });

        return{        
            movie 
          }    
      
    },   
    
    computed: {
        ...mapGetters(['user']),  
    },
   
    methods:{
       async addToList (){
       // console.log(this.user.Id)
     // console.log(this.movie.Title)
  
   
       const response =  await axios.post('Shows/',{

            Name: this.movie.Title,
            Description: this.movie.Title,
            Release_Date: this.movie.Title,
            Image: this.movie.Title,
            Date_Added: this.movie.Title,
            Category: this.movie.Title,
            User_id: this.user.Id,
            Imdb_id: this.movie.Year,
            IsWatched:''
                
            });


           if(response.status == '200'){
                //sweet alert to show success
                console.log("well done")
            }
         
       }     
    }    
}

</script>

<style lang="scss">
    .movie-detail{
        padding: 16px;

        h2{
            color: #FFF;
            font-size: 28px;
            font-weight: 600;
            margin-bottom: 16px;
        }

        .featured-img{
            display: block;
            max-width: 200px;
            margin-bottom: 16px;
        }

        p{
            color: #FFF;
            font-size: 18px;
            line-height: 1.4;
        }

        input{

            &[type="submit"]{
                width: 100%;
                max-width: 300px;
                background-color: #42B883;
                padding: 16px;
                border-radius: 8px;
                color: #FFF;
                font-size: 20px;
                text-transform: uppercase;
                transition: 0.4s;

                &:active {
                    background-color: #3B8070;
                } 

        }
     }
    }
</style>