"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme();

    return (
        <button
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="relative p-2 rounded-full hover:bg-accent/10 transition-colors text-foreground focus:outline-none"
            title="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <motion.div
                    initial={{ scale: 0, rotate: -90 }}
                    animate={{ scale: theme === "dark" ? 0 : 1, rotate: theme === "dark" ? 90 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Sun className="w-5 h-5" />
                </motion.div>

                <motion.div
                    initial={{ scale: 0, rotate: 90 }}
                    animate={{ scale: theme === "dark" ? 1 : 0, rotate: theme === "dark" ? 0 : -90 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0"
                >
                    <Moon className="w-5 h-5" />
                </motion.div>
            </div>
            <span className="sr-only">Toggle theme</span>
        </button>
    );
}
