import batmanIcon from '../assets/BatmanComic2.jpg'
import thorIcon from '../assets/ThorComic.jpg'
import supermanIcon from '../assets/supermanComic2.jpg'
import americaIcon from '../assets/captainAmericaComic2.jpg'
import HeroCard from 'components/heroCard/heroCard'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import { Grid } from '@mui/material'

interface PageRankingProps {
  batman: HeroInfo
  saveBatman: (result: HeroInfo) => void
  thor: HeroInfo
  saveThor: (result: HeroInfo) => void
  superman: HeroInfo
  saveSuperman: (result: HeroInfo) => void
  captainAmerica: HeroInfo
  saveCaptainAmerica: (result: HeroInfo) => void
}
function PageRanking({
  batman,
  saveBatman,
  thor,
  saveThor,
  superman,
  saveSuperman,
  captainAmerica,
  saveCaptainAmerica,
}: PageRankingProps) {
  return (
    <div>
      {' '}
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
            //onSave={handleSaveBatman} //Save new Name in Card
            onSave={saveBatman} //Save new Name in Card
          ></HeroCard>
        </Grid>
        <Grid item>
          <HeroCard
            name={thor.name}
            description={thor.description}
            image={thorIcon}
            score={thor.score}
            onSave={saveThor}
          ></HeroCard>
        </Grid>
        <Grid item>
          <HeroCard
            name={superman.name}
            description={superman.description}
            image={supermanIcon}
            score={superman.score}
            onSave={saveSuperman}
          ></HeroCard>
        </Grid>
        <Grid item>
          <HeroCard
            name={captainAmerica.name}
            description={captainAmerica.description}
            image={americaIcon}
            score={captainAmerica.score}
            onSave={saveCaptainAmerica}
          ></HeroCard>
        </Grid>
      </Grid>
    </div>
  )
}
export default PageRanking
