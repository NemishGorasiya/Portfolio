"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import Button from "../ui/button";

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
      {theme === "dark" ? "Light Mode" : "Dark Mode"}
    </Button>
  );
};

export default ThemeSwitcher;
