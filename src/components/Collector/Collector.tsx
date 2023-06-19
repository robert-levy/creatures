import styled from "@emotion/styled";
import { IconButton } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const StyledWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
`;

const StyledSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Collector = ({
  name,
  handleClick,
}: {
  name: string;
  handleClick: (direction: string) => void;
}) => {
  return (
    <StyledWrapper>
      <StyledSection> </StyledSection>
      <StyledSection>
        <IconButton onClick={() => handleClick("up")}>
          <KeyboardArrowUpIcon />
        </IconButton>
      </StyledSection>
      <StyledSection> </StyledSection>
      <StyledSection>
        <IconButton onClick={() => handleClick("left")}>
          <KeyboardArrowLeftIcon />
        </IconButton>
      </StyledSection>
      <StyledSection> 🕵🏿</StyledSection>
      <StyledSection>
        <IconButton onClick={() => handleClick("right")}>
          <KeyboardArrowRightIcon />
        </IconButton>
      </StyledSection>
      <StyledSection> </StyledSection>
      <StyledSection>
        <IconButton onClick={() => handleClick("down")}>
          <KeyboardArrowDownIcon />
        </IconButton>
      </StyledSection>
      <StyledSection> </StyledSection>
    </StyledWrapper>
  );
};

export default Collector;
