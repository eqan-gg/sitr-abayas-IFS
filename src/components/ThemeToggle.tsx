import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { cn } from "@/lib/utils";

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
      className={cn(
        "relative grid place-items-center w-9 h-9 rounded-full border border-border",
        "hover:bg-secondary/80 transition-colors",
        className,
      )}
    >
      <Sun className={cn("w-4 h-4 transition-all", theme === "dark" ? "scale-0 opacity-0" : "scale-100 opacity-100")} />
      <Moon
        className={cn(
          "w-4 h-4 absolute transition-all",
          theme === "dark" ? "scale-100 opacity-100" : "scale-0 opacity-0",
        )}
      />
    </button>
  );
}
