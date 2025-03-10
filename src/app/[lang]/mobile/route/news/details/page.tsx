import { getTranslations } from "@/lib/i18n";
import NewsDetailsContent from "@/components/mobile/NewsDetailsContent"; // 将客户端逻辑移到新组件
import "@/styles/mobile/details.css";

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return {
    title: t.newspage || "News Title",
    description: "Details of a news or blog post",
    alternates: {
      canonical: `/${lang}/route/news/details`,
      languages: {
        en: "/en/route/news/details",
        zh: "/zh/route/news/details",
        ja: "/ja/route/news/details",
      },
    },
  };
}

export default async function DetailsPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return (
    <div>
      <NewsDetailsContent lang={lang} translations={t} />
    </div>
  );
}
