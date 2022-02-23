import { AppBar, Button, Toolbar, Container, Typography } from '@mui/material'
//componente de react tipo funcion

import PageRanking from 'pages/pageRanking'
import PageHeroes from 'pages/pageHeroes'
import { useState } from 'react'
import { HeroInfo } from 'components/heroDialog/heroDialog'
function App() {
  const [page, setPage] = useState('pageRanking') //O PageB
  const [batman, setBatman] = useState<HeroInfo>({
    name: 'Batman',
    description: 'Strong sense of justice',
    score: 5,
  })
  const handleSaveBatman: (result: HeroInfo) => void = (result) => {
    setBatman(result)
  }

  const [thor, setThor] = useState<HeroInfo>({
    name: 'Thor',
    description: 'A hammer-wielding god',
    score: 4,
  })

  const handleSaveThor: (result: HeroInfo) => void = (result) => {
    setThor(result)
  }

  const [superman, setSuperman] = useState<HeroInfo>({
    name: 'Superman',
    description: 'A strong alien with laser eyes',
    score: 2,
  })

  const handleSaveSuperman: (result: HeroInfo) => void = (result) => {
    setSuperman(result)
  }
  const [captainAmerica, setCaptainAmerica] = useState<HeroInfo>({
    name: 'Captain America',
    description: 'Fights for American ideals',
    score: 2,
  })

  const handleSaveCaptainAmerica: (result: HeroInfo) => void = (result) => {
    setCaptainAmerica(result)
  }

  const [hero, setHero] = useState<HeroInfo>({
    name: 'Hero name',
    description: 'Hero description',
    score: 2,
  })
  const handleSaveHero: (result: HeroInfo) => void = (result) => {
    setHero(result)
  }

  return (
    <div className="app">
      {/* <Box sx={{ flexGrow: 1 }}> */}
      <AppBar style={{ background: '#94A077' }}>
        <Container>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Tour of Heroes
            </Typography>
            <div>
              <Button
                onClick={() => {
                  setPage('pageRanking')
                }}
                color="inherit"
              >
                Ranking
              </Button>
              <Button
                onClick={() => {
                  setPage('pageHeroes')
                }}
                color="inherit"
              >
                Heroes
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      {/* </Box> */}
      {page === 'pageRanking' ? (
        <PageRanking
          batman={batman}
          saveBatman={handleSaveBatman}
          thor={thor}
          saveThor={handleSaveThor}
          superman={superman}
          saveSuperman={handleSaveSuperman}
          captainAmerica={captainAmerica}
          saveCaptainAmerica={handleSaveCaptainAmerica}
        ></PageRanking> //If else for PageRanking or PageHeroes
      ) : (
        <PageHeroes
          batman={batman}
          thor={thor}
          superman={superman}
          captainAmerica={captainAmerica}
          hero={hero}
          onSave={handleSaveHero}
        ></PageHeroes>
      )}
    </div>
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
