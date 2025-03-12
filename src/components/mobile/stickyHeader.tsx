"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import ScrollToTop from "./ScrollToTop";
import { Modal } from "react-bootstrap"; // 引入 Bootstrap 的 Modal 和 Button 组件
import { useScale } from "./ScaleContainer"; // 导入 useScale
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
  const [showStickyHeader, setShowStickyHeader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const settingsRef = useRef<HTMLDivElement>(null);
  const [selectedLanguage, setSelectedLanguage] = useState(lang);
  const scale = useScale(); // 获取 scale 值
  // 处理页面滚动事件
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const footer = document.querySelector("footer");
      const footerTop = footer
        ? footer.getBoundingClientRect().top + window.scrollY
        : Infinity;
      console.log(scrollPosition);
      console.log("top" + footerTop);
      if (scrollPosition > 500 && scrollPosition < footerTop) {
        setShowStickyHeader(true);
      } else {
        setShowStickyHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeModal = () => setShowModal(false);
  const openModal = () => setShowModal(true);

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = event.target.value;
    setSelectedLanguage(newLang);
    window.location.href = `/${newLang}${window.location.pathname.replace(
      /^\/[^/]+/,
      ""
    )}`;
  };

  // 根据语言切换字体
  const fontClass =
    selectedLanguage === "zh"
      ? "font-black"
      : selectedLanguage === "en"
      ? "font-newRoman"
      : "font-default";

  return (
    <div className={fontClass}>
      {showStickyHeader && (
        <div
          className="sticky-header"
          style={{
            transform: "scale(var(--scale))",
            transformOrigin: "top left",
          }}
        >
          <div className="sticky-logo">
            <Link href={`/${lang}/mobile/top`}>XFuture</Link>
          </div>
          <div className="sticky-header-box">
            <div
              ref={settingsRef}
              className="sticky-settings"
              onClick={openModal}
            >
              <div className="settings-icon">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
            </div>
            <Link href={`/${lang}/mobile/route/recruit`} className="adopt-link">
              <div className="sticky-adopt">
                <img src="/images/mobile/group597.png" alt="Adopt Icon" />
                <span>{t.adoptpage_m}</span>
              </div>
            </Link>
            <Link
              href={`/${lang}/mobile/route/contact`}
              className="consult-link"
            >
              <div className="sticky-consult">
                <img src="/images/mobile/group1254.png" alt="Consult Icon" />
                <span>{t.contactpage_m}</span>
              </div>
            </Link>
          </div>
        </div>
      )}

      {/* Bootstrap Modal */}
      <Modal
        show={showModal}
        onHide={closeModal}
        className="custom-modal"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <div className="language-selector">
            <select
              id="language"
              value={selectedLanguage} // 绑定当前语言状态
              onChange={handleLanguageChange}
              className="form-select"
            >
              <option value="ja">日本語</option>
              <option value="en">English</option>
              <option value="zh">简体中文</option>
            </select>
          </div>

          <table className="modal-table">
            <tbody>
              <tr>
                <td>
                  <Link href={`/${lang}/mobile/top`} className="active">
                    {t.toppage as string}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href={`/${lang}/mobile/route/introduce`}>
                    {t.introducepage as string}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href={`/${lang}/mobile/route/service`}>
                    {t.servicepage as string}
                  </Link>
                </td>
              </tr>
              <tr>
                <td>
                  <Link href={`/${lang}/mobile/route/news`}>{t.newspage as string}</Link>
                </td>
              </tr>
            </tbody>
          </table>

          <div className="mobile-phone-box">
            <img src="/images/mobile/group569.png" alt="" />
            <span>03-6826-0688</span>
          </div>

          <div className="mobile-button-box">
            <Link href={`/${lang}/mobile/route/recruit`} className="adopt-link">
              <button className="topbutton">{t.Recurit as string}</button>
            </Link>

            <Link href={`/${lang}/mobile/route/contact`} className="consult-link">
              <button className="topbutton">{t.Contact as string}</button>
            </Link>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
}
