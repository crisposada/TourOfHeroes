import {
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import HeroExtend from 'components/heroExtend/heroExtend'
import { useState } from 'react'
import supermanIcon from 'assets/superman.jpg'
import HeroList from 'components/heroList/heroList'
type HeroChangeHandler = (hero: HeroInfo) => void

const myName = 'a'
const myId = 1
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
  const [show, setShow] = useState(false)
  const handleShow = (result: boolean) => {
    setShow(result)
  }

  const [heroName, setHeroName] = useState<string>(myName)
  const [heroId, setHeroId] = useState<number>(myId)

  const handleHover: (result: HeroInfo) => void = (result) => {
    if (result.name !== undefined) setHeroName(result.name)
    if (result.id !== undefined) setHeroId(result.id)
  }

  const score = 'Score'
  const name = 'Name'
  const id = 'Id'
  const sortScoreFn = (a: HeroInfo, b: HeroInfo) => (a.score > b.score ? -1 : 1)

  const sortNameFn = (a: HeroInfo, b: HeroInfo) => a.name.localeCompare(b.name)
  const sortNameId = (a: HeroInfo, b: HeroInfo) => (a.id < b.id ? -1 : 1)

  const [sortFn, setSortFn] = useState<(a: HeroInfo, b: HeroInfo) => number>(
    () => sortScoreFn
  )

  const handleChange = (event: SelectChangeEvent) => {
    if (event.target.value === name) setSortFn(() => sortNameFn)
    else if (event.target.value === score) setSortFn(() => sortScoreFn)
    else setSortFn(() => sortNameId)
  }
  return (
    <div>
      <Grid
        onMouseLeave={() => setShow(false)}
        container
        spacing={3}
        direction="row"
        alignItems="center"
        marginLeft={18}
        marginTop={2}
        //justifyContent="left"
        style={{ minHeight: '90vh' }}
      >
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
            <Select
              sx={{ width: 300 }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Sort by"
              onChange={handleChange}
            >
              <MenuItem value={score}>{score}</MenuItem>
              <MenuItem value={name}>{name}</MenuItem>
              <MenuItem value={id}>{id}</MenuItem>
            </Select>
          </FormControl>
          <HeroList
            sortFn={sortFn}
            heroes={heroes}
            handleSave={handleSave}
            handleShow={handleShow}
            handleHover={handleHover}
          ></HeroList>
        </Grid>
        <Grid item alignItems="center">
          <HeroExtend
            show={show}
            name={heroName}
            id={heroId}
            icon={supermanIcon}
          ></HeroExtend>
        </Grid>
      </Grid>
    </div>
  )
}

export default PageHeroes
