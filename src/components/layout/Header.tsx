import { getDictionary } from '@/lib/dictionary';
import { Locale } from '@/app/i18n';
import NavBar from './NavBar';

export default async function Header({ lang }: { lang: Locale }) {
    const dict = await getDictionary(lang);
    return <NavBar lang={lang} dict={dict.nav} />;
}
