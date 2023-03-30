import styled from "styled-components";

const StyledTop = styled.div`
  background-image: url(${({ img }) => img});
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;

  position: relative;

  div {
    width: 80%;
  }

  @media (min-width: 1024px) {
    background-image: url(${({ imgDesktop }) => imgDesktop});
    width: 50%;
  }
`;

export default StyledTop;
