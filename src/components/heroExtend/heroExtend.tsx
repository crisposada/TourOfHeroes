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
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import supermanFilm1 from 'assets/superman-film.jpg'
interface HeroExtendProps {
  show: boolean
  name: string
  id: number
  icon: string
}
interface ResultProps {
  images: any
  name: string
  id: number
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const heroFilms = [
  {
    title: '0',
    id: 0,
    imgPath: [
      { img: supermanFilm1 },

      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
      },
      {
        img: 'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '1',
    id: 1,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '2',
    id: 2,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '3',
    id: 3,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '4',
    id: 4,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '5',
    id: 5,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '6',
    id: 6,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '7',
    id: 7,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
  {
    title: '8',
    id: 8,
    imgPath: [
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
      {
        img: 'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
      },
    ],
  },
]

function HeroExtend({ show, name, icon, id }: HeroExtendProps) {
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

  const theme = useTheme()
  const [activeStep, setActiveStep] = useState(0)
  //const maxSteps = heroFilms.length
  const maxSteps = 4

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleStepChange = (step: number) => {
    setActiveStep(step)
  }
  return (
    <div>
      {show ? (
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
                {name} {id}
              </Typography>
            </Paper>
          </Box>
          <Box sx={{ maxWidth: 400, flexGrow: 1 }}>
            <Paper
              square
              elevation={0}
              sx={{
                display: 'flex',
                alignItems: 'center',
                height: 50,
                pl: 2,
              }}
            >
              <Typography>{name}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents //.filter((num) => num.id === {id})
            >
              {heroFilms
                .filter((num) => num.id === id)
                .map((step, index) =>
                  step.imgPath.map((image, i) => (
                    <div key={step.title}>
                      {Math.abs(activeStep - i) <= 2 ? (
                        <Box
                          component="img"
                          sx={{
                            height: 255,
                            display: 'block',
                            maxWidth: 400,
                            overflow: 'hidden',
                            width: '100%',
                          }}
                          src={image.img}
                          alt={name}
                        ></Box>
                      ) : null}
                    </div>
                  ))
                )}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === 'rtl' ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
      ) : null}
    </div>
  )
}

export default HeroExtend

//<Button>{show ? 'Unmount children' : ''}</Button>
//.filter((num) => num.id === num.id)
