import React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string;
    id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
    return (
        <section
            id={id}
            className={cn("py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto w-full", className)}
            {...props}
        >
            {children}
        </section>
    );
};
