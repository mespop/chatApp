import {auth,provider} from "../firebase-config.js";
import { signInWithPopup } from "firebase/auth"; 


import Cookies from "universal-cookie";
const cookies = new Cookies()



export const Auth=(props)=>{
    const {setIsAuth} = props;

    const SignInWIthGoogle=async ()=>{
        try{

            const result=await signInWithPopup(auth,provider);
            cookies.set("auth-token", result.user.refreshToken);
        } catch(err){
            console.error(err);
        }
        
    };

        return(
        <div>
            <p>Sign In with google Account</p>
            <button onClick={SignInWIthGoogle}>Sign In With Google</button>
        </div>
    )
}