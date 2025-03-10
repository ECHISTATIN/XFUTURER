import { getTranslations } from '@/lib/i18n'
import MobileLayoutClient from '@/components/mobile/MobileLayoutClient'
import ScaleContainer from '@/components/mobile/ScaleContainer'
import '@/styles/mobile/route.css'
import '@/styles/mobile/index.css'

export default async function MobileLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>
  children: React.ReactNode
}) {
  const { lang } = await params
  const t = await getTranslations(lang)


  return (
    <ScaleContainer>
      <MobileLayoutClient lang={lang} translations={t}>
        {children}
      </MobileLayoutClient>
    </ScaleContainer>
  )
}