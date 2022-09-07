import { useRef, useState } from "react";
import "./App.css";
import imageLucky from "./Assets/is-this-lucky-number.png";

function App() {
  const dateOfBirth = useRef();
  const luckyNumber = useRef();
  const [userMessage, setUserMessage] = useState();
  const isLucky = () => {
    let tempString = dateOfBirth.current.value.replaceAll("-", "").split("");
    let total = tempString.reduce(
      (previousValue, currentValue) => previousValue + parseInt(currentValue),
      0
    );
    if (total % luckyNumber.current.value === 0) {
      setUserMessage("Hey, Your Birthday is lucky! 😉");
    } else {
      setUserMessage("Hey, Sorry your Birthday is not lucky! 🥹");
    }
  };
  return (
    <div className="App">
      <img src={imageLucky} alt="Is your Birthday Lucky?"></img>
      <h1>Is your Birthday Lucky?</h1>
      <div className="form-control">
        <label htmlFor="dateOfBirth">Date of Birth: </label>
        <input id="dateOfBirth" ref={dateOfBirth} type="date"></input>
      </div>
      <div className="form-control">
        <label htmlFor="luckyNumber">Lucky Number: </label>
        <input
          id="luckyNumber"
          ref={luckyNumber}
          type="number"
          placeholder="0-9"
        ></input>
      </div>
      <div className="form-control">
        <button className="btn" onClick={isLucky}>
          Submit
        </button>
      </div>
      <div className="form-control">
        <p>
          <strong>{userMessage}</strong>
        </p>
      </div>
      <p className="btn" style={{ display: "inline-block" }}>
        Privacy Policy: We're not storing your data. 😈
        <br />
        Also, Regardless of the Lucky Number Result you are Lucky! 😉
      </p>
    </div>
  );
}

export default App;
