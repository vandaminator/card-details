import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";
import bgCardBack from "./assets/bg-card-back.png";
import bgCardFront from "./assets/bg-card-front.png";

import StyledTop from "../styles/StyledTop";
import BgBack from "./components/BgBack";

function Top() {
  return (
    <>
      <StyledTop img={bgMobile}>
        <BgBack img={bgCardBack} />
      </StyledTop>
    </>
  );
}

export default Top;
