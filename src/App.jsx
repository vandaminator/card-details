import { useState } from "react";
import Bottom from "./components/Bottom/Bottom";
import Top from "./components/Top/Top";
import StyledApp from "./StyledApp";

function App() {
  const [accountNumber, setAccountNumber] = useState("0000 0000 0000 0000");
  const [userName, setUserName] = useState("Jane AppleSeed");
  const [cardYears, setCardYears] = useState({ mm: "00", yy: "00" });
  const [cvc, setCvc] = useState("000");
  return (
    <>
      <StyledApp>
        <Top
          accountNumber={accountNumber}
          userName={userName}
          cardYears={cardYears}
          cvc={cvc}
        />
        <Bottom
          accountNumber={accountNumber}
          userName={userName}
          cardYears={cardYears}
          cvc={cvc}
          // changers
          setAccountNumber={accountNumber}
          setUserName={userName}
          setCardYears={cardYears}
          setCvc={cvc}
        />
      </StyledApp>
    </>
  );
}

export default App;
