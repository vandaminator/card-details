import styled from "styled-components";

const StyledBgBack = styled.div`
  width: 100%;
  background-image: url(${({ img }) => img});
`;

export default StyledBgBack;
