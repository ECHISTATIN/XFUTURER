import { getTranslations } from "@/lib/i18n";
import MobileHomeContent from "@/components/mobile/MobileHomeContent"; // 将客户端逻辑移到新组件
import axios from "axios";
import dayjs from "dayjs";
import "@/styles/mobile/index.css";

// 定义新闻项的类型
interface NewsItem {
  time: string;
  summary: string;
  details: string;
}

// 获取新闻数据的函数
async function fetchNewsData(lang: string) {
  try {
    const response = await axios.get("http://localhost:3000/api/news");
    const data = response.data.data;

    const formattedData1: NewsItem[] = data
      .filter((item: any) => item.category === "a")
      .map((item: any) => ({
        time: dayjs(item.publishDate).format("YYYY/MM/DD"),
        summary:
          lang === "en"
            ? item.title_en
            : lang === "zh"
            ? item.title_cn
            : item.title,
        details:
          lang === "en"
            ? item.content_en
            : lang === "zh"
            ? item.content_cn
            : item.content,
      }));
    const formattedData2: NewsItem[] = data
      .filter((item: any) => item.category === "b")
      .map((item: any) => ({
        time: dayjs(item.publishDate).format("YYYY/MM/DD"),
        summary:
          lang === "en"
            ? item.title_en
            : lang === "zh"
            ? item.title_cn
            : item.title,
        details:
          lang === "en"
            ? item.content_en
            : lang === "zh"
            ? item.content_cn
            : item.content,
      }));

    return { newsData1: formattedData1, newsData2: formattedData2 };
  } catch (error) {
    console.error("Failed to fetch news data:", error);
    return { newsData1: [], newsData2: [] };
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return {
    title: t["top.rotate_t1"] || "Beyond a comfortable future",
    description:
      t["top.intr_wwa1"] || "We are a company focused on IT solutions",
    alternates: {
      canonical: `/${lang}/mobile`,
      languages: {
        en: "/en/mobile",
        zh: "/zh/mobile",
        ja: "/ja/mobile",
      },
    },
  };
}

export default async function MobileHomePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  const { newsData1, newsData2 } = await fetchNewsData(lang);

  return (
    <div className="toppage">
      <MobileHomeContent
        lang={lang}
        newsData1={newsData1}
        newsData2={newsData2}
        translations={t}
      />
    </div>
  );
}
