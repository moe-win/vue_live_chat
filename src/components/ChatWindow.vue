<template>
    <div class="chat-window">
        <div class="messages" ref="messageBox">
            <div class="single" v-for="message in formettedmessages" :key="message.id">
                <span class="created-at">{{message.created_at}}</span>
                <span class="name">{{message.name}}</span>
                <span class="message">{{message.message}}</span>
            </div>
        </div>
    </div>
</template>

<script>
import { db } from '@/firebase/Config'
import { ref } from '@vue/reactivity'
import { computed, onUpdated } from '@vue/runtime-core';
import {formatDistanceToNow} from 'date-fns'

export default {
    setup(){
        let messages=ref([]);
        let messageBox=ref(null);
        // scolling auto features
        onUpdated(()=>{
          messageBox.value.scrollTop=messageBox.value.scrollHeight
        })
        let formettedmessages=computed(()=>{
          return messages.value.map((msg)=>{
                let formatTime=formatDistanceToNow(msg.created_at.toDate())
                return {...msg,created_at:formatTime}
          })
        })
       db.collection("messages").orderBy("created_at").onSnapshot((snap)=>{
            // console.log(snap.docs);
            let results=[];
            snap.docs.forEach((doc)=>{
                // console.log(doc.data);
                let document={...doc.data(),id:doc.id};
                // console.log(document);
                // if(doc.data().created_at){
                //   results.push(document);
                // }
                doc.data().created_at &&  results.push(document);
            })
            // console.log(results);
            messages.value=results;
       })
       return{messages,formettedmessages,messageBox}
    }
}
</script>
 
<style>
     .chat-window {
        background: #fafafa;
        padding: 30px 20px;
      }
      .single {
        margin: 18px 0;
      }
      .created-at {
        display: block;
        color: #999;
        font-size: 12px;
        margin-bottom: 4px;
      }
      .name {
        font-weight: bold;
        margin-right: 6px;
      }
      .messages {
        max-height: 400px;
        overflow: auto;
      }
</style>