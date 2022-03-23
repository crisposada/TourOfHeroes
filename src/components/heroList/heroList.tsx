import { List } from '@mui/material'
import { HeroInfo } from 'core/api/heroes'
import HeroListItem from './heroListItem'

interface HeroListProps {
  sortFn: (a: HeroInfo, b: HeroInfo) => number
  heroes: HeroInfo[]
  handleSave: (result: HeroInfo) => void
  handleShow: (result: boolean) => void
  handleHover: (result: HeroInfo) => void
}
function HeroList({
  sortFn,
  heroes,
  handleSave,
  handleShow,
  handleHover,
}: HeroListProps) {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {/* {heroes.map((value) => ( */}

      {/* // .sort((a, b) => (a.score > b.score ? -1 : 1)) */}
      {heroes.sort(sortFn).map((value, i) => (
        <HeroListItem
          key={value.id}
          name={value.name}
          description={value.description}
          image={value.icon}
          score={value.score}
          id={value.id}
          onSave={handleSave}
          onShow={handleShow}
          onHover={handleHover}
        ></HeroListItem>
      ))}
    </List>
  )
}

export default HeroList
