import {
  Avatar,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
} from '@mui/material'
//import { style } from '@mui/system'
import { useState } from 'react'
//import HeroModal from 'components/heroModal/heroModal'
import HeroDialog, { HeroInfo } from 'components/heroDialog/heroDialog'

interface ListButtonProp {
  name: string
  description: string
  score: number
  image: string
  onSave: (result: HeroInfo) => void
}

function ListButton({
  name,
  description,
  score,
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
        <ListItemAvatar>
          <Avatar alt={name} src={image} />
        </ListItemAvatar>
        <ListItemText primary={name} />
      </ListItemButton>{' '}
      <HeroDialog
        open={open}
        onClose={handleClose}
        name={name}
        description={description}
        score={score}
        onSubmit={handleSubmit}
      ></HeroDialog>
    </>
  )
}
export default ListButton
