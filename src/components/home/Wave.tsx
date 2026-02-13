import { FC, useEffect, useRef, useMemo } from "react";
import { useCanvasContext } from "../../hooks/useCanvas";
import useResponsiveSize from "../../hooks/useResponsiveSize";
import WaveObj from "../../utils/wave";

const Wave: FC = () => {
  const { context } = useCanvasContext();
  const { width } = useResponsiveSize();
  const height = 600;

  const frequencyRef = useRef(0.013);
  const rafIdRef = useRef<number | null>(null);

  const waves = useMemo(
    () => ({
      frontWave: new WaveObj([0.0211, 0.028, 0.015], "rgba(40, 167, 164, 0.1)"),
      backWave: new WaveObj([0.0122, 0.018, 0.005], "rgba(17, 24, 40, 0.1)"),
    }),
    []
  );

  useEffect(() => {
    if (!context) return;

    const render = () => {
      context.clearRect(0, 0, width, height);

      Object.entries(waves).forEach(([, wave]) => {
        wave.draw(context, width, height, frequencyRef.current);
      });

      frequencyRef.current += 0.013;
      rafIdRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [context, width, height, waves]);

  return null;
};

export default Wave;
