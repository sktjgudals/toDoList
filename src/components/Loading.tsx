import styles from "./styles/Loading.module.css";

interface Props {
  width: number;
}
export default function Loading({ width }: Props) {
  return (
    <div className={styles.loader} style={{ width: width }}>
      <svg className={styles.circular} viewBox="25 25 50 50">
        <circle
          className={styles.path}
          cx="50"
          cy="50"
          r="20"
          fill="none"
          stroke="#bcbcbc"
          strokeWidth="5"
          strokeMiterlimit="10"
        />
      </svg>
    </div>
  );
}
