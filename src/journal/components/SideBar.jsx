import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"


export const SideBar = ({drawerWidth=240}) => {

    const {status,displayName} = useSelector(state => state.auth);

    return (
        <Box
            component='nav'
            sx={{width:{sm:drawerWidth}, flexShrink:{sm:0}}}>
            <Drawer
            variant="permanent"//puede ser temporary
            open={true}
            sx={{
                display:{xs:'block'},
                '& .MuiDrawer-paper':{boxSizing:'border-box',width:drawerWidth}
            }}>
                <Toolbar>
                    <Typography variant="h6" noWrap component='div'>
                        {/* Facu Salinas */}
                        {displayName}
                    </Typography>
                </Toolbar>
                <Divider/>

                <List>
                    {
                        ['enero','febrero','marzo'].map(text =>(
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <TurnedInNot/>
                                    </ListItemIcon>
                                    <Grid container>
                                        <ListItemText primary={text}/>
                                        <ListItemText secondary={'Laboris tempor aliqua sint officia in do aliqua proident duis amet.'}/>
                                    </Grid>
                                </ListItemButton>
                            </ListItem>
                        ))
                    }
                </List>

            </Drawer>
        </Box>
    )
}
