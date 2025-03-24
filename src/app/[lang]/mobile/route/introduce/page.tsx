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
    title: t.introducepage,
    description: t.introduce_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_icon.jpg",
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
      <IntroduceContent lang={lang} translations={t} />
    </div>
  )
}