import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  Box,
  Modal,
} from '@mui/material'
import { style } from '@mui/system'
import { useState } from 'react'
import HeroModal from 'components/heroModal/heroModal'

interface HeroCardProps {
  name: string
  description: string
  score: number
  image: string
}

function HeroCard({ name, description, score, image }: HeroCardProps) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const openDetails = () => {
    setOpen(true)
  }
  return (
    <>
      <Card
        onClick={openDetails}
        sx={{ maxWidth: 245, height: 350 }}
        style={{ backgroundColor: '#4A5D68' }}
      >
        <CardMedia component="img" height="200" image={image} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
        <Typography align="center">
          <Rating name="read-only" value={score} readOnly />
        </Typography>
      </Card>
      <HeroModal
        open={open}
        onClose={handleClose}
        name={name}
        description={description}
        score={score}
      ></HeroModal>
    </>
  )
}
export default HeroCard

//Deberes
//Nuevo componente Modal al que llamar varias veces
//formulario ventana con la info del Heroe
//crear repo

/*<Modal
open={open}
onClose={handleClose}
aria-labelledby="modal-modal-title"
aria-describedby="modal-modal-description"
>
<Box>
  <Typography id="modal-modal-title" variant="h6" component="h2">
    Text in a modal
  </Typography>
  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
    Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
  </Typography>
</Box>
</Modal>*/
