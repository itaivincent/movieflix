<template>
  <div id="app"> 
    <Nav  />
      <main >
        <router-view  />
      </main>   
  </div>
</template>

<script>
//importing from the Nav.vue file
import Nav from './components/Nav.vue'
import axios from 'axios'

export default {
  name: 'App',
  //to use the component you declare it
  components:{
    Nav
  },
   async created(){

    // const response = await axios.get('api/all_users');
    // this.$store.dispatch('user',response.data);

    }

}
</script>

<style lang="scss">

    @import url('https://fonts.googleapis.com/css?family=Fira+Sans:400,500,600,700,800');

    *{
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: 'Fira-sans', sans-serif;

      &::selection{
        background: transparentize(#42B883, 0.5);
      }
    }

    body{
      background-color: #35495e !important;
      min-height: 100vh;
      display: flex;
      font-weight:400;    
    }

    a {
      text-decoration: none;
      }

    h1,h2,h3,h4,h5,h6,p,label{
      color:#ffffff;
      font-weight: 700;
      font-family: 'Fira Sans', sans-serif;
    }

    span{
      color: #42B883;
    }


    body, html, #app, #root, .auth-wrapper{
      width: 100%;
      height: 100%;
    }

    #app{
      text-align: left;
    }

    .navbar-light{

      display:flex;
      align-items: center;
      justify-content: center;
      padding: 10px 16px;
      background-color: #2C3D4E;
      box-shadow: 0px 0px 6px  rgba(0,0,0,0.1);
    }

    .auth-wrapper{
      display: flex;
      justify-content: center;
      flex-direction: column;
      text-align: left;
    }

    .auth-inner{
      width: 450px;
      margin: auto;
      background: #ffffff;
      box-shadow: 0px 14px 80px  rgba(34,35,58,0.2);
      padding: 40px 55px 45px 55px;
      border-radius: 15px;
      transition: all .3s;
    }

    .auth-wrapper .form-control:focus{
      border-color: #167bff;
      box-shadow: none;
    }

    .auth-wrapper h3{
      text-align: center;
      margin: 0;
      line-height: 1;
      padding-bottom: 20px;
    }

    .custom-control-label{
      font-weight: 400;
    }

    .forgot-password, 
    .forgot-password a{
      text-align: right;
      font-size: 13px;
      padding-top: 10px;
      color: #7f7d7d;
      margin: 0;
    }

    .forgot-password a {
      color: #167bff;
    }


</style>
