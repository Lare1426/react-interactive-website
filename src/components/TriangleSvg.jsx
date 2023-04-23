import styles from "./TriangleSvg.module.scss";

export default function TriangleSvg({ small, rotated }) {
  return (
    <svg
      viewBox="0 0 70 80"
      xmlns="http://www.w3.org/2000/svg"
      width={small ? "15" : "25"}
      height={small ? "15" : "25"}
      className={`${styles.triangleSvg} ${rotated ? styles.rotated : ""}`}
    >
      <polygon points="0,0 69,40 0,80" fill="white" />
    </svg>
  );
}
