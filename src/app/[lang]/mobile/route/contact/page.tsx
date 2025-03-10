import { getTranslations } from '@/lib/i18n'
import ConsultForm from '@/components/mobile/ConsultForm' // 将客户端逻辑移到新组件
import '@/styles/mobile/consult.css'

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

  return (
    <div>
      <ConsultForm  translations={t} />
    </div>
  )
}