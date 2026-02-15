"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Locale } from "@/app/i18n";
import { Mail, Phone, Copy, Check } from "lucide-react";
import { cn } from "@/lib/utils";

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
        <section id="contact" className="py-24 bg-background px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6 text-foreground relative inline-block">
                        {dict.title}
                        <span className="absolute -bottom-2 right-0 w-1/3 h-2 bg-accent/30 rounded-full"></span>
                    </h2>
                    <p className="text-lg text-foreground/70 mb-12">
                        {dict.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="p-8 rounded-2xl bg-accent/5 border border-border flex flex-col items-center justify-center gap-4 hover:border-accent/40 transition-colors group">
                            <div className="p-3 bg-card rounded-full shadow-sm text-accent">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted font-medium mb-1">{dict.email_label}</p>
                                <p className="text-lg font-semibold text-foreground">{email}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(email, true)}
                                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-2"
                            >
                                {copiedEmail ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copiedEmail ? dict.copied : dict.copy}
                            </button>
                        </div>

                        <div className="p-8 rounded-2xl bg-accent/5 border border-border flex flex-col items-center justify-center gap-4 hover:border-accent/40 transition-colors group">
                            <div className="p-3 bg-card rounded-full shadow-sm text-accent">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <p className="text-sm text-muted font-medium mb-1">{dict.phone_label}</p>
                                <p className="text-lg font-semibold text-foreground">{phone}</p>
                            </div>
                            <button
                                onClick={() => copyToClipboard(phone, false)}
                                className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mt-2"
                            >
                                {copiedPhone ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                {copiedPhone ? dict.copied : dict.copy}
                            </button>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
