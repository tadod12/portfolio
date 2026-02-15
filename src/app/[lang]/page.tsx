import { getDictionary } from "@/lib/dictionary";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import { Locale } from "@/app/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const dict = await getDictionary(lang as Locale);

  return (
    <div className="space-y-0 pb-0">
      <Hero lang={lang as Locale} dict={dict.hero} />
      <About lang={lang as Locale} dict={dict.about} />
      <Experience lang={lang as Locale} dict={dict.experience} />
      <Contact lang={lang as Locale} dict={dict.contact} />
    </div>
  );
}
