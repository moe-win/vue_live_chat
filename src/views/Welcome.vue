<template>
  <div class="welcome container">
    <div v-if="showsignupForm">
      <SignUp @enterchat="enterchat"></SignUp>
      <p>Already Member? <span @click="showsignupForm=!showsignupForm">Login Account</span></p>
    </div>
    <div v-else>
    <Login @enterchat="enterchat"></Login>
    <p>New Member? <span @click="showsignupForm=!showsignupForm">Signup Account</span></p>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import Login from '../components/Login'
import SignUp from '../components/SignUp'
import { useRouter } from 'vue-router'
export default {
  components: {
    Login, SignUp },
    setup(){
      let showsignupForm=ref(true);
      let router=useRouter();
      let enterchat=()=>{
          router.push({name:"Chatroom"});
      }

      return{showsignupForm,enterchat}
    }

}
</script>

<style>
    .welcome{
        text-align: center;
        padding: 20px 0;
    }
    .welcome form {
    width: 300px;
    margin: 20px auto;
  }
  /* .welcome label {
    display: block;
    margin: 20px 0 10px;
  } */
  .welcome input {
    width: 100%;
    padding: 10px;
    border-radius: 20px;
    border: 1px solid #eee;
    outline: none;
    color: #999;
    margin: 10px auto;
  }
  .welcome span{
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
  }
  .welcome button {
    margin: 20px auto;
  }
</style>