import {
  List,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  FormControl,
  InputLabel,
} from '@mui/material'
import { HeroInfo } from 'components/heroDialog/heroDialog'
import ListButton from 'components/listButton/listButton'
import { useState } from 'react'

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
        container
        spacing={3}
        direction="column"
        alignItems="top"
        marginLeft={18}
        marginTop={10}
        //justifyContent="left"
        style={{ minHeight: '100vh' }}
      >
        <Grid item>
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
          {/* <Autocomplete
              onClick={handleSort}
              disablePortal
              id="combo-box-demo"
              sx={{ width: 300 }}
              options={sorting}
              renderInput={(params) => (
                <TextField {...params} label="Sort by" />
              )}
            /> */}
        </Grid>
        <Grid item>
          <List
            sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
          >
            {/* {heroes.map((value) => ( */}

            {/* // .sort((a, b) => (a.score > b.score ? -1 : 1)) */}
            {heroes.sort(sortFn).map((value, i) => (
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
      </Grid>
    </div>
  )
}

export default PageHeroes
