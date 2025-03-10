import { getTranslations } from '@/lib/i18n'
import ConsultForm from '@/components/pc/ConsultForm' // 将客户端逻辑移到新组件
import '../../../../../styles/pc/route.css'
import '../../../../../styles/pc/consult.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.consult.contactForm || 'Contact Form',
    description: t.consult.message || 'Submit your inquiry here',
    alternates: {
      canonical: `/${lang}/route/consult`,
      languages: {
        'en': '/en/route/consult',
        'zh': '/zh/route/consult',
        'ja': '/ja/route/consult',
      },
    },
  }
}

export default async function ConsultPage({
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
    <div>
      <div className="route-select">
        <div className="route-f1">{t.consult.contactForm}</div>
        <div className="route-line">
          <span className="route-f2">{t.consult.home}</span>
          <img src="/images/Polygon2.png" alt="Contact" />
          <span className="route-f3">{t.consult.contactForm}</span>
        </div>
      </div>

      <ConsultForm lang={lang} translations={t} />
    </div>
  )
}