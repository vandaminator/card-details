import styled from "styled-components";

const StyledApp = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    flex-direction: row;
    width: 70%;
  }
`;

export default StyledApp;
