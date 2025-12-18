"use client";

import { useEffect, useState } from "react";
import { Novatrix, Opulento } from "uvcanvas";

export default function ThemeCanvas() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const readTheme = () => {
      setTheme(
        document.documentElement.classList.contains("dark") ? "dark" : "light"
      );
    };

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return theme === "dark" ? <Opulento /> : <Novatrix />;
}
