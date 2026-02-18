import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { Locale } from "@/app/i18n";
import { Calendar, ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Section } from "@/components/ui/Section";

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const posts = getSortedPostsData(lang as Locale);

    return (
        <Section className="min-h-screen pt-32 pb-20">
            <div className="max-w-4xl mx-auto">
                <ScrollReveal>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold mb-16 relative inline-block">
                        Blog
                        <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-accent/30 rounded-full"></span>
                    </h1>
                </ScrollReveal>

                <div className="grid gap-10">
                    {posts.map((post, index) => (
                        <ScrollReveal key={post.id} delay={index * 0.1}>
                            <Link href={`/${lang}/blog/${post.id}`} className="group block">
                                <article className="bg-card/50 backdrop-blur-sm p-8 rounded-none border-l-4 border-transparent hover:border-accent hover:bg-muted/10 transition-all duration-300">
                                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3 font-mono">
                                        <Calendar className="w-3 h-3" />
                                        <time dateTime={post.date}>{post.date}</time>
                                    </div>
                                    <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 group-hover:text-accent transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-foreground/70 mb-6 line-clamp-2 leading-relaxed">
                                        {post.description}
                                    </p>
                                    <div className="flex items-center text-accent font-medium text-sm group-hover:underline underline-offset-4 tracking-wide uppercase">
                                        Read more <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </article>
                            </Link>
                        </ScrollReveal>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-muted-foreground text-center py-12 font-light">No posts found.</p>
                    )}
                </div>
            </div>
        </Section>
    );
}
