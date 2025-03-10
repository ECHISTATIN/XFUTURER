import { getTranslations } from '@/lib/i18n'
import NewsDetailsClient from '@/components/pc/NewsDetailsClient' // 将客户端逻辑移到新组件
import { Suspense } from 'react'
import '@/styles/pc/route.css'
import '@/styles/pc/details.css'

// 定义新闻项的类型
interface NewsData {
  id: number
  title: string
  title_cn: string
  title_en: string
  content: string
  content_cn: string
  content_en: string
  publishDate: string
  status: number
  category: string
  imageBase64: string
}

// 获取新闻数据的函数
async function fetchNewsData(section: string, category: string) {
  try {
    const response = await fetch(`http://localhost:3000/api/news?section=${section}`, { cache: 'no-store' })
    const result = await response.json()

    if (result.code === 200 && result.data) {
      const filtered = result.data.filter((news: NewsData) => news.category === category)
      return filtered
    } else {
      console.error('Failed to load news data:', result.message)
      return []
    }
  } catch (error) {
    console.error('Error fetching news data:', error)
    return []
  }
}

export async function generateMetadata({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.newspage|| 'News Title',
    description: 'Details of a news or blog post',
    alternates: {
      canonical: `/${lang}/route/news/details`,
      languages: {
        'en': '/en/route/news/details',
        'zh': '/zh/route/news/details',
        'ja': '/ja/route/news/details',
      },
    },
  }
}

export default async function DetailsPage({
  params,
  searchParams,
}: {
  params: Promise<{ lang: string }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const { lang } = await params
  const resolvedSearchParams = await searchParams
  const section = (resolvedSearchParams.section as string) || 'a'
  const index = parseInt((resolvedSearchParams.index as string) || '0', 10) || 0
  const category = (resolvedSearchParams.category as string) || section

  const t = await getTranslations(lang)
  const newsData = await fetchNewsData(section, category)

  // 调试数据
  console.log('Lang:', lang)
  console.log('Section:', section)
  console.log('Index:', index)
  console.log('Category:', category)
  console.log('News Data:', newsData)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <div>
        <div className="route-select">
          <div className="route-f1">{t.news.title}</div>
          <div className="route-line">
            <span className="route-f2">{t.news.home}</span>
            <img src="/images/Polygon2.png" alt="Contact" />
            <span className="route-f3" style={{ color: '#1A1A1A' }}>
              {t.news.title2}
            </span>
            <img src="/images/Polygon2.png" alt="Contact" />
            <span className="route-f3">{t.news.title3}</span>
          </div>
        </div>
        <NewsDetailsClient
          lang={lang}
          newsData={newsData}
          initialIndex={index}
          section={section}
          category={category}
          translations={{
            title: t.news.title,
            home: t.news.home,
            title2: t.news.title2,
            title3: t.news.title3,
            option1: t.news.option1,
            option2: t.news.option2,
            goback: t.news.goback,
            noContent: t.news.noContent,
          }}
        />
      </div>
    </Suspense>
  )
}