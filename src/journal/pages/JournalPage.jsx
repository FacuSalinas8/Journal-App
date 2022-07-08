// import { Typography } from '@mui/material'
import { Button, IconButton } from '@mui/material'
import React from 'react'
import { JournalLayout } from '../layout/JournalLayout'
import { NoteView, NothingSelectedView } from '../views'
import AddIcon from '@mui/icons-material/Add';

export const JournalPage = () => {
    return (
        <JournalLayout >
            {/* <Typography>Sunt duis aute enim et adipisicing pariatur duis eiusmodDuis incididunt esse anim fugiat commodo tempor amet quis duis dolor. Tempor Lorem do ex eu elit sint mollit amet enim duis veniam sit dolor. Excepteur qui dolore tempor deserunt eiusmod quis dolore officia aliqua est incididunt sunt magna voluptate. Dolor ex dolor labore proident sit velit. Do minim incididunt commodo deserunt do nisi voluptate incididunt veniam occaecat aliquip consequat labore..</Typography> */}

            <NothingSelectedView/>
            {/* <NoteView/> */}

            <IconButton
                size='large'
                sx={{color:'white', backgroundColor:'error.main',
                position:'fixed',right:50,bottom:50,
                ':hover':{backgroundColor:'error.main',opacity:0.9}
                }}>
                    <AddIcon/>
            </IconButton>
        </JournalLayout>
    )
}
