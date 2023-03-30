import StyledBottom from "../styles/StyledBottom";

function Bottom() {
  return (
    <StyledBottom>
      <div className="input-info">
        <p className="info">CARD HOLDER NAME</p>
        <input
          className="input-field"
          placeholder="e.g. Jane Appleseed"
          type="text"
        />
      </div>
      <div className="input-info">
        <p className="info">CARD NUMBER</p>
        <input
          className="input-field"
          placeholder="e.g. 1234 5678 9123 0000"
          type="text"
        />
      </div>
      <div className="two-inputs">
        <div className="input-info">
          <p className="info">EXP. DATE (MM/YY)</p>
          <div className="exp-date-input">
            <input
              className="input-field exp-date"
              placeholder="MM"
              type="text"
            />
            <input
              className="input-field exp-date"
              placeholder="YY"
              type="text"
            />
          </div>
        </div>
        <div className="input-info">
          <p className="info">CVC</p>
          <input className="input-field" placeholder="e.g. 123" type="text" />
        </div>
      </div>
      <div className="confirm-btn">Confirm</div>
    </StyledBottom>
  );
}

export default Bottom;
