import styled from "styled-components";

const StyledBgBack = styled.div`
  position: relative;

  img {
    width: 100%;
  }

  div {
    width: fit-content;
    position: absolute;
    top: 43%;
    right: 12%;

    color: white;
    font-size: 100%;
  }

  @media (min-width: 1024px) {
    top: 50%;
    left: 40%;
  }
`;

export default StyledBgBack;
