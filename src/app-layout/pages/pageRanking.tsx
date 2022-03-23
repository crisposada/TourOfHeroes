import HeroCard from 'components/heroCard/heroCard'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import { Grid } from '@mui/material'

type HeroChangeHandler = (hero: HeroInfo) => void

interface PageRankingProps {
  heroes: HeroInfo[]
  onHeroChange: HeroChangeHandler
}
function PageRanking({ heroes, onHeroChange }: PageRankingProps) {
  const handleSave = (result: HeroInfo) => {
    onHeroChange(result)
  }

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        {/* {heroes.map((value) => ( */}
        {/* {heroes
          .filter((values) => values.score >= 3)
          .map((value) => ( */}
        {heroes
          .sort((a, b) => (a.score > b.score ? -1 : 1))
          .slice(0, 4)
          .filter((values) => values.score >= 2)
          .map((value) => (
            <Grid item>
              <HeroCard
                key={value.id}
                name={value.name}
                description={value.description}
                image={value.icon}
                score={value.score}
                id={value.id}
                onSave={handleSave}
              />
            </Grid>
          ))}
      </Grid>
    </div>
  )
}
export default PageRanking
