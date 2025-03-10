"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

interface NewsData {
  id: number;
  title: string;
  title_cn: string;
  title_en: string;
  content: string;
  content_cn: string;
  content_en: string;
  publishDate: string;
  status: number;
  category: string; // 新增字段 category
  imageBase64: string; // 新增字段 imageUrl，用于存储图片的 URL
}
interface Translations {
  [key: string]: any; // 根据你的翻译文件结构调整类型
}
export default function DetailsPage({
  lang,
  translations: t,
}: {
  lang: string;
  translations: Translations;
}) {
  function NewsDetails() {
    const router = useRouter();
    const searchParams = useSearchParams();

    // 获取 section, index, 和 category 参数
    const section = searchParams?.get("section") || "a";
    const index = parseInt(searchParams?.get("index") || "0", 10);
    const category = searchParams?.get("category") || section; // 默认 category 为 section

    const [currentIndex, setCurrentIndex] = useState(index);
    const [newsData, setNewsData] = useState<NewsData[]>([]);
    const [filteredNewsData, setFilteredNewsData] = useState<NewsData[]>([]); // 用于存储过滤后的数据
    const [loading, setLoading] = useState(true);

    const formatDate = (date: string) => {
      const parsedDate = new Date(date);
      const year = parsedDate.getFullYear(); // 直接获取完整年份
      const month = (parsedDate.getMonth() + 1).toString().padStart(2, "0");
      const day = parsedDate.getDate().toString().padStart(2, "0");

      return `${year}/${month}/${day}`; // 用 "/" 代替 "-"
    };

    // 根据 section 获取新闻数据
    const fetchNewsData = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/news?section=${section}`);
        const result = await response.json();

        // 打印从 API 获取的数据
        console.log("Fetched news data:", newsData);

        if (result.code === 200 && result.data) {
          setNewsData(result.data); // 设置整个新闻数据

          // 过滤符合 category 和 section 条件的新闻
          const filtered = result.data.filter(
            (news: NewsData) => news.category === category
          );
          setFilteredNewsData(filtered); // 设置过滤后的数据
        } else {
          console.error("Failed to load news data:", result.message);
        }
      } catch (error) {
        console.error("Error fetching news data:", error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      // 当 section 改变时重新加载新闻数据
      fetchNewsData();
    }, [section, category]);

    useEffect(() => {
      fetchNewsData();
    }, [section, category, t.language]); // 监听语言变化

    useEffect(() => {
      setCurrentIndex(index);
    }, [index]);

    // 获取当前新闻
    const currentNews = filteredNewsData[currentIndex];

    // 打印当前新闻数据
    useEffect(() => {
      console.log("Current Index:", currentIndex);
      console.log("Filtered News Data:", filteredNewsData);
      if (currentNews) {
        console.log("Current news:", currentNews);
      } else {
        console.log("No current news, possibly invalid index.");
      }
    }, [currentIndex, filteredNewsData]);

    const goToPrevious = () => {
      if (currentIndex > 0) {
        const newIndex = currentIndex - 1;
        setCurrentIndex(newIndex);
        router.push(
          `/mobile/route/news/details?section=${section}&index=${newIndex}&category=${category}`
        );
      }
    };

    const goToNext = () => {
      if (currentIndex < filteredNewsData.length - 1) {
        const newIndex = currentIndex + 1;
        setCurrentIndex(newIndex);
        router.push(
          `/mobile/route/news/details?section=${section}&index=${newIndex}&category=${category}`
        );
      }
    };

    const goBackToList = () => {
      router.push("/mobile/route/news");
    };

    if (loading) {
      return <div>Loading...</div>;
    }

    if (!currentNews) {
      return <div>{t.news.noContent}</div>;
    }

    return (
      <div>
        <div className="route-select">
          <div className="route-f1"> {t.news.title}</div>
          <div className="route-line">
            <span className="route-f2">{t.news.home}</span>
            <img src="/images/Polygon2.png" alt="Contact" />
            <span className="route-f3" style={{ color: "#1A1A1A" }}>
              {t.news.title2}
            </span>
            <img src="/images/Polygon2.png" alt="Contact" />
            <span className="route-f3">{t.news.title3}</span>
          </div>
        </div>
        <div className="news-page">
          <div className="c-title">
            <div className="c-time">{formatDate(currentNews.publishDate)}</div>
            <div className="pnews-tt">
              {section === "a" ? t.news.option1 : t.news.option2}
            </div>
          </div>
          <div className="psummary">
            {t.language === "en"
              ? currentNews.title_en
              : t.language === "zh"
              ? currentNews.title_cn
              : t.language === "ja"
              ? currentNews.title
              : currentNews.title}{" "}
            {/* 默认显示 currentNews.content */}
          </div>
          <div className="summary-line"></div>
          <div className="pnews-text">
            {t.language === "en"
              ? currentNews.content_en
              : t.language === "zh"
              ? currentNews.content_cn
              : t.language === "ja"
              ? currentNews.content
              : currentNews.content}{" "}
            {/* 默认显示 currentNews.content */}
          </div>

          {/* 渲染图片 */}
          {/* 渲染图片 */}
          {currentNews.imageBase64 ? (
            <div className="news-image">
              <img src={currentNews.imageBase64} alt={currentNews.title} />
            </div>
          ) : (
            <div></div>
          )}

          <div>
            <div className="summary-line"></div>
            <div className="navigation-buttons">
              <div className="bts-line"></div>
              <button
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className="bts"
                style={{ marginLeft: "25.85px" }}
              >
                Prev
              </button>
              <button
                onClick={goToNext}
                disabled={currentIndex === filteredNewsData.length - 1}
                className="bts"
                style={{ marginRight: "14px", marginLeft: "332px" }}
              >
                Next
              </button>
              <div className="bts-line"></div>
            </div>
            <button onClick={goBackToList} className="goback">
              {t.news.goback}
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <NewsDetails />
    </Suspense>
  );
}
