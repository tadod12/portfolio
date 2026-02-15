"use client";

import { motion } from "framer-motion";
import { Locale } from "@/app/i18n";
import { Calendar, Building2 } from "lucide-react";

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
        <section id="experience" className="py-24 bg-background/50 px-4 sm:px-6 lg:px-8 bg-accent/5">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-12 text-center relative inline-block w-full">
                        {dict.title}
                    </h2>

                    <div className="space-y-8">
                        {dict.items.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-card p-8 rounded-2xl shadow-sm border border-border hover:border-accent hover:shadow-md transition-all duration-300 relative overflow-hidden group"
                            >
                                <div className="absolute top-0 right-0 w-24 h-24 bg-accent/10 rounded-bl-full -mr-12 -mt-12 transition-transform group-hover:scale-150 duration-500"></div>

                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 relative z-10">
                                    <div>
                                        <h3 className="text-xl font-bold text-foreground">{item.role}</h3>
                                        <div className="flex items-center gap-2 text-accent font-medium mt-1">
                                            <Building2 className="w-4 h-4" />
                                            {item.company}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-muted-foreground text-sm mt-2 md:mt-0 bg-secondary px-3 py-1 rounded-full border border-border">
                                        <Calendar className="w-3 h-3" />
                                        {item.period}
                                    </div>
                                </div>
                                <p className="text-foreground/80 leading-relaxed relative z-10">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
