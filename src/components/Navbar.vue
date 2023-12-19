<template>
  <nav v-if="user">
    <div>
        <p>hi...{{user.displayName}}</p>
        <p class="email">Login now as...{{user.email}}</p>
    </div>
    <button @click="logout">Logout</button>
  </nav>
</template>

<script>
import { ref } from '@vue/reactivity';
import getUser from "../Composable/getUser" 
import { auth } from '@/firebase/Config';
export default {
    setup(){
      let error=ref(null);
      let {user}=getUser();
      let logout=async()=>{
        try{
          await auth.signOut();
          console.log("user logout");
        }catch(err){
          error.value=err.message;
        }
      }
      
      return{logout,user}
    }
}

</script>

<style>
     nav {
        padding: 20px;
        border-bottom: 1px solid #eee;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      nav p {
        margin: 2px auto;
        font-size: 16px;
        color: #444;
      }
      nav p.email {
        font-size: 14px;
        color: #999;
      }
</style>