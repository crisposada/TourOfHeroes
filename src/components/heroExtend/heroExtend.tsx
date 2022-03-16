import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'
import {
  Box,
  Button,
  MobileStepper,
  Paper,
  Typography,
  useTheme,
} from '@mui/material'
import { useState } from 'react'

interface HeroExtendProps {
  show: boolean
  name: string
  icon: string
}
interface ResultProps {
  images: any
  name: string
}
function HeroExtend({ show, name, icon }: HeroExtendProps) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const images = [
    {
      label: { name },
      imgPath: { icon },
    },
  ]
  return (
    <div>{show ? <Results images={images} name={name}></Results> : null}</div>
  )
}

function Results({ images, name }: ResultProps) {
  const theme = useTheme()
  return (
    <div id="results" className="search-results">
      <Box sx={{ maxWidth: 400, flexGrow: 1, border: 1 }}>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            height: 50,
            pl: 2,
            bgcolor: '#4A5D68',
          }}
        >
          <Typography
            align="center"
            margin={4}
            variant="h5"
            component="div"
            color={'white'}
          >
            {name}
          </Typography>
        </Paper>
      </Box>
    </div>
  )
}

export default HeroExtend

//<Button>{show ? 'Unmount children' : ''}</Button>
