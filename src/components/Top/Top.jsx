import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";

import bgCardBack from "./assets/bg-card-back.png";

import bgCardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

import StyledTop from "../styles/StyledTop";
import BgBack from "./components/BgBack";
import BgFront from "./components/BgFront";

function Top() {
  return (
    <>
      <StyledTop img={bgMobile}>
        <BgBack img={bgCardBack} />
        <BgFront img={bgCardFront} cardLogo={cardLogo} />
      </StyledTop>
    </>
  );
}

export default Top;
