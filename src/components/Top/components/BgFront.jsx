import StyledBgFront from "../styles/StyledBgFront";

function BgFront({ img, cardLogo }) {
  return (
    <>
      <StyledBgFront img={img}>
        <img src={img} alt="stuff" />
        <img className="card-logo" src={cardLogo} alt="" />
        <div className="account-number">0000 0000 0000 0000</div>
        <div className="user-name">Jane Applessed</div>
        <div className="small-number">00/00</div>
      </StyledBgFront>
    </>
  );
}

export default BgFront;
