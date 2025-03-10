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

  return (
    <div className='adopt-img'>
      <AdoptContent lang={lang} translations={t} />
    </div>
  )
}