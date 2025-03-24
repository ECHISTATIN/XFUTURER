import { getTranslations } from "@/lib/i18n";
import NewsDetailsContent from "@/components/mobile/NewsDetailsContent"; // 将客户端逻辑移到新组件
import "@/styles/mobile/details.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return {
    title: t.newspage,
    description:t.news_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_icon.jpg",
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
