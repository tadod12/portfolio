import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Locale } from "@/app/i18n";

const postsDirectory = path.join(process.cwd(), "src/content/blog");

export function getSortedPostsData(lang: Locale) {
    const dir = path.join(postsDirectory, lang);
    if (!fs.existsSync(dir)) return [];

    const fileNames = fs.readdirSync(dir);
    const allPostsData = fileNames.map((fileName) => {
        const id = fileName.replace(/\.mdx$/, "");
        const fullPath = path.join(dir, fileName);
        const fileContents = fs.readFileSync(fullPath, "utf8");
        const matterResult = matter(fileContents);

        return {
            id,
            ...(matterResult.data as { date: string; title: string; description: string }),
        };
    });

    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id: string, lang: Locale) {
    const fullPath = path.join(postsDirectory, lang, `${id}.mdx`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
        id,
        content: matterResult.content,
        ...(matterResult.data as { date: string; title: string; description: string }),
    };
}
