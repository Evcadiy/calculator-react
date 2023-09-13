import { useState } from "react";
import Card from "./components/Card";
import Input from "./components/Input";
import styles from "./App.module.css";

function App() {
  const [result, setResult] = useState("");

  const handleClick = (e) => {
    if (result === "Error") {
      setResult(e.target.name);
    } else {
      setResult(result.concat(e.target.name));
    }
  };

  const clear = () => {
    setResult("");
  };

  const back = () => {
    setResult(result.slice(0, -1));
  };

  const calculate = () => {
    try {
      setResult(eval(result).toString());
    } catch (err) {
      setResult("Error");
    }
  };

  return (
    <Card>
      <Input result={result} />
      <div className={styles.keypad}>
        <button onClick={clear} className={styles.key}>
          Clear
        </button>
        <button onClick={back} className={styles.key}>
          C
        </button>
        <button name="1" onClick={handleClick} className={styles.key}>
          1
        </button>
        <button name="2" onClick={handleClick} className={styles.key}>
          2
        </button>
        <button name="3" onClick={handleClick} className={styles.key}>
          3
        </button>
        <button name="4" onClick={handleClick} className={styles.key}>
          4
        </button>
        <button name="5" onClick={handleClick} className={styles.key}>
          5
        </button>
        <button name="6" onClick={handleClick} className={styles.key}>
          6
        </button>
        <button name="7" onClick={handleClick} className={styles.key}>
          7
        </button>
        <button name="8" onClick={handleClick} className={styles.key}>
          8
        </button>
        <button name="9" onClick={handleClick} className={styles.key}>
          9
        </button>
        <button name="0" onClick={handleClick} className={styles.key}>
          0
        </button>
        <button name="+" onClick={handleClick} className={styles.key}>
          +
        </button>
        <button name="-" onClick={handleClick} className={styles.key}>
          -
        </button>
        <button name="*" onClick={handleClick} className={styles.key}>
          *
        </button>
        <button name="/" onClick={handleClick} className={styles.key}>
          /
        </button>
        <button name="." onClick={handleClick} className={styles.key}>
          .
        </button>
        <button onClick={calculate} className={styles.key}>
          =
        </button>
      </div>
    </Card>
  );
}

export default App;
