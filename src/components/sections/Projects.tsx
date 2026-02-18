"use client";

import { Locale } from "@/app/i18n";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ExternalLink, Github, Code2 } from "lucide-react";
import Link from "next/link";

interface ProjectItem {
    title: string;
    description: string;
    tech: string[];
    link?: string;
    repo?: string;
}

interface ProjectsProps {
    lang: Locale;
    dict: {
        title: string;
        items: ProjectItem[];
    };
}

export default function Projects({ lang, dict }: ProjectsProps) {
    return (
        <Section id="projects" className="bg-background">
            <ScrollReveal>
                <h2 className="text-4xl md:text-6xl font-heading font-bold mb-16 text-right">
                    {dict.title}
                </h2>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {dict.items.map((project, index) => (
                    <ScrollReveal key={index} delay={index * 0.1}>
                        <div className="group h-full bg-card/50 border border-border hover:border-accent p-6 flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-1 rounded-sm">
                            <div>
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-2 bg-accent/10 rounded-md text-accent">
                                        <Code2 className="w-6 h-6" />
                                    </div>
                                    <div className="flex gap-2">
                                        {project.repo && (
                                            <Link href={project.repo} target="_blank" className="p-2 text-muted-foreground hover:text-foreground transition-colors">
                                                <Github className="w-5 h-5" />
                                            </Link>
                                        )}
                                        {project.link && (
                                            <Link href={project.link} target="_blank" className="p-2 text-muted-foreground hover:text-accent transition-colors">
                                                <ExternalLink className="w-5 h-5" />
                                            </Link>
                                        )}
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs font-mono px-2 py-1 bg-muted/20 text-muted-foreground border border-border/50 rounded">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </Section>
    );
}
