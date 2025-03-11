import { getTranslations } from "@/lib/i18n";
import MobileLayoutClient from "@/components/mobile/MobileLayoutClient";
import ScaleContainer from "@/components/mobile/ScaleContainer";
import StickyHeader from "@/components/mobile/stickyHeader";

import "@/styles/mobile/route.css";
import "@/styles/mobile/index.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default async function MobileLayout({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return (
    <html lang="ja">
      <body>
        <StickyHeader lang={lang} translations={t}> </StickyHeader>
        <ScaleContainer>
          <MobileLayoutClient lang={lang} translations={t}>
            {children}
          </MobileLayoutClient>
        </ScaleContainer>
      </body>
    </html>
  );
}
