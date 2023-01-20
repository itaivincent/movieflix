<template>
 <nav class="navbar navbar-expand navbar-light ">
      <div class="container">
        <router-link to="/" class="navbar-brand">
          <h1><span>Movies</span>Flix</h1>
        </router-link>
        <div class="collapse navbar-collapse">
            <ul class="navbar-nav ml-auto" v-if="!user">
            <li class="nav-item">
              <router-link to="/login" class="nav-link"><h5>Login</h5></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/register" class="nav-link"><h5>SignUp</h5></router-link>
            </li>
            </ul>
            <ul class="navbar-nav ml-auto" v-if="user">
            <li class="nav-item">
              <a href="javascript:void(0)" @click="handleClick" class="nav-link"><h5>Logout</h5></a>
            </li> 
            <li class="nav-item">
              <router-link to="/mylist" class="nav-link"><h5>My List</h5></router-link>
            </li>              
            <li class="nav-item">
              <router-link to="#" class="nav-link"><h5>{{ user.Name }}</h5></router-link>
            </li> 
            </ul>
        </div>
      </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex';
//we have to export component to use it as a re usable component
    export default{

        name:'Nav',      
        methods:{
            handleClick(){
                localStorage.removeItem('token');
                localStorage.removeItem('Id');
                this.$store.dispatch('user', null);
                this.$router.push('/');
            },
        },
        computed:{
            ...mapGetters(['user'])
        },      
    }
</script>