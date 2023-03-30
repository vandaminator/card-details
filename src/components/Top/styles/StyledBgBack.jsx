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
    font-size: 16px;
  }

  @media (min-width: 720px) {
    div {
      font-size: 50px;
    }
  }

  @media (min-width: 1024px) {
    top: 50%;
    left: 40%;

    div {
      font-size: 16px;
    }
  }
`;

export default StyledBgBack;
