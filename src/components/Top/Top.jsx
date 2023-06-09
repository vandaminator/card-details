import bgMobile from "./assets/bg-main-mobile.png";
import bgDesktop from "./assets/bg-main-desktop.png";

import bgCardBack from "./assets/bg-card-back.png";

import bgCardFront from "./assets/bg-card-front.png";
import cardLogo from "./assets/card-logo.svg";

import StyledTop from "../styles/StyledTop";
import BgBack from "./components/BgBack";
import BgFront from "./components/BgFront";

function Top(props) {
  const { accountNumber, userName, cardYears, cvc } = props;
  return (
    <>
      <StyledTop img={bgMobile} imgDesktop={bgDesktop}>
        <BgBack img={bgCardBack} cvc={cvc} />
        <BgFront
          img={bgCardFront}
          cardLogo={cardLogo}
          accountNumber={accountNumber}
          userName={userName}
          cardYears={cardYears}
        />
      </StyledTop>
    </>
  );
}

export default Top;
