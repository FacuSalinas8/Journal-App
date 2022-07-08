import { StarOutline } from '@mui/icons-material'
import { Grid, Typography } from '@mui/material'

export const NothingSelectedView = () => {
    return (
        <Grid className='animate__animated animate__fadeIn '  
            container 
            spacing={0} 
            direction="column" 
            alignItems="center"
            justifyContent="center"
//La mayor parte de los componentes de material vienen con un sx(seria como styles)
            sx={{minHeight:'calc(100vh - 110px)',backgroundColor:'primary.main',borderRadius:3}}>

                <Grid item xs={12}>
                    <StarOutline sx={{fontSize:60, color:'white'}}/>
                </Grid>
                <Grid item xs={12}>
                    <Typography color='white' >
                        Selecciona o crea una entrada
                    </Typography>
                </Grid>
        </Grid>
    )
}
