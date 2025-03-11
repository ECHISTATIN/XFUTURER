"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
interface Translations {
  [key: string]: any; // 根据你的翻译文件结构调整类型
}

export default function MobileLayoutClient({
  lang,
  translations: t,
  children,
}: {
  lang: string;
  translations: Translations;
  children: React.ReactNode;
}) {
  const [selectedLanguage, setSelectedLanguage] = useState(lang);

  // 根据语言切换字体
  const fontClass =
    selectedLanguage === "zh"
      ? "font-black"
      : selectedLanguage === "en"
      ? "font-newRoman"
      : "font-default";

  return (
    <div className={fontClass}
    >
      <header className="header">
        <div className="logo">
          <Link href={`/${lang}/mobile/top`}>XFuture</Link>
        </div>
        <div className="adopt_consult">
          <Link href={`/${lang}/mobile/route/recruit`} className="adopt-link">
            <div className="adopt">
              <img src="/images/mobile/group597.png" alt="Adopt Icon" />
              <span>{t.adoptpage_m}</span>
            </div>
          </Link>
          <Link href={`/${lang}/mobile/route/contact`} className="consult-link">
            <div className="consult">
              <img src="/images/mobile/group1254.png" alt="Consult Icon" />
              <span>{t.contactpage_m}</span>
            </div>
          </Link>
        </div>
      </header>

      <main>{children}</main>

      <footer className="bottom">
        <div className="bottom-box">
          <div className="address-box">
            <span>{t.address}</span>
          </div>
          <div className="phone-box">
            <img src="/images/mobile/group569.png" alt="" />
            <div>03-6826-0688</div>
          </div>
          <div className="button-box">
            <Link href={`/${lang}/mobile/route/recruit`} className="adopt-link">
              <button className="button">Recruit</button>
            </Link>
            <Link
              href={`/${lang}/mobile/route/contact`}
              className="consult-link"
            >
              <button className="button">Contact</button>
            </Link>
          </div>
          <div className="nav-box">
            <nav>
              <table className="nav-table">
                <tbody>
                  <tr>
                    <td>
                      <Link href={`/${lang}/mobile/top`} className="active">
                        {t.toppage}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href={`/${lang}/mobile/route/introduce`}>
                        {t.introducepage}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href={`/${lang}/mobile/route/service`}>
                        {t.servicepage}
                      </Link>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <Link href={`/${lang}/mobile/route/news`}>
                        {t.newspage}
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </nav>
          </div>
          <span className="nav-c">{t.copyright}</span>
        </div>
        <ScrollToTop />
      </footer>
    </div>
  );
}
