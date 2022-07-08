import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { LoginOutlined, MenuOutlined } from "@mui/icons-material"
import { useDispatch } from "react-redux";
import { startLogout } from "../../store/auth/thunks";

export const NavBar = ({drawerWidth=240}) => {
    
    const dispatch = useDispatch();

    const onLogout = () => {
        console.log('logout');
        dispatch(startLogout());
    }

    return (
        <AppBar position="fixed" 
            sx={{
                width: {sm:`calc(100% - ${drawerWidth}px)`},
                ml:{sm:`${drawerWidth}px`}
            }}>
            <Toolbar>
                <IconButton
                    color='inherit' edge="start"
                    sx={{
                        mr:2,display:{sm:'none'}
                    }}>
                    <MenuOutlined/>
                </IconButton>

                <Grid container direction="row" justifyContent='space-between' alignItems='center'>
                    <Typography variant="h6" noWrap component='div'>Journal App</Typography>

                    <IconButton
                        color='inherit'
                        onClick={onLogout}>
                        <LoginOutlined/>
                    </IconButton>

                </Grid>

            </Toolbar>
        </AppBar>
    )
}