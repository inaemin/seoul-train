import WindowScene from "../window-scene";
import BlackBorder from "./components/BlackBorder";
import WindowFrameInner from "./components/WindowFrameInner";
import WindowFrameInnerHightlight from "./components/WindowFrameInnerHighlight";
import WindowFrameLedge from "./components/WindowFrameLedge";
import WindowFrameOuter from "./components/WindowFrameOuter";
import WindowInset from "./components/WindowInset";
import styles from "./style.module.css";

export default function WindowFrame() {
  return (
    <div className={styles.windowFrame}>
      <div className={styles.contents}>
        <WindowFrameInnerHightlight />
        <WindowFrameInner />
        <WindowInset />
        <WindowFrameOuter />
        <WindowFrameLedge />
        <BlackBorder />
        <WindowScene />
      </div>
    </div>
  );
}
