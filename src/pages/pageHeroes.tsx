import { List, Grid } from '@mui/material'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import ListButton from 'components/listButton/listButton'

type HeroChangeHandler = (hero: HeroInfo) => void
interface PageHeroesProps {
  heroes: HeroInfo[]
  onHeroChange: HeroChangeHandler
}

function PageHeroes({ heroes, onHeroChange }: PageHeroesProps) {
  // const handleSave = (result: HeroInfo) => {
  //   onHeroChange(result)
  // }

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
        marginLeft={18}
        //justifyContent="center"
        style={{ minHeight: '90vh' }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {/* {heroes.map((value) => ( */}

          {/* // .sort((a, b) => (a.score > b.score ? -1 : 1)) */}
          {heroes
            .sort((a, b) => (a.score > b.score ? -1 : 1))
            .map((value, i) => (
              <ListButton
                key={value.id}
                name={value.name}
                description={value.description}
                image={value.icon}
                score={value.score}
                id={value.id}
                onSave={handleSave}
              ></ListButton>
            ))}
        </List>
      </Grid>
    </div>
  )
}

export default PageHeroes
