import { useEffect, useState } from "react";

export default function App() {
  const [bill, setBill] = useState(0);
  const [person, setPerson] = useState(1);
  const [tip, setTip] = useState(0);
  const [tipPercentage, setTipPercentage] = useState(0);
  const result = bill / person;

  useEffect(() => {
    setTip((result * tipPercentage).toFixed(2));
  }, [(result, tipPercentage)]);

  const calculateTip = (percentage) => {
    setTipPercentage(percentage);
  };

  const reset = () => {
    setBill(0);
    setPerson(1);
    setTip(0);
  };

  return (
    <>
      <label htmlFor="bill">Bill</label>
      <input
        type="number"
        name="bill"
        id=""
        value={bill}
        onChange={(e) => setBill(e.target.value)}
      />
      <label htmlFor="person">Number of person</label>
      <input
        type="number"
        name="person"
        value={person}
        onChange={(e) => setPerson(e.target.value)}
      />
      <div>
        <button onClick={() => calculateTip(0.05)}>5%</button>
        <button onClick={() => calculateTip(0.1)}>10%</button>
        <button onClick={() => calculateTip(0.15)}>15%</button>
        <button onClick={() => calculateTip(0.25)}>25%</button>
        <button onClick={() => calculateTip(0.5)}>50%</button>
        <input
          type="number"
          placeholder="Custom"
          onChange={(e) => calculateTip(e.target.value)}
        />
      </div>
      <div>
        <div>Tip Amount/person : {tip} </div>
        <div>
          Total / person : {(parseFloat(result) + parseFloat(tip)).toFixed(2)}
        </div>
        <button onClick={reset}>Reset</button>
      </div>
    </>
  );
}
