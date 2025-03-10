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
    title: t.newspage || 'News / Blog List',
    description: t.newspage || 'Latest news and blog posts',
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