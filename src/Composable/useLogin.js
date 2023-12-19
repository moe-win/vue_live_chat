import { ref } from "vue";
import { auth } from "../firebase/Config"
let error=ref(null);
let signin=async(email,password)=>{
    try{
        let res=await auth.signInWithEmailAndPassword(email,password);
       if(!res){
            throw new Error("Can not login");
       }
       return res;
       }catch(err){
            error.value=err.message;
            console.log(error.value);
       }
}
let useLogin=()=>{
    return{error,signin};
}
export default useLogin;