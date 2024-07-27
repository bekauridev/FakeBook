import styles from "./Spinner.module.css";
function Spinner({ color = "#0000001a" }) {
  return <div className={styles.loader} style={{ "--Loader-color": `${color}` }}></div>;
}

export default Spinner;
