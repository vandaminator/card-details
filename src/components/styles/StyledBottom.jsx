import styled from "styled-components";

const StyledBottom = styled.div`
  width: 80%;
  margin-top: 30vw;
  padding: 20px;

  .info {
    color: #1d022c;
    margin-top: 10px;
    margin-bottom: 10px;
    font-size: x-small;
    letter-spacing: 2px;
  }

  .input-field {
    width: 100%;
    padding: 10px;
    border-radius: 5px;
    border-color: rgba(0, 0, 0, 0.3);
    font-weight: bold;
  }

  .input-field ::placeholder {
    opacity: 0.3;
  }
`;

export default StyledBottom;
