import StyledComplete from "../styles/StyledComplete";

import completeSvg from "./assets/icon-complete.svg";

function Complete(props) {
  return (
    <>
      <StyledComplete>
        <img src={completeSvg} alt="" />
        <h1>THANK YOU</h1>
        <p>We have added your card details</p>
        <button className="confirm-btn">Confirm</button>
      </StyledComplete>
    </>
  );
}

export default Complete;
