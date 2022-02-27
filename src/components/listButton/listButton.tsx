import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Rating,
  Typography,
} from '@mui/material'
//import { style } from '@mui/system'
import { useState } from 'react'
//import HeroModal from 'components/heroModal/heroModal'
import HeroDialog, { HeroInfo } from 'components/heroDialog/heroDialog'
import { Star, StarBorder, StarRate, StarsRounded } from '@mui/icons-material'

interface ListButtonProp {
  name: string
  description: string
  score: number
  image: string
  id: number
  onSave: (result: HeroInfo) => void
}

function ListButton({
  name,
  description,
  score,
  id,
  image,
  onSave,
}: ListButtonProp) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit: (result: HeroInfo) => void = (result) => {
    onSave(result)
  }

  return (
    <>
      <ListItemButton
        onClick={() => {
          //alert(value.name)
          setOpen(true)
        }}
      >
        <ListItemIcon>
          <Star style={{ color: '#faaf00' }} />
          <Typography>{score}</Typography>
        </ListItemIcon>
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>

        <ListItemText primary={name} />
      </ListItemButton>

      <HeroDialog
        open={open}
        onClose={handleClose}
        name={name}
        description={description}
        score={score}
        id={id}
        icon={image}
        onSubmit={handleSubmit}
      ></HeroDialog>
    </>
  )
}
export default ListButton
