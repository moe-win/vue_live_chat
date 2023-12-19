import { ref } from "vue";
import { db } from "@/firebase/Config";
let useCollection=(collection)=>{
    let error=ref('');
    let addDoc=async(doc)=>{
            try{
                await db.collection(collection).add(doc);
            }catch(error){
                console.log(error.message);
                error.value="can not reach url"
            }

    }

        return{error,addDoc}
}
export default useCollection;