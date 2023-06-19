import React, { useState } from "react";
import { ICreature } from "../interfaces/interfaces";
import {abilitiesByFamily,abilitiesBySpecies} from '../abilities'

interface useStartBattleProps {
  creature1: ICreature;
  creature2: ICreature;
}

const useStartBattle = ({ creature1, creature2 }: useStartBattleProps) => {
  const [creature1CurrentHealth, setCreature1CurrentHealth] = useState(
    creature1.hp
  );
  const [creature2CurrentHealth, setCreature2CurrentHealth] = useState(
    creature2.hp
  );

 // get abilities for each creature 
  const creature1FamilyAbilities = abilitiesByFamily[creature1.family]
  const creature1SpeciesAbilities = abilitiesBySpecies[creature1.species]
  const creature2SFamilyAbilities = abilitiesByFamily[creature2.family]
  const creature2SpeciesAbilities = abilitiesBySpecies[creature2.species]

  // handle actions from the Modal UI
  const handleAttack = () => {
    return
  }

  return [creature1CurrentHealth, creature2CurrentHealth, handleAttack]
};

export default useStartBattle;
