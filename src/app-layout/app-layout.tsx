import { AppBar, Button, Toolbar, Container, Typography } from '@mui/material'
//componente de react tipo funcion

import PageRanking from 'app-layout/pages/pageRanking'
import PageHeroes from 'app-layout/pages/pageHeroes'
import { useState } from 'react'
import { data, HeroInfo } from 'core/api/heroes'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'

function AppLayout() {
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
export default AppLayout
