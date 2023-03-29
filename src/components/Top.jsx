import bgMobile from "../assets/images/bg-main-mobile.png";
import bgDesktop from "../assets/images/bg-main-desktop.png";
import StyledTop from "./styles/StyledTop";

function Top() {
  return (
    <>
      <StyledTop img={bgDesktop}>
        <p>hello</p>
      </StyledTop>
    </>
  );
}

export default Top;
