import { getTranslations } from '@/lib/i18n'
import AdoptContent from '@/components/pc/AdoptContent' // 将客户端逻辑移到新组件
import Link from 'next/link'
import '@/styles/pc/route.css'
import '@/styles/pc/adopt.css'

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
    icons:"/images/xfuture_icon.jpg",
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

  // 调试翻译加载
  console.log('Lang:', lang)
  console.log('Translations:', t)

  return (
    <div className='adopt-img'>
    <div className="adoptpage">
      <div className="route-select">
        <div className="route-f1">{t.adopt.title}</div>
        <div className="route-line">
          <span className="route-f2">{t.adopt.home}</span>
          <img src="/images/Polygon2.png" alt="Contact" />
          <span className="route-f3">{t.adopt.title}</span>
        </div>
      </div>

      <AdoptContent lang={lang} translations={t} />
    </div>
    </div>
  )
}