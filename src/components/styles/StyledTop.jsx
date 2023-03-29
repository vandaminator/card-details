import styled from "styled-components";

const StyledTop = styled.div`
  background-image: url(${({ img }) => img});
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: end;

  div {
    width: 80%;
  }
`;

export default StyledTop;
