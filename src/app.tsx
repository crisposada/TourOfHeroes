import { AppBar, Button, Toolbar, Container, Typography, Box, Grid} from "@mui/material"
//componente de react tipo funcion
function App(){
    return (
        <div className="app">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar>
                <Container>
                    <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        Tour of Heroes
                    </Typography>
                    <div>
                    <Button color="inherit">Ranking</Button>
                    <Button color="inherit">Heroes</Button>
                    </div>
                    </Toolbar>
                </Container>
                </AppBar>
            </Box>
            <div>
            <Grid container 
                spacing={3}
                direction="row"
                alignItems="center"
                justifyContent="center"
                style={{ minHeight: '50vh' }}>
                <Grid item>
                    <Box
                        sx={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    </Box>
                </Grid>
                <Grid item>
                    <Box
                        sx={{
                            width: 200,
                            height: 200,
                            backgroundColor: 'primary.dark',
                            '&:hover': {
                            backgroundColor: 'primary.main',
                            opacity: [0.9, 0.8, 0.7],
                            }
                        }}>
                    </Box>
                </Grid>
            </Grid>
            </div>

        </div>
    )
}
//material UI add to package json
export default App

//Deberes
//Angular Heroes
//en miu -> get started -> componentes
//ver que componentes necesito
//layout
//Header en vez de h1 (le llamaron appBar)


//
//<Button variant="contained">Ranking</Button>
//<Button variant="contained">Heroes</Button>