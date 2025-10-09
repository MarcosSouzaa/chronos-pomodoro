import styles from './styles.module.css';

export function Cycles() {
  return (
    <div className={styles.cycles}>
      <span>Ciclos:</span>
      {/*pontos do ciclo */}
      <div className={styles.cycleDots}>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.shortBreakTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.workTime}`}></span>
        {/*ponto do ciclo */}
        <span className={`${styles.cycleDot} ${styles.longBreakTime}`}></span>
      </div>
    </div>
  );
}
