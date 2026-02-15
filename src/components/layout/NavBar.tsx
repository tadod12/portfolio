"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Locale } from "@/app/i18n";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

interface NavBarProps {
    lang: Locale;
    dict: {
        home: string;
        about: string;
        experience: string;
        blog: string;
        contact: string;
    };
}

export default function NavBar({ lang, dict }: NavBarProps) {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        { href: `/${lang}`, label: dict.home },
        { href: `/${lang}#about`, label: dict.about },
        { href: `/${lang}#experience`, label: dict.experience },
        { href: `/${lang}/blog`, label: dict.blog },
        { href: `/${lang}#contact`, label: dict.contact },
    ];

    const switchLocale = (newLocale: string) => {
        const path = pathname.replace(`/${lang}`, `/${newLocale}`);
        return path;
    };

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link href={`/${lang}`} className="text-2xl font-heading font-bold text-accent">
                            DoDat
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-8">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={cn(
                                        "text-foreground/80 hover:text-accent transition-colors font-medium",
                                        pathname === link.href && "text-accent"
                                    )}
                                >
                                    {link.label}
                                </Link>
                            ))}

                            {/* Language Switcher */}
                            <div className="flex items-center gap-4 ml-4 border-l pl-4 border-border">
                                <ThemeToggle />
                                <div className="flex items-center gap-1">
                                    <Globe className="w-4 h-4 text-muted" />
                                    <Link
                                        href={switchLocale('en')}
                                        className={cn("text-sm hover:text-accent font-medium", lang === 'en' ? "text-foreground" : "text-muted")}
                                    >
                                        EN
                                    </Link>
                                    <span className="text-muted">/</span>
                                    <Link
                                        href={switchLocale('vi')}
                                        className={cn("text-sm hover:text-accent font-medium", lang === 'vi' ? "text-foreground" : "text-muted")}
                                    >
                                        VI
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-foreground hover:text-accent focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border"
                    >
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            {links.map((link) => (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-accent hover:bg-accent/10"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <div className="flex items-center justify-between px-3 py-2 mt-4 border-t border-border pt-4">
                                <div className="flex items-center gap-4">
                                    <Link href={switchLocale('en')} className={cn("text-sm font-medium", lang === 'en' ? "text-accent" : "text-muted")}>English</Link>
                                    <Link href={switchLocale('vi')} className={cn("text-sm font-medium", lang === 'vi' ? "text-accent" : "text-muted")}>Tiếng Việt</Link>
                                </div>
                                <ThemeToggle />
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
