import CloudsVideo from "./components/CloudsVideo";
import VerticalBeams from "./components/VerticalBeams";
import WindowVideo from "./components/WindowVideo";
import styles from "./style.module.css";

export default function WindowScene() {
  return (
    <div className={styles.windowScene}>
      <div className={styles.content}>
        <CloudsVideo />
        <WindowVideo />
        <VerticalBeams />
      </div>
    </div>
  );
}
