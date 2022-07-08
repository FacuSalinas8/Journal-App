import { Grid, Typography} from "@mui/material";


export const AuthLayout = ({children,title=''}) => {
    return (
        <Grid container 
            spacing={0} 
            direction="column" 
            alignItems="center"
            justifyContent="center"
            // className="backgroundColor"
//La mayor parte de los componentes de material vienen con un sx(seria como styles)
            sx={{minHeight:'100vh',backgroundColor:'primary.main',padding:2}}>
            
            <Grid item
                className="box-shadow  animate__animated animate__fadeInLeftBig animate__faster"
                //xs es el tamaño de la caja en diferentes pantallas
                xs={3}
                sx={{backgroundColor:'white',padding:4, borderRadius:2, width:{sm:450}}}>
                <Typography variant="h5" sx={{mb:1}}>
                    {title}
                </Typography>

                {/* Children */}
                {children}
            </Grid>
        </Grid>
    )
}
