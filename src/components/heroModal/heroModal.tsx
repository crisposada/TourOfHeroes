//import { ViewColumn } from '@mui/icons-material'
import { Box, Grid, Modal, Rating, TextField, Typography } from '@mui/material'
interface HeroModalProps {
  name: string
  description: string
  score: number
  open: boolean
  onClose: () => void
}

function HeroModal({
  name,
  description,
  score,
  open,
  onClose,
}: HeroModalProps) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        sx={{
          position: 'absolute',
          border: '2 px solid #000',
          boxShadow: '10px 5px 5px black',
        }}
      >
        <Box
          sx={{
            width: 500,
            height: 420,
            backgroundColor: 'white',
            textAlign: 'center',
          }}
        >
          <Grid
            container
            paddingTop={5}
            spacing={3}
            direction="column"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Name"
                defaultValue={name}
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id="outlined-required"
                label="Description"
                defaultValue={description}
              />
            </Grid>
            <Grid item>
              <Typography component="legend">Score</Typography>
              <Rating
                name="simple-controlled"
                value={score}
                //onChange={(event, newValue) => {
                //   setValue(newValue)
                //  }}
              />
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  )
}

export default HeroModal

/*
Typography
                align="center"
                id="modal-modal-title"
                variant="h6"
                component="h2"
              >
                {name}
              </Typography>*/
