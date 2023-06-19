import styled from "@emotion/styled";
import {
  State,
  MapCell,
  ICollector,
  ICreature,
} from "../../interfaces/interfaces";
import { Paper } from "@mui/material";
import CollectorContainer from "../Collector/CollectorContainer";
import CreatureContainer from "../Creature/CreatureContainer";

interface StyledPaperProps {
  terrain: string;
}

const StyledRowWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

const StyledColWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledPaper = styled(Paper)<StyledPaperProps>`
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.terrain === "Land") return "white";
    if (props.terrain === "Desert") return "yellow";
    if (props.terrain === "Sea") return "#6ccfff";
    if (props.terrain === "Jungle") return "green";
    return "white";
  }};
`;
const GameGrid = ({ worldMap }: State) => {

  return (
    <div className="game-grid">
      {worldMap.map((row, rowIndex) => (
        <StyledRowWrapper key={rowIndex} className="row">
          {row.map((mapCell: MapCell, columnIndex: number) => (
            <StyledColWrapper key={columnIndex} className="map-cell">
              <StyledPaper square elevation={20} terrain={mapCell.terrain}>
                {mapCell.occupiedBy &&
                  mapCell.occupiedBy.type === "Collector" && (
                    <CollectorContainer collector={mapCell.occupiedBy} />
                  )}
                {mapCell.occupiedBy &&
                  mapCell.occupiedBy.type === "Creature" && (
                    <CreatureContainer
                      creature={mapCell.occupiedBy as ICreature}
                    />
                  )}
                  {
                    /**
                     * Modal here
                     */
                  }
              </StyledPaper>
            </StyledColWrapper>
          ))}
        </StyledRowWrapper>
      ))}
    </div>
  );
};

export default GameGrid;
