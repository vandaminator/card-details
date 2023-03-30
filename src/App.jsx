import { useState } from "react";
import Bottom from "./components/Bottom/Bottom";
import Complete from "./components/Complete/Complete";
import Top from "./components/Top/Top";
import StyledApp from "./StyledApp";

function App() {
  const [accountNumber, setAccountNumber] = useState("");
  const [userName, setUserName] = useState("");
  const [cardYears, setCardYears] = useState({ mm: "", yy: "" });
  const [cvc, setCvc] = useState("");

  // when card detials are submitted, we change the screen with this
  const [gotInfo, setGotInfo] = useState(false);

  return (
    <>
      <StyledApp>
        <Top
          accountNumber={accountNumber}
          userName={userName}
          cardYears={cardYears}
          cvc={cvc}
        />
        {gotInfo ? (
          <Complete />
        ) : (
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
            // this changes the screen
            setGotInfo={setGotInfo}
          />
        )}
      </StyledApp>
    </>
  );
}

export default App;
