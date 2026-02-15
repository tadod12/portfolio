import { i18n } from "@/app/i18n";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function LangLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}>) {
  const { lang } = await params;

  return (
    <>
      <Header lang={lang as any} />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer lang={lang as any} />
    </>
  );
}
