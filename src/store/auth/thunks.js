import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice" 


// Aquí van las tareas asincronas
export const checkingAuthentication = ()=>{

    return async (dispatch) => {
        dispatch(checkingCredentials());
    }
}

// Usualmente se comienza con START cuando se trata de una tarea asincrona
export const startGoogleSignIn = ()=>{

    return async (dispatch) => {
        dispatch(checkingCredentials());
        const result= await signInWithGoogle();

        if(!result.ok) return dispatch(logout( result.errorMessage ));

        dispatch(login(result));
    }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName})=>{
    return async (dispatch) => {
        dispatch(checkingCredentials());
        // llamo al provider "registerUserWithEmailPassword"
        const resp = await registerUserWithEmailPassword({email,password,displayName});
        const { errorMessage } = resp;
        
        if(!resp.ok) return dispatch(logout( {errorMessage} ));

        dispatch(login(resp));
    }
}

export const startLoginWithEmailPassword = ({email,password})=>{

    return async (dispatch) =>{
        dispatch(checkingCredentials());
        // Llamo al provider
        const resp = await loginWithEmailPassword({email,password});
        const { errorMessage } = resp;
        console.log('resp desde el thunks',resp);

        if(!resp.ok) return dispatch(logout( {errorMessage} ));

        dispatch(login(resp));
    }
}

export const startLogout = () => {
    return async (dispatch) => {
        await logoutFirebase();

        dispatch(logout({errorMessage:null}));
    }
}