import { useEffect, useRef, type ReactNode } from "react";
import styles from "./style.module.css";
import { createNoise2D } from "simplex-noise";

// 모듈 로드 시 1번만 실행을 위해.
const noise2D = createNoise2D();

export default function BumpContainer({ children }: { children: ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let time = 0;

    const intervalId = setInterval(() => {
      time += 0.8;

      const offsetX = noise2D(time, 0) * 2;
      const offsetY = noise2D(0, time + 100) * 20;

      if (containerRef.current) {
        containerRef.current.style.setProperty(
          "--bump-offset-x",
          `${offsetX}px`
        );
        containerRef.current.style.setProperty(
          "--bump-offset-y",
          `${offsetY}px`
        );
      }
    }, 800);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className={styles.bumpContainer} ref={containerRef}>
      {children}
    </div>
  );
}
