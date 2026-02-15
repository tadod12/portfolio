"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Locale } from "@/app/i18n";

interface HeroProps {
    lang: Locale;
    dict: {
        title: string;
        cta_contact: string;
        cta_blog: string;
    };
}

export default function Hero({ lang, dict }: HeroProps) {
    return (
        <section id="home" className="min-h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-[-20%] right-[-10%] w-[40rem] h-[40rem] bg-accent/10 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-[-20%] left-[-10%] w-[30rem] h-[30rem] bg-accent/10 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-heading font-bold tracking-tight text-foreground mb-6">
                        <span className="relative inline-block">
                            DoDat
                            <span className="absolute -bottom-2 left-0 w-full h-3 bg-accent -z-10 transform -rotate-1 rounded-sm shadow-sm group-hover:rotate-0 transition-transform"></span>
                        </span>
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-light text-muted mb-8">
                        {dict.title}
                    </h2>
                    <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Building scalable data pipelines and crafting minimalist web experiences.
                        Turning complex data into clear insights.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            href={`/${lang}/contact`}
                            className="px-8 py-3 rounded-full bg-foreground text-background font-medium hover:bg-accent hover:text-foreground transition-colors duration-300 w-full sm:w-auto"
                        >
                            {dict.cta_contact}
                        </Link>
                        <Link
                            href={`/${lang}/blog`}
                            className="px-8 py-3 rounded-full border border-border hover:border-accent hover:bg-accent/5 transition-colors duration-300 flex items-center gap-2 w-full sm:w-auto justify-center"
                        >
                            {dict.cta_blog}
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
