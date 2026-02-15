import { MetadataRoute } from 'next';
import { getSortedPostsData } from '@/lib/posts';
import { i18n } from '@/app/i18n';

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://dodat.dev'; // Replace with actual domain

    // Static routes for each locale
    const routes = i18n.locales.flatMap((lang) => [
        {
            url: `${baseUrl}/${lang}`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/${lang}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/${lang}/experience`,
            lastModified: new Date(),
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/${lang}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/${lang}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly' as const,
            priority: 0.7,
        },
    ]);

    // Dynamic blog posts
    const posts = i18n.locales.flatMap((lang) => {
        const langPosts = getSortedPostsData(lang as any);
        return langPosts.map((post) => ({
            url: `${baseUrl}/${lang}/blog/${post.id}`,
            lastModified: new Date(post.date),
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));
    });

    return [...routes, ...posts];
}
