import {useState } from "react";
import { ICollector, ICreature, Location } from "../../interfaces/interfaces";
import Collector from "./Collector";
import { useDataDispatch } from "../../context/dataContext";
import { getNewLocation } from "../../utilityFunctions/mapHelperFunctions";
import { moveSquare } from "../../context/dataActions";

interface CollectorContainerProps {
  collector: ICollector;
}

const CollectorContainer = ({ collector }: CollectorContainerProps) => {
  const [caughtCreatures, setCaughtCreatures] = useState<ICreature[] | []>([]);
  const { id, name, location } = collector;
  const dispatch = useDataDispatch().dispatch;

  const handleClick = (direction: string) => {
    const toLocation: Location = getNewLocation(location, direction);
    dispatch(moveSquare({ id, fromLocation:location, toLocation }));
  };

  return <Collector name={name} handleClick={handleClick} />;
};

export default CollectorContainer;
