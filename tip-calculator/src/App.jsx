import { useState } from "react";

export default function App() {
  const [bill, setBill] = useState();
  const [person, setPerson] = useState();
  let [tip, setTip] = useState();
  const result = bill / person;

  const calculateTip = (x) => {
    tip = (result * x).toFixed(2);
    setTip(tip);
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
      </div>
      <div>
        <div>Tip Amount/person : {tip} </div>
        <div>
          Total / person : {(parseFloat(result) + parseFloat(tip)).toFixed(2)}
        </div>
        <button>Reset</button>
      </div>
    </>
  );
}
