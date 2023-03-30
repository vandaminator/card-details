import StyledBgBack from "../styles/StyledBgBack";

function BgBack({ img, cvc }) {
  return (
    <>
      <StyledBgBack img={img}>
        <img src={img} alt="stuff" />
        <div>{cvc === "" ? "0 0 0" : cvc}</div>
      </StyledBgBack>
    </>
  );
}

export default BgBack;
