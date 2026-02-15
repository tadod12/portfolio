import { getPostData, getSortedPostsData } from "@/lib/posts";
import { Locale, i18n } from "@/app/i18n";
import { MDXRemote } from "next-mdx-remote/rsc";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    const params = [];
    for (const lang of i18n.locales) {
        const posts = getSortedPostsData(lang);
        for (const post of posts) {
            params.push({ lang, slug: post.id });
        }
    }
    return params;
}

export default async function PostPage({
    params,
}: {
    params: Promise<{ lang: string; slug: string }>;
}) {
    const { lang, slug } = await params;

    try {
        const post = await getPostData(slug, lang as Locale);

        return (
            <article className="min-h-screen py-24 px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mx-auto">
                    <Link
                        href={`/${lang}/blog`}
                        className="inline-flex items-center text-sm text-muted hover:text-accent mb-8 transition-colors"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        Back to Blog
                    </Link>

                    <header className="mb-12">
                        <h1 className="text-3xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                            {post.title}
                        </h1>
                        <div className="flex items-center gap-2 text-muted">
                            <Calendar className="w-4 h-4" />
                            <time dateTime={post.date}>{post.date}</time>
                        </div>
                    </header>

                    <div className="prose prose-lg dark:prose-invert prose-headings:font-heading prose-a:text-accent hover:prose-a:text-accent/80 max-w-none">
                        <MDXRemote source={post.content} />
                    </div>
                </div>
            </article>
        );
    } catch (error) {
        notFound();
    }
}
