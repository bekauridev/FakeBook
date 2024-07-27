import styles from "./Loader.module.css";
function Loader() {
  return (
    <div className={styles.loader}>
      <div className={styles.wrapper}>
        <div className={styles.circle}></div>
        <div className={styles.line1}></div>
        <div className={styles.line2}></div>
        <div className={styles.line3}></div>
        <div className={styles.line4}></div>
        <div className={styles.line5}></div>
        <div className={styles.line6}></div>
      </div>
    </div>
  );
}

export default Loader;
