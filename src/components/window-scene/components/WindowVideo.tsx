import styles from "./style.module.css";

export default function WindowVideo() {
  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      className={styles.video}
      src="/videos/window.mp4"
    />
  );
}
