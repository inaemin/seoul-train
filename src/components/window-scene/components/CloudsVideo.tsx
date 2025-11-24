import styles from "./style.module.css";

export default function CloudsVideo() {
  return (
    <video
      muted
      autoPlay
      loop
      playsInline
      className={styles.clouds}
      src="/videos/clouds.mp4"
    />
  );
}
