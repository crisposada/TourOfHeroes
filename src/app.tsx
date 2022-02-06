import {
  AppBar,
  Button,
  Toolbar,
  Container,
  Typography,
  Box,
  Grid,
} from '@mui/material'
//componente de react tipo funcion
import batmanIcon from 'assets/BatmanComic2.jpg'
import thor from './assets/ThorComic.jpg'
import superman from './assets/supermanComic2.jpg'
import america from './assets/captainAmericaComic2.jpg'
import HeroCard from 'components/heroCard/heroCard'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import { useState } from 'react'

function App() {
  const [batman, setBatman] = useState<HeroInfo>({
    name: 'Batman',
    description: 'Strong sense of justice',
    score: 5,
  })
  const handleSaveBatman: (result: HeroInfo) => void = (result) => {
    setBatman(result)
  }

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
        <Grid
          container
          spacing={3}
          direction="row"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: '80vh' }}
        >
          <Grid item>
            <HeroCard
              name={batman.name}
              description={batman.description}
              image={batmanIcon}
              score={batman.score}
              onSave={handleSaveBatman} //Save new Name in Card
            ></HeroCard>
          </Grid>
          <Grid item>
            <HeroCard
              name="Thor"
              description="A hammer-wielding god"
              image={thor}
              score={4}
              onSave={() => {}}
            ></HeroCard>
          </Grid>
          <Grid item>
            <HeroCard
              name="Superman"
              description="Something"
              image={superman}
              score={2}
              onSave={() => {}}
            ></HeroCard>
          </Grid>
          <Grid item>
            <HeroCard
              name="Captain America"
              description="Fights for American ideals"
              image={america}
              score={2}
              onSave={() => {}}
            ></HeroCard>
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
