"use client";

import { Locale } from "@/app/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";

interface AboutProps {
    lang: Locale;
    dict: {
        title: string;
        summary: string;
        skills_title: string;
        philosophy_title: string;
        philosophy: string;
    };
}

export default function About({ lang, dict }: AboutProps) {
    const skills = ["Python", "SQL", "Spark", "Kafka", "AWS", "Docker", "Next.js", "TypeScript"];

    return (
        <Section id="about" className="bg-background">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
                <div className="md:col-span-5 relative">
                    <ScrollReveal>
                        <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 text-foreground leading-tight">
                            {dict.title}
                        </h2>
                        <div className="p-8 bg-muted/30 rounded-none border-l-4 border-accent">
                            <h3 className="text-sm font-mono uppercase tracking-widest mb-4 text-accent-foreground/60">{dict.philosophy_title}</h3>
                            <p className="text-xl md:text-2xl font-light italic text-foreground leading-relaxed">
                                "{dict.philosophy}"
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <div className="md:col-span-1 hidden md:block border-r border-border h-full mx-auto opacity-50" />

                <div className="md:col-span-6 space-y-12">
                    <ScrollReveal delay={0.2}>
                        <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                            {dict.summary}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.3}>
                        <div>
                            <h3 className="text-sm font-mono uppercase tracking-widest mb-6 text-foreground/50 border-b border-border pb-2 inline-block">
                                {dict.skills_title}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {skills.map((skill, index) => (
                                    <span
                                        key={skill}
                                        className="px-4 py-2 bg-background border border-border text-sm font-medium hover:border-accent hover:text-accent transition-colors cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </Section>
    );
}
