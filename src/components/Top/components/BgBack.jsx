import StyledBgBack from "../styles/StyledBgBack";

function BgBack({ img }) {
  return (
    <>
      <StyledBgBack img={img}>
        <img src={img} alt="stuff" />
        <div>0 0 0</div>
      </StyledBgBack>
    </>
  );
}

export default BgBack;
