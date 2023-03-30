import StyledBgFront from "../styles/StyledBgFront";

function BgFront(props) {
  const { img, cardLogo } = props;
  const { accountNumber, userName, cardYears } = props;
  return (
    <>
      <StyledBgFront img={img}>
        <img className="background" src={img} alt="stuff" />
        <img className="card-logo" src={cardLogo} alt="" />
        <div className="account-number">
          {accountNumber === "" ? "0000 0000 0000 0000" : accountNumber}
        </div>
        <div className="user-name">
          {userName === "" ? "Jane AppleSeed" : userName}
        </div>
        <div className="small-number">
          {cardYears.mm === "" ? "00" : cardYears.mm}/
          {cardYears.yy === "" ? "00" : cardYears.yy}
        </div>
      </StyledBgFront>
    </>
  );
}

export default BgFront;
