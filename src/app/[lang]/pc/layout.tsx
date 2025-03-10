import { ReactNode } from "react";
import { getTranslations } from "@/lib/i18n";
import LanguageSelect from "@/components/LanguageSwitcher";
import ScrollToTop from "@/components/pc/ScrollToTop";
import ScaleContainer from "@/components/pc/ScaleContainer";
import Link from "next/link";
import '@/styles/globals.css'

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  return (
    <html lang="ja">
      <body>
      <ScaleContainer>
        {/* 头部区域 */}
        <header className="header">
          {/* logo */}
          <div className="logo">
            <h1>
              <Link href={`/${lang}/top`}>XFuture</Link>
            </h1>
          </div>

          {/* 导航 */}
          <nav className="nav">
            <ul>
              <li>
                <Link href={`/${lang}/top`} className="active">
                  {t.toppage}
                </Link>
              </li>
              <li>
                <Link href={`/${lang}/route/introduce`}>{t.introducepage}</Link>
              </li>
              <li>
                <Link href={`/${lang}/route/service`}>{t.servicepage}</Link>
              </li>
              <li>
                <Link href={`/${lang}/route/news`}>{t.newspage}</Link>
              </li>
            </ul>
          </nav>

          {/* 语言切换 */}
          <LanguageSelect currentLang={lang} />

          {/* 采用，咨询 */}
          <div className="adopt_consult">
            <Link href={`/${lang}/route/recruit`} className="adopt-link">
              <div className="adopt">
                <img src="/images/group598.png" alt="Adopt Icon" />
                <span>{t.adoptpage}</span>
              </div>
            </Link>
            <Link href={`/${lang}/route/contact`} className="consult-link">
              <div className="consult">
                <img src="/images/group594.png" alt="Consult Icon" />
                <span>{t.contactpage}</span>
              </div>
            </Link>
          </div>
        </header>

        {children}

        {/* 底部区域 */}
        <footer className="bottom">
          <div className="bottom-box">
            <div className="logo-box">
              <img src="/images/logo_white.png" alt="" />
            </div>

            <div className="address-box">
              <span>{t.address}</span>
            </div>

            <div className="phone-box">
              <img src="/images/group568.png" alt="" />
              <span>03-6826-0688</span>
            </div>

            <div className="button-box">
              <Link href={`/${lang}/route/recruit`} className="adopt-link">
                <button className="button">{t.Recurit}</button>
              </Link>

              <Link href={`/${lang}/route/contact`} className="consult-link">
                <button className="button">{t.Contact}</button>
              </Link>
            </div>

            <div className="nav-box">
              <nav>
                <ul>
                  <li>
                    <Link href={`/${lang}/top`} className="active">
                      {t.toppage}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/route/introduce`}>
                      {t.introducepage}
                    </Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/route/service`}>{t.servicepage}</Link>
                  </li>
                  <li>
                    <Link href={`/${lang}/route/news`}>{t.newspage}</Link>
                  </li>
                </ul>
              </nav>
            </div>
            <span className="nav-c">{t.copyright}</span>
          </div>

          {/* 在此添加返回顶部按钮 */}
          <ScrollToTop />

          {/* 灰色区域 */}
          <div className="bottom-gray"></div>
        </footer>
      </ScaleContainer>
      </body>
    </html>
  );
}
