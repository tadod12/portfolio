"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Locale } from "@/app/i18n";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface HeroProps {
    lang: Locale;
    dict: {
        name: string;
        title: string;
        subtitle: string;
        cta_contact: string;
        cta_blog: string;
    };
}

export default function Hero({ lang, dict }: HeroProps) {
    const letterVariant = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Grain/Noise Effect */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none z-[-1]"
                style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}
            />

            {/* Gradient Blobs */}
            <div className="absolute top-[-10%] right-[-5%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[120px] -z-20 animate-pulse duration-[10000ms]" />
            <div className="absolute bottom-[-10%] left-[-5%] w-[40vw] h-[40vw] bg-primary/5 rounded-full blur-[100px] -z-20" />

            <div className="max-w-6xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1 }}
                        className="mb-6"
                    >
                        <ScrollReveal width="100%">
                            <span className="text-accent font-medium mb-4 block text-lg tracking-wider">
                                {dict.title}
                            </span>
                        </ScrollReveal>

                        <h1 className="text-6xl md:text-8xl font-heading font-black tracking-tighter text-foreground mb-6 leading-[0.9]">
                            {dict.name.split(" ").map((word, i) => (
                                <span key={i} className="block">{word}</span>
                            ))}
                        </h1>
                    </motion.div>

                    <ScrollReveal delay={0.2}>
                        <p className="text-xl md:text-2xl text-muted-foreground max-w-xl mb-10 leading-relaxed font-light">
                            {dict.subtitle}
                        </p>
                    </ScrollReveal>

                    <ScrollReveal delay={0.4}>
                        <div className="flex flex-wrap items-center gap-4">
                            <Link
                                href={`/${lang}/contact`}
                                className="group px-8 py-4 bg-foreground text-background font-medium rounded-none hover:bg-accent hover:text-foreground transition-all duration-300 flex items-center gap-2"
                            >
                                {dict.cta_contact}
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href={`/${lang}/blog`}
                                className="px-8 py-4 border border-border text-foreground hover:bg-muted/50 transition-all duration-300 font-medium"
                            >
                                {dict.cta_blog}
                            </Link>
                        </div>
                    </ScrollReveal>
                </div>

                {/* Decorative / Abstract Visual */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                    className="hidden md:block relative h-full min-h-[500px]"
                >
                    <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-full blur-3xl opacity-50" />
                    <div className="relative z-10 w-full h-full border border-border/50 bg-card/30 backdrop-blur-sm p-8 rounded-2xl shadow-2xl rotate-3 hover:rotate-0 transition-all duration-700 ease-out-quart">
                        <div className="h-full w-full border border-dashed border-border/50 rounded-lg flex items-center justify-center">
                            <span className="font-mono text-sm text-muted-foreground">Portfolio_v2.0_Concept</span>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground/50"
            >
                <ArrowDown className="w-6 h-6" />
            </motion.div>
        </section>
    );
}
