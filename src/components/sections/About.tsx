"use client";

import { motion } from "framer-motion";
import { Locale } from "@/app/i18n";

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
        <section id="about" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"
                >
                    <div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground relative inline-block">
                            {dict.title}
                            <span className="absolute -bottom-2 left-0 w-1/2 h-2 bg-accent/30 rounded-full"></span>
                        </h2>
                        <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                            {dict.summary}
                        </p>
                        <div className="p-6 bg-accent/5 rounded-2xl border border-accent/10">
                            <h3 className="text-xl font-heading font-semibold mb-3 text-foreground">{dict.philosophy_title}</h3>
                            <p className="text-muted italic">"{dict.philosophy}"</p>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-2xl font-heading font-semibold mb-6 text-foreground">{dict.skills_title}</h3>
                        <div className="flex flex-wrap gap-3">
                            {skills.map((skill, index) => (
                                <motion.span
                                    key={skill}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.05 }}
                                    className="px-4 py-2 bg-card border border-border rounded-lg text-sm font-medium hover:border-accent hover:bg-accent hover:text-accent-foreground transition-all shadow-sm"
                                >
                                    {skill}
                                </motion.span>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
