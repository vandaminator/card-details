import { useState } from "react";
import Bottom from "./components/Bottom/Bottom";
import Top from "./components/Top/Top";
import StyledApp from "./StyledApp";

function App() {
  const [accountNumber, setAccountNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [cardYears, setCardYears] = useState({ mm: "", yy: "" });
  const [cvc, setCvc] = useState("");
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
          setAccountNumber={setAccountNumber}
          setUserName={setUserName}
          setCardYears={setCardYears}
          setCvc={setCvc}
        />
      </StyledApp>
    </>
  );
}

export default App;
