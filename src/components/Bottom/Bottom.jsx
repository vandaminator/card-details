import StyledBottom from "../styles/StyledBottom";

function Bottom(props) {
  const { accountNumber, userName, cardYears, cvc } = props;
  const { setAccountNumber, setUserName, setCardYears, setCvc } = props;

  const handleNameChange = ({ target }) => {
    const { value } = target;
    setUserName(value);
  };

  const handleAccountChange = ({ target }) => {
    const { value } = target;
    const numbers = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    const string = numbers.slice(0, 16);
    setAccountNumber(string);
  };

  const handleMMChange = ({ target }) => {
    const { value } = target;
    const numbers = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    const string = numbers.slice(0, 2);
    setCardYears((prevState) => {
      return {
        ...prevState,
        mm: string,
      };
    });
  };

  const handleYYChange = ({ target }) => {
    const { value } = target;
    const numbers = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    const string = numbers.slice(0, 2);

    setCardYears((prevState) => {
      return {
        ...prevState,
        yy: string,
      };
    });
  };

  const handleCvcChange = ({ target }) => {
    const { value } = target;
    const numbers = value.replace(/[^0-9.]/g, "").replace(/(\..*)\./g, "$1");
    const string = numbers.slice(0, 3);
    setCvc(string);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const CardNumber =
      document.getElementById("card-number").value.length === 16;
    const MM = document.getElementById("mm").value.length === 2;
    const YY = document.getElementById("yy").value.length === 2;
    const CVC = document.getElementById("cvc").value.length === 3;

    const ErrorCardNumber = document.getElementById("error-account").classList;
    const ErrorMMYY = document.getElementById("error-mm-yy").classList;
    const ErrorCvc = document.getElementById("error-cvc").classList;

    if (CardNumber && MM && YY && CVC) {
      alert("am working");
    } else {
      if (!CardNumber) {
        ErrorCardNumber.remove("hidden");
      }
      if (MM && YY) {
        ErrorMMYY.remove("hidden");
      }
      if (!CVC) {
        ErrorCvc.remove("hidden");
      } else {
        alert("something went wrong");
      }
    }
  };

  return (
    <StyledBottom onSubmit={handleSubmit}>
      <div className="input-info">
        <p className="info">CARD HOLDER NAME</p>
        <input
          className="input-field"
          placeholder="e.g. Jane Appleseed"
          type="text"
          value={userName}
          onChange={handleNameChange}
          required
        />
      </div>
      <div className="input-info">
        <p className="info">CARD NUMBER</p>
        <input
          className="input-field"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
          id="card-number"
          value={accountNumber}
          onChange={handleAccountChange}
          required
        />
        <p className="error-msg hidden" id="error-account">
          Error: card number is 16 numbers
        </p>
      </div>
      <div className="two-inputs">
        <div className="input-info">
          <p className="info">EXP. DATE (MM/YY)</p>
          <div className="exp-date-input">
            <input
              className="input-field exp-date"
              placeholder="MM"
              type="text"
              id="mm"
              value={cardYears.mm}
              onChange={handleMMChange}
              required
            />
            <input
              className="input-field exp-date"
              placeholder="YY"
              type="text"
              id="yy"
              value={cardYears.yy}
              onChange={handleYYChange}
              required
            />
          </div>
          <p className="error-msg hidden" id="error-mm-yy">
            Error: MM and YY are two digits, look at the card
          </p>
        </div>
        <div className="input-info">
          <p className="info">CVC</p>
          <input
            className="input-field"
            placeholder="e.g. 123"
            type="text"
            id="cvc"
            value={cvc}
            onChange={handleCvcChange}
            required
          />
          <p className="error-msg hidden" id="error-cvc">
            Error: CVC is 3 digits, look at the back of the card
          </p>
        </div>
      </div>
      <button className="confirm-btn">Confirm</button>
    </StyledBottom>
  );
}

export default Bottom;
