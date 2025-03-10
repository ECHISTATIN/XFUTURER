import { getTranslations } from '@/lib/i18n'
import ServiceContent from '@/components/mobile/ServiceContent'
import '@/styles/mobile/service.css'
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.servicepage || 'Service',
    description: t.servicepage || 'Service overview',
    alternates: {
      canonical: `/${lang}/route/service`,
      languages: {
        'en': '/en/route/service',
        'zh': '/zh/route/service',
        'ja': '/ja/route/service',
      },
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)
  return (
     <ServiceContent translations={t} />
  )
}