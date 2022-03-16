import {
  Avatar,
  Button,
  ListItemAvatar,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from '@mui/material'
//import { style } from '@mui/system'
import { useState } from 'react'
//import HeroModal from 'components/heroModal/heroModal'
import HeroDialog, { HeroInfo } from 'components/heroDialog/heroDialog'
import { Star } from '@mui/icons-material'
import HeroExtend from 'components/heroExtend/heroExtend'

interface HeroShow {
  name: string
  description: string
  score: number
  id: number
  icon: string
  show: boolean
}

interface ListButtonProp {
  name: string
  description: string
  score: number
  image: string
  id: number
  onSave: (result: HeroInfo) => void
  onShow: (result: boolean) => void
  onHover: (result: HeroInfo) => void
}

function ListButton({
  name,
  description,
  score,
  id,
  image,
  onSave,
  onShow,
  onHover,
}: ListButtonProp) {
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false)
  }

  const handleSubmit: (result: HeroInfo) => void = (result) => {
    onSave(result)
  }
  //const [show, setShow] = useState(false)
  const handleShow = () => {
    //setShow(true)
    onShow(true)
    if (
      name !== null &&
      description !== null &&
      score !== null &&
      image !== null &&
      id !== null
    )
      onHover({
        name: name,
        description: description,
        score: score,
        id: id,
        icon: image,
      })
  }

  const handleNotShow = () => {
    //setShow(false)
    onShow(false)
  }
  return (
    <div>
      <ListItemButton
        onMouseOver={() => handleShow()}
        onMouseLeave={() => handleNotShow()}
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
          <Avatar sx={{ width: 45, height: 45 }} alt={name} src={image} />
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
    </div>
  )
}
export default ListButton
//
//<HeroExtend show={show} name={name} icon={image}></HeroExtend>
