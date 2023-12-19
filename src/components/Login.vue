<template>
    <h1>Login</h1>
    <form @submit.prevent="Login">
     
      <input type="email" placeholder="email" v-model="email">
      <input type="password" placeholder="password" v-model="password">
      <div class="error" v-if="error">{{error}}</div>
      <button>Login</button>
    </form>
  </template>
  
  <script>
  import { ref } from '@vue/reactivity'
  
  import useLogin from "../Composable/useLogin"
  export default {
      setup(props,context){
          
          let email=ref("");
          let password=ref("");
          let {error,signin}=useLogin();
          let Login=async()=>{
               let res=await signin(email.value,password.value);
                if(res){
                    context.emit("enterchat");
                }
            }
  
          return{email,password,Login,error}
      }
  
  }
  </script>
  
  <style>
  
  </style>