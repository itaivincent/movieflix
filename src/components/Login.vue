<template>
    
    <div class="auth-wrapper">
      <div class="auth-inner">
        <form @submit.prevent="handleSubmit">
            <div v-if="error" class="alert alert-danger" role="alert">
                {{error}}
            </div>
            <h3>Login</h3>
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" />
            </div>
            <button class="btn btn-primary btn-block">Login</button>
        </form>
      </div>
    </div>







    

</template>

<script>
import axios from 'axios'

    export default{
        name:'Login',
        data(){
            return {
                email: '',
                password: '',
                error:''
            }
        },
        methods:{

           async handleSubmit(){
            try{
                const response =  await axios.post('Users/login/',{
                    Email: this.email,
                    Password: this.password
                });

                localStorage.setItem('token', response.data.Token);
                localStorage.setItem('Id', response.data.Id);
                this.$store.dispatch('user',response.data);
                this.$router.push('/');

               } catch(e){
                this.error = 'Invalid Email/Password!'
               }

            }
        }
    }
</script>