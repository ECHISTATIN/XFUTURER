"use client";

import { useEffect, useState, createContext, useContext } from "react";

const ScaleContext = createContext<number>(1);

export default function ScaleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const baseWidth = 780;
      const windowWidth = document.documentElement.clientWidth;
      const newScale = windowWidth > baseWidth ? 1 : windowWidth / baseWidth;

      setScale(newScale);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <ScaleContext.Provider value={scale}>
      <div
        className="scale-container"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top left",
          width: `${100 / scale}%`,
          height: "0px",
        }}
      >
        {children}
      </div>
    </ScaleContext.Provider>
  );
}

export function useScale() {
  return useContext(ScaleContext);
}
