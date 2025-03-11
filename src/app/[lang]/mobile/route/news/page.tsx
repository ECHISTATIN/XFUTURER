import { getTranslations } from '@/lib/i18n'
import NewsContent from '@/components/mobile/NewsContent'
import '@/styles/mobile/news.css'

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

  return (
    <div>
      <NewsContent lang={lang} translations={t}/>
    </div>
  )
}