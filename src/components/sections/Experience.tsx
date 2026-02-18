"use client";

import { Locale } from "@/app/i18n";
import { Calendar } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ExperienceItem {
    company: string;
    role: string;
    period: string;
    description: string;
}

interface ExperienceProps {
    lang: Locale;
    dict: {
        title: string;
        items: ExperienceItem[];
    };
}

export default function Experience({ lang, dict }: ExperienceProps) {
    return (
        <Section id="experience" className="bg-muted/10">
            <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-left">
                    {dict.title}
                </h2>
            </ScrollReveal>

            <div className="max-w-4xl">
                <div className="border-l-2 border-border/50 ml-3 md:ml-0 md:pl-8 space-y-16">
                    {dict.items.map((item, index) => (
                        <ScrollReveal key={index} delay={index * 0.1}>
                            <div className="relative pl-8 md:pl-0 group">
                                {/* Timeline Dot */}
                                <div className="absolute -left-[41px] md:-left-[41px] top-2 w-5 h-5 bg-background border-4 border-muted rounded-full group-hover:border-accent transition-colors duration-300 z-10" />

                                <div className="grid md:grid-cols-4 gap-4 md:gap-8 items-baseline">
                                    <div className="md:col-span-1">
                                        <span className="text-sm font-mono text-muted-foreground flex items-center gap-2">
                                            <Calendar className="w-3 h-3" />
                                            {item.period}
                                        </span>
                                    </div>
                                    <div className="md:col-span-3">
                                        <h3 className="text-2xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors duration-300">
                                            {item.role}
                                        </h3>
                                        <div className="text-lg font-medium text-foreground/80 mb-4">
                                            {item.company}
                                        </div>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </Section>
    );
}
