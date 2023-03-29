import StyledBgFront from "../styles/StyledBgFront";

function BgFront({ img }) {
  return (
    <>
      <StyledBgFront img={img}>
        <img src={img} alt="stuff" />
        <div>0 0 0</div>
      </StyledBgFront>
    </>
  );
}

export default BgFront;
