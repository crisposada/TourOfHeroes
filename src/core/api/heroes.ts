import batmanIcon from 'assets/batman.jpg'
import thorIcon from 'assets/thor.jpg'
import supermanIcon from 'assets/superman.jpg'
import americaIcon from 'assets/captainAmerica.jpg'
import antManIcon from 'assets/ant-man.jpeg'
import blackWidowIcon from 'assets/black-widow.jpeg'
import spidermanIcon from 'assets/spiderman.jpg'
import doctorStrangeIcon from 'assets/dr-strange.jpg'
import hulkIcon from 'assets/hulk.jpg'

interface HeroInfo {
  name: string
  description: string
  score: number
  id: number
  icon: string
}
const data: HeroInfo[] = [
  {
    id: 0,
    name: 'Batman',
    description: 'Strong sense of justice',
    score: 5,
    icon: batmanIcon,
  },
  {
    id: 1,
    name: 'Thor',
    description: 'A hammer-wielding god',
    score: 4,
    icon: thorIcon,
  },
  {
    id: 2,
    name: 'Superman',
    description: 'A strong alien with laser eyes',
    score: 2,
    icon: supermanIcon,
  },
  {
    id: 3,
    name: 'Captain America',
    description: 'Fights for American ideals',
    score: 2,
    icon: americaIcon,
  },
  {
    id: 4,
    name: 'Ant-Man',
    description: 'He talks to insects',
    score: 1,
    icon: antManIcon,
  },
  {
    id: 5,
    name: 'Black widow',
    description: 'A Russian agent trained as a spy',
    score: 2,
    icon: blackWidowIcon,
  },
  {
    id: 6,
    name: 'Spiderman',
    description: 'Bitten by a radioactive spider.',
    score: 2,
    icon: spidermanIcon,
  },
  {
    id: 7,
    name: 'Doctor strange',
    description: 'A talented neurosurgeon Doctor ',
    score: 5,
    icon: doctorStrangeIcon,
  },
  {
    id: 8,
    name: 'Hulk',
    description: 'The strongest Avenger ',
    score: 5,
    icon: hulkIcon,
  },
]

export { data }
export type { HeroInfo }
