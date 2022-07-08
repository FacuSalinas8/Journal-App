import { CircularProgress, Grid } from '@mui/material'
import React from 'react'

export const CheckingAuthCircular = () => {
    return (
        <Grid container 
            spacing={0} 
            direction="column" 
            alignItems="center"
            justifyContent="center"
            // className="backgroundColor"
//La mayor parte de los componentes de material vienen con un sx(seria como styles)
            sx={{minHeight:'100vh',backgroundColor:'primary.main',padding:2}}>
            
            <Grid item>
                <CircularProgress color="warning"/>
            </Grid>
        </Grid>
    )
}
