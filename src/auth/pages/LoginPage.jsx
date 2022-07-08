import {Alert, Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import LoginIcon from '@mui/icons-material/Login';
import { Link as RouterLink } from "react-router-dom";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks/useForm"; 
import { useDispatch, useSelector } from "react-redux";
import {  startGoogleSignIn, startLoginWithEmailPassword } from "../../store/auth/thunks";
import { useMemo } from "react";

export const LoginPage = () => {

    const {status,errorMessage} = useSelector((state) => state.auth )
    const dispatch = useDispatch();

    const {email, password,onInputChange}= useForm({
        email:'',
        password:''
    });
    // console.log({status});

    // useMemo me regresa un valor booleando y deshabilita los buttons si está 'checking'
    const isAuthenticating = useMemo(() => status==='checking', [status])

    const onSubmit = (e)=>{
        e.preventDefault();
        if(!email.trim()){
            console.log('email está vacio'); 
            return
        }
        if(!password.trim()){
            console.log('password está vacio');
            return
        }

        // Note: mandar desestructurando
        dispatch(startLoginWithEmailPassword({email,password}))
    }

    const onGoogleSignIn = ()=>{
        console.log('Google Sign In');
        dispatch(startGoogleSignIn());
    }

return (
    <AuthLayout title="Login">
            <form onSubmit={onSubmit}>
                <Grid container >
                    
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label='Email' 
                            type="email" 
                            placeholder="Ingrese email"
                            autoComplete="off"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                            fullWidth/>
                    </Grid>
                    <Grid item xs={12} sx={{mt:2}}>
                        <TextField 
                            label='Password' 
                            type="password" 
                            placeholder="Ingrese password"
                            name="password"
                            value={password}
                            onChange={onInputChange}
                            fullWidth/>
                    </Grid>

                    <Grid item 
                        xs={12} sx={{mt:2}}
                        // si no hay error entonces none, si hay error entonces se muestra
                        display= {!!errorMessage ? '' : 'none'} >
                        <Alert severity="error">{errorMessage}</Alert>
                    </Grid>

                    <Grid container
                        spacing={2}
                        sx={{mb:2, mt:1}}>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained" 
                                type="submit" 
                                fullWidth>
                                <LoginIcon/>
                                <Typography sx={{ml:1}}>Login</Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Button
                                disabled={isAuthenticating}
                                variant="contained" 
                                onClick={onGoogleSignIn}
                                fullWidth>
                                <Google/>
                                <Typography sx={{ml:1}}>Google</Typography>
                            </Button>
                        </Grid>
                    </Grid>

                    <Grid container
                        direction="row"
                        justifyContent="end">
                            <Link component={RouterLink} 
                                color="primary.main" 
                                to="/auth/register" >
                                Crear cuenta
                            </Link>
                    </Grid>

                </Grid>
            </form>
    </AuthLayout>
)
}
