import { useEffect, useRef } from "react";
import WindowFrame from "../window-frame";
import SideBar from "./components/SideBar";
import SideBarHightlight from "./components/SideBarHighlight";
import TopBar from "./components/TopBar";
import styles from "./style.module.css";

export default function TouchContainer() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 요소 캐싱
    const container = document.querySelector(
      '[class*="_container_"]'
    ) as HTMLElement | null;
    const windowFrame = document.querySelector(
      '[class*="_windowFrame_"]'
    ) as HTMLElement | null;
    const highlight = document.querySelector(
      '[class*="_windowFrameInnerHighlight_"]'
    ) as HTMLElement | null;

    const handleMousemove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const ratioX = clientX / innerWidth;
      const ratioY = clientY / innerHeight;

      const perspective = 700 + ratioX * (1015 - 700);

      const translateX = -ratioX * 30;
      const translateY = -ratioY * 30;

      // shadow 값들
      const shadowOffset = 30 + ratioX * (77 - 30);
      const shadowStrengthFrame = ratioY * 30;
      const shadowStrengthHighlight = ratioY * 15;

      container?.style.setProperty("--perspective", `${perspective}px`);

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--translate-x",
          `${translateX}px`
        );
        containerRef.current.style.setProperty(
          "--translate-y",
          `${translateY}px`
        );
      }

      windowFrame?.style.setProperty("--shadow-offset", `${shadowOffset}px`);
      windowFrame?.style.setProperty(
        "--shadow-strength",
        `${shadowStrengthFrame}px`
      );

      highlight?.style.setProperty(
        "--shadow-strength",
        `${shadowStrengthHighlight}%`
      );
    };

    window.addEventListener("mousemove", handleMousemove);

    return () => window.removeEventListener("mousemove", handleMousemove);
  }, []);

  return (
    <div className={styles.touchContainer} ref={containerRef}>
      <SideBar />
      <SideBarHightlight />
      <TopBar />
      <WindowFrame />
    </div>
  );
}
