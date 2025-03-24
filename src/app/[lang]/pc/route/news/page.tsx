import { getTranslations } from '@/lib/i18n'
import NewsList from '@/components/pc/NewsList' // 将客户端逻辑移到新组件
import axios from 'axios'
import dayjs from 'dayjs'
import '@/styles/pc/route.css'
import '@/styles/pc/news.css'

// 定义新闻项的类型
interface NewsItem {
  time: string
  summary: string
  details: string
}

// 获取新闻数据的函数
async function fetchNewsData(lang: string) {
  try {
    const response = await axios.get("http://localhost:3000/api/news")
    const data = response.data.data

    const formattedData1: NewsItem[] = data
      .filter((item: any) => item.category === 'a')
      .map((item: any) => ({
        time: dayjs(item.publishDate).format('YYYY/MM/DD'),
        summary: lang === 'en' ? item.title_en : lang === 'zh' ? item.title_cn : item.title,
        details: lang === 'en' ? item.content_en : lang === 'zh' ? item.content_cn : item.content,
      }))
    const formattedData2: NewsItem[] = data
      .filter((item: any) => item.category === 'b')
      .map((item: any) => ({
        time: dayjs(item.publishDate).format('YYYY/MM/DD'),
        summary: lang === 'en' ? item.title_en : lang === 'zh' ? item.title_cn : item.title,
        details: lang === 'en' ? item.content_en : lang === 'zh' ? item.content_cn : item.content,
      }))

    return { newsData1: formattedData1, newsData2: formattedData2 }
  } catch (error) {
    console.error('Failed to fetch news data:', error)
    return { newsData1: [], newsData2: [] }
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.newspage,
    description: t.news_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_icon.jpg",
    alternates: {
      canonical: `/${lang}/route/news`,
      languages: {
        'en': '/en/route/news',
        'zh': '/zh/route/news',
        'ja': '/ja/route/news',
      },
    },
  }
}

export default async function NewsPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)
  const { newsData1, newsData2 } = await fetchNewsData(lang)

  // 调试翻译和新闻数据
  console.log('Lang:', lang)
  console.log('Translations:', t)
  console.log('newsData1:', newsData1)
  console.log('newsData2:', newsData2)

  return (
    <div>
      <div className="route-select">
        <div className="route-f1">{t.news.title}</div>
        <div className="route-line">
          <span className="route-f2">{t.news.home}</span>
          <img src="/images/Polygon2.png" alt="Contact" />
          <span className="route-f3">{t.news.title2}</span>
        </div>
      </div>

      <NewsList
        lang={lang}
        newsData1={newsData1}
        newsData2={newsData2}
        translations={{
          option1: t.news.option1,
          option2: t.news.option2,
          noContent: t.news.noContent,
        }}
      />
    </div>
  )
}