import { getTranslations } from '@/lib/i18n'
import AdoptContent from '@/components/pc/AdoptContent' // 将客户端逻辑移到新组件
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
    title: t.adopt.title || 'Recruit',
    description: t.adopt.introduction1 || 'We are looking for partners to create future IT together',
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