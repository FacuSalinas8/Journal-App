import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FirebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth/authSlice";

export const useCheckAuth = () => {
    const { status }= useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        
        onAuthStateChanged(FirebaseAuth, async (user) => {
            // console.log(user);
            if(!user) return dispatch(logout());
            // Desestructuro por el error "A non-serializable value" 
            const {displayName, uid, email, photoURL} = user;

            dispatch(login({displayName, uid, email, photoURL}));
        })

    },[]);

    return {status}
}
