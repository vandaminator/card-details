import styled from "styled-components";

const StyledBgFront = styled.div`
  position: absolute;
  top: 60%;
  left: 6%;

  .background {
    width: 100%;
    filter: blur(2px);
    filter: brightness(0.8);
  }

  .account-number {
    width: 100%;
    position: absolute;
    bottom: 34%;
    color: white;
    font-size: 31px;
    text-align: center;
  }

  .card-logo {
    position: absolute;
    width: 20%;
    top: 10%;
    left: 5%;
  }

  .user-name {
    position: absolute;
    bottom: 10%;
    left: 10%;
    color: white;
    font-size: medium;
  }

  .small-number {
    position: absolute;
    bottom: 10%;
    left: 75%;
    color: white;
    font-size: medium;
  }

  @media (min-width: 1024px) {
    top: 20%;
    left: 40%;
  }
`;

export default StyledBgFront;
