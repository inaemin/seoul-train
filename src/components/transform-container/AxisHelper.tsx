import styles from './style.module.css';

export default function AxisHelper() {
  return (
    <div className={styles.axisContainer}>
      <div className={styles.axisX}>X</div>
      <div className={styles.axisY}>Y</div>
      <div className={styles.axisZ}>Z</div>
      <div className={styles.origin}>O</div>
    </div>
  );
}