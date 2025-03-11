import { getTranslations } from '@/lib/i18n'
import AdoptContent from '@/components/mobile/AdoptContent' // 将客户端逻辑移到新组件
import '@/styles/mobile/adopt.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.adoptpage,
    description: t.adopt_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    alternates: {
      canonical: `/${lang}/route/adopt`,
      languages: {
        'en': '/en/route/adopt',
        'zh': '/zh/route/adopt',
        'ja': '/ja/route/adopt',
      },
    },
  }
}

export default async function AdoptPage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return (
    <div className='adopt-img'>
      <AdoptContent lang={lang} translations={t} />
    </div>
  )
}