import { AppBar, Button, Toolbar, Container, Typography, Box, Grid, Card, CardMedia, CardContent, Rating} from "@mui/material"
//componente de react tipo funcion
import batman from './assets/BatmanComic2.jpg'
import thor from './assets/ThorComic.jpg'
import superman from './assets/supermanComic2.jpg'
import america from './assets/captainAmericaComic2.jpg'
function App(){
    return (
        <div className="app">
            <Box sx={{ flexGrow: 1 }}>
                <AppBar style={{ background: '#94A077' }}>
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
                style={{ minHeight: '80vh' }}>
                <Grid item>
                    <Card sx={{ maxWidth: 245 , height:350}} style={{backgroundColor: "#4A5D68"}}>
                        <CardMedia
                            component="img"
                            height="200"
                            //image='https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg'
                            image={batman}
                            alt="Batman"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Batman
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Strong sense of justice
                            </Typography>
                        </CardContent>
                        <Typography align= 'center'>
                                <Rating name="read-only" value={5} readOnly />
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 245, height:350 }} style={{backgroundColor: "#4A5D68"}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={thor}
                            alt="Thor"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Thor
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            A hammer-wielding god
                            </Typography>
                        </CardContent>
                        <Typography align= 'center'>
                                <Rating name="read-only" value={4} readOnly />
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 245 , height:350}} style={{backgroundColor: "#4A5D68"}}>
                        <CardMedia
                            component="img"
                            height="200"
                            image={superman}
                            alt="Superman"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Superman
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Something
                            </Typography>
                        </CardContent>
                        <Typography align= 'center'>
                                <Rating name="read-only" value={2} readOnly />
                            </Typography>
                        </Card>
                </Grid>
                <Grid item>
                    <Card sx={{ maxWidth: 245 , height:350}} style={{backgroundColor: "#4A5D68"}}>
                        <CardMedia
                            component="img"
                            height="200"
                            //image='https://www.infragistics.com/angular-demos-lob/assets/images/card/media/ny.jpg'
                            image={america}
                            alt="Captain America"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                            Captain America
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                            Fights for American ideals
                            </Typography>
                        </CardContent>
                        <Typography align= 'center'>
                                <Rating name="read-only" value={2} readOnly />
                            </Typography>
                        </Card>
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

//GRID BOXES
/*
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
            </div>/ 
*/