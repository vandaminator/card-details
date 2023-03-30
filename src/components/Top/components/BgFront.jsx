import StyledBgFront from "../styles/StyledBgFront";

function BgFront(props) {
  const { img, cardLogo } = props;
  const { accountNumber, userName, cardYears } = props;
  return (
    <>
      <StyledBgFront img={img}>
        <img className="background" src={img} alt="stuff" />
        <img className="card-logo" src={cardLogo} alt="" />
        <div className="account-number">{accountNumber}</div>
        <div className="user-name">{userName}</div>
        <div className="small-number">
          {cardYears.mm}/{cardYears.yy}
        </div>
      </StyledBgFront>
    </>
  );
}

export default BgFront;
