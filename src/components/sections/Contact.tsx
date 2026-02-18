"use client";

import { useState } from "react";
import { Locale } from "@/app/i18n";
import { Mail, Phone, Copy, Check, ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

interface ContactProps {
    lang: Locale;
    dict: {
        title: string;
        description: string;
        email_label: string;
        phone_label: string;
        copy: string;
        copied: string;
    };
}

export default function Contact({ lang, dict }: ContactProps) {
    const [copiedEmail, setCopiedEmail] = useState(false);
    const [copiedPhone, setCopiedPhone] = useState(false);

    const email = "tadod.de@gmail.com";
    const phone = "+84 867 714 338";

    const copyToClipboard = (text: string, isEmail: boolean) => {
        navigator.clipboard.writeText(text);
        if (isEmail) {
            setCopiedEmail(true);
            setTimeout(() => setCopiedEmail(false), 2000);
        } else {
            setCopiedPhone(true);
            setTimeout(() => setCopiedPhone(false), 2000);
        }
    };

    return (
        <Section id="contact" className="bg-background">
            <div className="max-w-4xl mx-auto text-center">
                <ScrollReveal>
                    <h2 className="text-4xl md:text-6xl font-heading font-bold mb-6 text-foreground">
                        {dict.title}
                    </h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-16 leading-relaxed">
                        {dict.description}
                    </p>
                </ScrollReveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <ScrollReveal delay={0.1} width="100%">
                        <div className="group relative p-10 bg-card border border-border hover:border-accent transition-all duration-300 h-full flex flex-col items-center justify-center text-center rounded-sm">
                            <div className="mb-6 p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform duration-300">
                                <Mail className="w-8 h-8" />
                            </div>
                            <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">{dict.email_label}</h3>
                            <p className="text-2xl font-bold text-foreground mb-6 break-all">{email}</p>

                            <button
                                onClick={() => copyToClipboard(email, true)}
                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
                            >
                                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copiedEmail ? dict.copied : dict.copy}
                            </button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal delay={0.2} width="100%">
                        <div className="group relative p-10 bg-card border border-border hover:border-accent transition-all duration-300 h-full flex flex-col items-center justify-center text-center rounded-sm">
                            <div className="mb-6 p-4 bg-accent/10 rounded-full text-accent group-hover:scale-110 transition-transform duration-300">
                                <Phone className="w-8 h-8" />
                            </div>
                            <h3 className="text-sm font-mono uppercase tracking-widest text-muted-foreground mb-2">{dict.phone_label}</h3>
                            <p className="text-2xl font-bold text-foreground mb-6">{phone}</p>

                            <button
                                onClick={() => copyToClipboard(phone, false)}
                                className="flex items-center gap-2 text-sm font-medium text-foreground hover:text-accent transition-colors border-b border-transparent hover:border-accent pb-0.5"
                            >
                                {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copiedPhone ? dict.copied : dict.copy}
                            </button>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </Section>
    );
}
