import { ICreature } from '../../interfaces/interfaces'
import {abilitiesByFamily,abilitiesBySpecies} from '../../abilities'
import Creature from './Creature'

interface CreatureContainerProps {
  creature: ICreature
}

const CreatureContainer = ({creature}: CreatureContainerProps) => {
  const {id,name,species,family,hp,location,captured} = creature
  // Using object composition instead of class inheritance, following Reacts advice
  const familyAbilities = abilitiesByFamily[family]
  const speciesAbilities = abilitiesBySpecies[species]
  return (
    <Creature  />
  )
}

export default CreatureContainer