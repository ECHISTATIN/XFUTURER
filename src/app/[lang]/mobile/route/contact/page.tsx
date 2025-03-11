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
    title: t.consult.contactpage,
    description: t.consult_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
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