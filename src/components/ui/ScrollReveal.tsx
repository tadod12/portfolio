"use client";

import { motion, useInView, UseInViewOptions } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
    children: React.ReactNode;
    className?: string;
    width?: "fit-content" | "100%";
    delay?: number;
    threshold?: number;
}

export const ScrollReveal = ({
    children,
    className,
    width = "100%",
    delay = 0,
    threshold = 0.1
}: ScrollRevealProps) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: threshold });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{
                duration: 0.8,
                delay: delay,
                ease: [0.21, 0.45, 0.27, 0.9] // Custom ease-out-quart
            }}
            className={cn(className)}
            style={{ width, position: "relative" }}
        >
            {children}
        </motion.div>
    );
};
