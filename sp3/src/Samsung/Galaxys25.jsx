
import React, { useEffect, useRef, useState } from "react";
import "../css/MatrixRain.css"

function MatrixRain() {
  const canvasRef = useRef(null);
  const [showDenied, setShowDenied] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);
    const fontSize = 16;
    const columns = Math.floor(w / fontSize) || 1;
    const drops = Array(columns).fill(0);
    const chars = "アカサタナハマヤ0123456789$#@%&*+=-";

    let animId;
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, w, h);
      ctx.fillStyle = "#0f0";
      ctx.font = `${fontSize}px monospace`;
      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);
        if (drops[i] * fontSize > h && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    }
    draw();

    const timeout = setTimeout(() => setShowDenied(true), 5000);

    function handleResize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      clearTimeout(timeout);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="matrix-root">
      <canvas ref={canvasRef} className="matrix-canvas" />
      {showDenied && (
        <div className="denied-popup">
          <h1>ACCESS DENIED</h1>
          <p>Unauthorized access attempt detected!</p>
          <button onClick={() => setShowDenied(false)}>Try Again</button>
        </div>
      )}
    </div>
  );
}

export default MatrixRain;