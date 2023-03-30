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
  }

  .input-field ::placeholder {
    opacity: 0.3;
  }

  .confirm-btn {
    width: 100%;
    padding: 10px;
    background-color: #1a023d;
    color: white;
    border-radius: 5px;
    margin: 10px 0px;
    text-align: center;
  }

  .two-inputs {
    display: flex;
    width: 100%;
  }

  .exp-date-input {
    display: flex;
  }

  .exp-date {
    width: 50%;
    margin: 0px 5px;
  }

  @media (min-width: 1024px) {
    margin-top: 100px;
    margin-left: 115px;
    margin-bottom: 200px;
  }
`;

export default StyledBottom;
