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
    title: t.servicepage,
    description: t.service_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_icon.jpg",
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