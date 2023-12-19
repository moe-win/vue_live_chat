<template>
  <form>
    <textarea placeholder="text here message and hit enter to send" 
    v-model="message"
    @keypress.enter="handlesumit"></textarea>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import getUser from '@/Composable/getUser';
import { timeStamp } from '../firebase/Config';
import useCollection from '@/Composable/useCollection';
export default {
        setup(){
            let message=ref("");
            let {user}=getUser();
            let {error,addDoc}=useCollection("messages");
            let handlesumit=async()=>{
                let chatting={
                    message:message.value,
                    name:user.value.displayName,
                    created_at:timeStamp()
                }
                await addDoc(chatting);//console.log(chatting);
                message.value="";
            }
            return{message,handlesumit}
        }
}
</script>

<style>
      form {
        margin: 10px;
      }
      textarea {
        width: 100%;
        max-width: 100%;
        margin-bottom: 6px;
        padding: 10px;
        box-sizing: border-box;
        border: 0;
        border-radius: 20px;
        font-family: inherit;
        outline: none;
      }
</style>
