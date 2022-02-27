import { AppBar, Button, Toolbar, Container, Typography } from '@mui/material'
//componente de react tipo funcion

import PageRanking from 'pages/pageRanking'
import PageHeroes from 'pages/pageHeroes'
import { useState } from 'react'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './app.css'
import batmanIcon from './assets/batman.jpg'
import thorIcon from './assets/thor.jpg'
import supermanIcon from './assets/superman.jpg'
import americaIcon from './assets/captainAmerica.jpg'
import antManIcon from './assets/ant-man.jpeg'
import blackWidowIcon from './assets/black-widow.jpeg'
import spidermanIcon from './assets/spiderman.jpg'
import doctorStrangeIcon from './assets/dr-strange.jpg'
const data: HeroInfo[] = [
  {
    id: 0,
    name: 'Batman',
    description: 'Strong sense of justice',
    score: 5,
    icon: batmanIcon,
  },
  {
    id: 1,
    name: 'Thor',
    description: 'A hammer-wielding god',
    score: 4,
    icon: thorIcon,
  },
  {
    id: 2,
    name: 'Superman',
    description: 'A strong alien with laser eyes',
    score: 2,
    icon: supermanIcon,
  },
  {
    id: 3,
    name: 'Captain America',
    description: 'Fights for American ideals',
    score: 2,
    icon: americaIcon,
  },
  {
    id: 4,
    name: 'Ant-Man',
    description: 'He talks to insects',
    score: 1,
    icon: antManIcon,
  },
  {
    id: 5,
    name: 'Black widow',
    description: 'A Russian agent trained as a spy',
    score: 2,
    icon: blackWidowIcon,
  },
  {
    id: 6,
    name: 'Spiderman',
    description: 'Bitten by a radioactive spider.',
    score: 2,
    icon: spidermanIcon,
  },
  {
    id: 7,
    name: 'Doctor strange',
    description: 'A talented neurosurgeon Doctor ',
    score: 5,
    icon: doctorStrangeIcon,
  },
]

function App() {
  const [heroes, setHeroes] = useState(data)
  const handleSaveHero: (result: HeroInfo) => void = (result) => {
    let nextHeroes = [...heroes]
    let heroToModify = nextHeroes.find((hero) => hero.id === result.id)
    if (heroToModify !== undefined) {
      heroToModify.name = result.name
      heroToModify.description = result.description
      heroToModify.score = result.score
    }
    setHeroes(nextHeroes)
  }

  return (
    <Router>
      <div className="app">
        {/* <Box sx={{ flexGrow: 1 }}> */}
        <AppBar style={{ background: '#94A077' }}>
          <Container>
            <Toolbar>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Tour of Heroes
              </Typography>
              <div>
                <Link to="/page-ranking">
                  <Button color="inherit">Ranking</Button>
                </Link>
                <Link to="/page-heroes">
                  <Button color="inherit">Heroes</Button>
                </Link>
              </div>
            </Toolbar>
          </Container>
        </AppBar>
        <Switch>
          <Route path="/page-ranking">
            <PageRanking heroes={heroes} onHeroChange={handleSaveHero} />
          </Route>
          <Route path="/page-heroes">
            <PageHeroes heroes={heroes} onHeroChange={handleSaveHero} />
          </Route>
          <Route path="/">
            <PageRanking heroes={heroes} onHeroChange={handleSaveHero} />
            {/*defalut route*/}
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
//material UI add to package json
export default App

//DEBERES 1
//Angular Heroes
//en miu -> get started -> componentes
//ver que componentes necesito
//layout
//Header en vez de h1 (le llamaron appBar)

//
//<Button variant="contained">Ranking</Button>
//<Button variant="contained">Heroes</Button>

//DEBERES TourOfHeroes 2
/*
Mover cosas de sitio en react
carpeta pages en src
pageA.tsx
componente react
function PAgeB(){
    return<div> PageB</div>


}
En app va a ir

Todo menos la cabecera
tiene que ir a cada pagina

y un render condicional
que cargue una pagina u otra

<div>cabecerea</div>
{page==='pageA' ?  <PageA></PageA> : <PageB></PageB>}

con los botones cambiamos el estado
 de useState

crear estado en function App(){
    const[page, setPage] = useState('pageA') //O PageB
}

Hacer la otra pagina reautilizando componentes
*/
