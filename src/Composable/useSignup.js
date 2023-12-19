
import { auth } from '@/firebase/Config';
import { ref } from 'vue';
let error=ref(null);
let createAccount=async(email,password,displayName)=>{
    try{
        let res=await auth.createUserWithEmailAndPassword(email,password)
            if(!res){
              throw new Error("Can not Reach and An error");
            }
            res.user.updateProfile({displayName})
            return res;
        }catch(err){
            error.value=err.message;
            console.log(error.value);
        }
}
let useSignup=()=>{

return{error,createAccount}
}
export default useSignup;