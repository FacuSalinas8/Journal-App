
// Crea una instancia del objeto del proveedor de Google
import { createUserWithEmailAndPassword, 
    GoogleAuthProvider,
    signInWithEmailAndPassword,
    signInWithPopup, 
    updateProfile,

} from "firebase/auth";
import { FirebaseAuth } from "./config";

const googleProvider = new GoogleAuthProvider();

// Creo una funcion que me sirva para autenticarme con Google
export const signInWithGoogle = async () => {

    try {
        
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const credentials = GoogleAuthProvider.credentialFromResult( result );
        // console.log(credentials);

        const user = result.user;
        const {displayName,email,photoURL,uid} = user;

        return {
            ok:true,
            displayName,email,photoURL,uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{
            ok:false,
            errorMessage,
        }
    }
}

// Creamos un nuevo proveedor, para registrarnos con usuario y password
export const registerUserWithEmailPassword = async ( {email,password, displayName} ) =>{

    try {
        // Firebase Auth tiene toda la config de la autenticacion
        const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password);
        const {uid,photoURL} = resp.user;
        console.log(resp);
        // TODO: actualizar el displayName en firebase
        await updateProfile(FirebaseAuth.currentUser,{displayName});
        return {
            ok:true,
            displayName,email,photoURL,uid
        }

    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return{
            ok:false,
            errorMessage,
        }
    }
}

export const loginWithEmailPassword = async ({email, password}) =>{
    
    try {
        
        const result = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const user = result.user;
        console.log(user);
        const {displayName,uid,photoURL} = user;


        return {
            ok:true,
            displayName,email,uid,photoURL
        }

    } catch (error) {
        console.log(error);
        const errorMessage = error.message;
        return {
            ok:false,
            errorMessage
        }
    }
}

export const logoutFirebase = async ()=>{
    return await FirebaseAuth.signOut();
}