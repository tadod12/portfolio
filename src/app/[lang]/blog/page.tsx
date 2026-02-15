import Link from "next/link";
import { getSortedPostsData } from "@/lib/posts";
import { Locale } from "@/app/i18n";
import { Calendar, ArrowRight } from "lucide-react";

export default async function BlogPage({
    params,
}: {
    params: Promise<{ lang: string }>;
}) {
    const { lang } = await params;
    const posts = getSortedPostsData(lang as Locale);

    return (
        <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-5xl font-heading font-bold mb-12 relative inline-block">
                    Blog
                    <span className="absolute -bottom-2 left-0 w-1/3 h-2 bg-accent/30 rounded-full"></span>
                </h1>

                <div className="grid gap-8">
                    {posts.map((post) => (
                        <Link key={post.id} href={`/${lang}/blog/${post.id}`} className="group block">
                            <article className="bg-white dark:bg-neutral-900 p-8 rounded-2xl border border-border hover:border-accent/40 hover:shadow-sm transition-all duration-300">
                                <div className="flex items-center gap-2 text-sm text-muted mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <time dateTime={post.date}>{post.date}</time>
                                </div>
                                <h2 className="text-2xl font-bold mb-3 group-hover:text-accent transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-foreground/70 mb-4 line-clamp-2">
                                    {post.description}
                                </p>
                                <div className="flex items-center text-accent font-medium text-sm group-hover:underline underline-offset-4">
                                    Read more <ArrowRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                                </div>
                            </article>
                        </Link>
                    ))}

                    {posts.length === 0 && (
                        <p className="text-muted text-center py-12">No posts found.</p>
                    )}
                </div>
            </div>
        </div>
    );
}
