import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/app/i18n';

export default async function Footer({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);

    return (
        <footer className="bg-background border-t border-border py-8 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center text-center">
                <p className="text-muted-foreground text-sm">{dict.footer.copyright}</p>
                <div className="mt-4 flex space-x-4">
                    {/* Social links placeholder */}
                    <span className="text-muted-foreground hover:text-accent cursor-pointer transition-colors">GitHub</span>
                    <span className="text-muted-foreground hover:text-accent cursor-pointer transition-colors">LinkedIn</span>
                </div>
            </div>
        </footer>
    );
}
