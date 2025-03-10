import { getTranslations } from '@/lib/i18n'
import IntroduceContent from '@/components/mobile/IntroduceContent' // 将客户端逻辑移到新组件
import '@/styles/mobile/introduce.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.introduce.company_overview || 'Company Overview',
    description: t.introduce.message || 'Learn more about our company',
    alternates: {
      canonical: `/${lang}/route/introduce`,
      languages: {
        'en': '/en/route/introduce',
        'zh': '/zh/route/introduce',
        'ja': '/ja/route/introduce',
      },
    },
  }
}

export default async function IntroducePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)


  return (
    <div className="introducepage">
      <IntroduceContent translations={t} />
    </div>
  )
}