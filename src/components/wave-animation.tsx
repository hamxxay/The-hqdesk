"use client";

import { useEffect, useRef } from "react";

class Wave {
  private waveLength: number[];
  private color: string;

  constructor(waveLength: number[], color: string) {
    this.waveLength = waveLength;
    this.color = color;
  }

  public draw = (
    context: CanvasRenderingContext2D,
    width: number,
    height: number,
    frequency: number
  ): void => {
    context.beginPath();
    context.moveTo(0, height);
    if (this.waveLength.length < 3) {
      return;
    }
    for (let i = 0; i < width; i++) {
      const wave1 = Math.sin(i * (this.waveLength[0] ?? 0) - frequency);
      const wave2 = Math.sin(i * (this.waveLength[1] ?? 0) - frequency);
      const wave3 = Math.sin(i * (this.waveLength[2] ?? 0) - frequency);

      context.lineTo(i * 2.5, height - 150 + wave1 * wave2 * wave3 * 80);
    }
    context.lineTo(width, height);
    context.fillStyle = this.color;
    context.fill();
    context.closePath();
  };
}

interface WaveAnimationProps {
  className?: string;
}

export function WaveAnimation({ className = "" }: WaveAnimationProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const frequencyRef = useRef(0.013);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const waves = {
      frontWave: new Wave([0.0211, 0.028, 0.015], "rgba(41, 167, 164, 0.35)"),
      backWave: new Wave([0.0122, 0.018, 0.005], "rgba(249, 209, 136, 0.25)"),
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = 300;
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    const render = () => {
      const width = canvas.width;
      const height = canvas.height;

      context.clearRect(0, 0, width, height);

      // Draw back wave first
      waves.backWave.draw(context, width, height, frequencyRef.current);
      // Draw front wave on top
      waves.frontWave.draw(context, width, height, frequencyRef.current);

      frequencyRef.current += 0.013;
      animationRef.current = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none ${className}`}
      style={{ display: "block" }}
    />
  );
}
