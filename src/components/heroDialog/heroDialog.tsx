import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Rating,
  TextField,
  Typography,
} from '@mui/material'
import Button from '@mui/material/Button'
import { ChangeEventHandler, MouseEventHandler, useState } from 'react'

interface HeroInfo {
  name: string
  description: string
  score: number
}

interface HeroDialogProps {
  name: string
  description: string
  score: number
  open: boolean
  onClose: () => void
  onSubmit: (result: HeroInfo) => void
}

function HeroDialog({
  name,
  description,
  score,
  open,
  onClose,
  onSubmit,
}: HeroDialogProps) {
  const [internalScore, setInternalScore] = useState<number | null>(score)
  const [internalName, setInternalName] = useState<string | null>(name)
  const [internalDescription, setInternalDescription] = useState<string | null>(
    description
  )

  const handleNameChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInternalName(event.target.value)
  }
  const handleDescriptionChange: ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (event) => {
    setInternalDescription(event.target.value)
  }

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (value) => {
    if (
      internalName !== null &&
      internalDescription != null &&
      internalScore != null
    )
      onSubmit({
        name: internalName,
        description: internalDescription,
        score: internalScore,
      })
    onClose()
  }

  const handleClose: MouseEventHandler<HTMLButtonElement> = (value) => {
    onClose()
    setInternalName(name)
    setInternalDescription(description)
    setInternalScore(score)
  }
  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Hero Info</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Grid
              container
              paddingTop={3}
              spacing={3}
              direction="column"
              //alignItems="center"
              justifyContent="center"
            >
              <Grid item>
                <TextField
                  required
                  id="outlined-required"
                  label="Name"
                  //value={name}
                  value={internalName}
                  onChange={handleNameChange}
                />
              </Grid>
              <Grid item>
                <TextField
                  required
                  id="outlined-required"
                  label="Description"
                  value={internalDescription}
                  onChange={handleDescriptionChange}
                />
              </Grid>
              <Grid item>
                <Typography component="legend">Score</Typography>
                <Rating
                  name="simple-controlled"
                  value={internalScore}
                  onChange={(event, newValue) => {
                    setInternalScore(newValue)
                  }}
                />
              </Grid>
            </Grid>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default HeroDialog
export type { HeroInfo }

//Antes <Button onClick={handleClose}>Cancel</Button>

//INPUT
//estado para almacenar el valor
//evento de onnChange para actualizar el valor
//

//Deberes
//guardar todooo
//Todos los heroes
//
//explicar todito

//Pregunto

//:q
// i insertar

//dd borrar
//o -> añadir linea + insert
//esc para salir
