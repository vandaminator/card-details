import styled from "styled-components";

const StyledComplete = styled.div`
  display: flex;
  margin-top: 30vw;
  align-items: center;
  flex-direction: column;
  padding: 20px;

  h1 {
    color: #240759;
    margin: 40px auto 20px;
    font-size: 34px;
    font-weight: 400;
    letter-spacing: 5px;
  }

  p {
    opacity: 0.7;
    font-size: 20px;
  }

  .confirm-btn {
    width: 100%;
    padding: 10px;
    background-color: #1a023d;
    color: white;
    border-radius: 5px;
    margin: 20px 0px;
    text-align: center;
  }

  @media (min-width: 1024px) {
    margin-top: 100px;
    margin-left: 165px;
    margin-bottom: 200px;
  }
`;

export default StyledComplete;
