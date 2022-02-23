import { List, Grid } from '@mui/material'
import batmanIcon from '../assets/BatmanComic2.jpg'
import thorIcon from '../assets/ThorComic.jpg'
import supermanIcon from '../assets/supermanComic2.jpg'
import americaIcon from '../assets/captainAmericaComic2.jpg'
import antManIcon from '../assets/ant-man.jpeg'
import blackWidowIcon from '../assets/black-widow.jpeg'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import ListButton from 'components/listButton/listButton'
interface PageHeroesProps {
  batman: HeroInfo
  thor: HeroInfo
  superman: HeroInfo
  captainAmerica: HeroInfo
  hero: HeroInfo
  onSave: (result: HeroInfo) => void
}

function PageHeroes({
  batman,
  thor,
  superman,
  captainAmerica,
  hero,
  onSave,
}: PageHeroesProps) {
  let data = [
    {
      id: 0,
      name: batman.name,
      description: batman.description,
      score: batman.score,
      icon: batmanIcon,
    },
    {
      id: 1,
      name: thor.name,
      description: thor.description,
      score: thor.score,
      icon: thorIcon,
    },
    {
      id: 2,
      name: superman.name,
      description: superman.description,
      score: superman.score,
      icon: supermanIcon,
    },
    {
      id: 3,
      name: captainAmerica.name,
      description: captainAmerica.description,
      score: captainAmerica.score,
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
  ]

  return (
    <div>
      <Grid
        container
        spacing={3}
        direction="row"
        alignItems="center"
        marginLeft={18}
        //justifyContent="center"
        style={{ minHeight: '80vh' }}
      >
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          {data.map((value) => (
            <ListButton
              key={value.name}
              name={value.name}
              description={value.description}
              image={value.icon}
              score={value.score}
              onSave={onSave}
            ></ListButton>
            /* <HeroCard
              name={value.name}
              description={value.description}
              image={value.icon}
              score={value.score}
              onSave={onSave}
            ></HeroCard> */
            /* <ListItemButton
              key={value.name}
              onClick={() => {
                //alert(value.name)
                setItemHero(value.name, value.description, value.score)

                //openDetails()
                openDetails(value.name, value.description, value.score)
              }}
            >
              <ListItemAvatar>
                <Avatar alt={value.name} src={value.src} />
              </ListItemAvatar>
              <ListItemText primary={value.name} />
            </ListItemButton> */
          ))}
        </List>
      </Grid>
    </div>
  )
}

export default PageHeroes
