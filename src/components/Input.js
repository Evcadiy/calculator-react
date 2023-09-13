import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <form>
      <input
        readOnly
        className={styles.input}
        type="text"
        value={props.result}
      />
    </form>
  );
};

export default Input;
