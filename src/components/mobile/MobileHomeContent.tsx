'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

interface NewsItem {
  time: string
  summary: string
  details: string
}

interface Translations {
  [key: string]: any // 根据你的翻译文件结构调整类型
}

const images = [
  '/images/mobile/pixta_44374269_XL.png',
  '/images/mobile/pixta_90741248_L.png',
  '/images/mobile/group1263.png',
]

export default function MobileHomeContent({
  lang,
  newsData1,
  newsData2,
  translations: t,
}: {
  lang: string
  newsData1: NewsItem[]
  newsData2: NewsItem[]
  translations: Translations
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [activeSection, setActiveSection] = useState<'a' | 'b'>('a')
  const router = useRouter()

  const newsPerPage = 3
  const indexOfLastNews = 1 * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentData = activeSection === 'a' ? newsData1 : newsData2
  const currentNews = currentData.slice(indexOfFirstNews, indexOfLastNews)

  useEffect(() => {
    const currentImage = images[currentIndex]
    document.documentElement.style.setProperty(
      '--logo-image',
      currentImage === '/images/mobile/group1263.png'
        ? 'url(/images/mobile/logo_white.png)'
        : 'url(/images/mobile/logo_color.png)'
    )
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleNavigation = (newsIndex: number) => {
    router.push(`/${lang}/mobile/route/news/details?section=${activeSection}&index=${newsIndex}`)
  }

  return (
    <div>
      <div className="rotate">
        <div className="rotate-img">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index + 1}`}
              className={`slide ${index === currentIndex ? 'active' : ''}`}
            />
          ))}
        </div>
        <div className="rotate-box">
          <span className="rotate-t1">Beyond a comfortable future</span>
          <span className="rotate-t2">{t.top.rotate_t1}</span>
          <span className="rotate-t3">{t.top.rotate_t2}</span>
        </div>
        <div className="rotate-news">
          <span className="rotate-tt">News</span>
          <div className="rotate-news-line"></div>
          <div className="tnews">
            {newsData1.length > 0 ? (
              <div className="tnews-have">
                <span className="tnews-time">{newsData1[0].time}</span> 
                <span className="tnews-summary">{newsData1[0].summary}</span>
              </div>
            ) : (
              <div className="no-tnews">{t.news.noContent}</div>
            )}
          </div>
          <img
            src="/images/mobile/group612.png"
            alt="Contact"
            className="news-img"
            onClick={newsData1.length > 0 ? () => handleNavigation(0) : undefined}
          />
        </div>
      </div>

      <section className="introduce">
        <div className="intr_wwa">
          <div className="text-container">
            <div className="text-container-tt">Who we are?</div>
            <img
              src="/images/line62.png"
              alt="Contact"
              style={{ height: '1px', width: '159px' }}
            />
            <span>{t.top.intr_wwa1}</span>
            <div className="intr-p1">{t.top.intr_wwa2}</div>
            <div className="intr-p2">{t.top.intr_wwa3}</div>
            <img
              src="/images/mobile/pixta_48356075_XL.png"
              alt="Contact"
              style={{ marginLeft: '0px' }}
            />
          </div>
        </div>

        <div className="intr_service">
          <div className="service-h2">
            <div className="service-h2-s">Service</div>
            <br />
            <div className="service-h2-p">{t.top.st}</div>
          </div>
          <div className="service-items">
            <div className="row">
              <div className="image">
                <img src="/images/mobile/pixta_79124435_XL.png" alt="Image" />
              </div>
              <div className="text" style={{ marginTop: '30px' }}>
                <h2>SES</h2>
                <p style={{ width: '451px' }}>{t.top.service_text1}</p>
                <Link
                  href={`/${lang}/mobile/route/service`}
                  style={{ textDecoration: 'none', color: '#333333' }}
                >
                  <span>View more</span>
                </Link>
                <img
                  src="/images/line62.png"
                  alt="Contact"
                  style={{
                    height: '1px',
                    width: '100px',
                    marginLeft: '30px',
                    marginTop: '-10px',
                  }}
                />
              </div>
            </div>

            <div className="row" style={{ marginTop: '40px' }}>
              <div className="image">
                <img src="/images/mobile/pixta_55069107_XL.png" alt="Image" />
              </div>
              <div className="text" style={{ marginLeft: '0px', marginTop: '30px' }}>
                <h2>{t.top.service_text2}</h2>
                <p style={{ width: '451px' }}>{t.top.service_text3}</p>
                <Link
                  href={`/${lang}/mobile/route/service`}
                  style={{ textDecoration: 'none', color: '#333333' }}
                >
                  <span>View more</span>
                </Link>
                <img
                  src="/images/line62.png"
                  alt="Contact"
                  style={{
                    height: '1px',
                    width: '100px',
                    marginLeft: '30px',
                    marginTop: '-10px',
                  }}
                />
              </div>
            </div>
          </div>
          <div className="service-page-back">
            <Link href={`/${lang}/mobile/route/service`}>
              <div className="generalbutton">
                <div className="generalbuttontext">{t.top.intr_service_button}</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="contact">
        <div className="contact-picture">
          <img src="/images/mobile/group1230.png" alt="Contact" />
        </div>
        <div className="items">
          <div className="phone">
            <div className="icon-1">
              <img src="/images/mobile/group592.png" alt="Phone icon" />
            </div>
            <div className="text">
              <div className="text1">{t.top.contact_text1}</div>
              <div className="text2">{t.top.contact_text2} / 9:00-18:00</div>
            </div>
          </div>

          <div className="message">
            <Link href={`/${lang}/mobile/route/contact`}>
              <div
                className="mes"
                style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}
              >
                <div className="icon-2">
                  <img src="/images/mobile/group595.png" alt="Message icon" />
                </div>
                <div className="text1">{t.top.message}</div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="recruit">
        <Link href={`/${lang}/mobile/route/recruit`}>
          <div className="bkpicture">
            <div className="bkpicture-text-1" style={{ width: '133px' }}>
              {t.top.recruit_text1}
            </div>
            <div className="bkpicture-text-2">Recruit</div>
            <div className="bkpicture-text-3">{t.top.recruit_text2}</div>
            <div className="bkpicture-icon">
              <img src="/images/group588.png" alt="Recruit icon" />
            </div>
          </div>
        </Link>
      </section>

      <section className="introduce">
        <div className="intr_company">
          <div style={{ marginLeft: '40px' }}>
            <div className="text">
              <div className="intr_company_tt">Company</div>
              <img
                src="/images/line62.png"
                alt="Contact"
                style={{ height: '1px', width: '159px' }}
              />
              <div className="intr_company_sp">{t.top.introduce_text1}</div>
              <br />
              <div className="intr_company_text">{t.top.introduce_text2}</div>
            </div>
            <div
              className="generalbutton"
              style={{ marginLeft: '50px', marginTop: '50px' }}
            >
              <Link href={`/${lang}/mobile/route/introduce`}>
                <div className="generalbuttontext">{t.top.introduce_text3}</div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="topnews-line">
        <div className="title" style={{ marginLeft: '40px', marginTop: '60px' }}>
          <div className="news-line-tt">News / Blog</div>
          <img
            src="/images/line62.png"
            alt="Contact"
            style={{ height: '1px', width: '159px' }}
          />
          <div className="intr_company_sp">{t.top.news_text1}</div>
          <br />
        </div>
        <div className="rrequirements-button" style={{ display: 'flex', flexDirection: 'row' }}>
          <button
            className={`${activeSection === 'a' ? 'active' : ''}`}
            onClick={() => setActiveSection('a')}
          >
            {t.news.option1}
          </button>
          <button
            className={`${activeSection === 'b' ? 'active' : ''}`}
            onClick={() => setActiveSection('b')}
          >
            {t.news.option2}
          </button>
        </div>

        <div className="news-list">
          {currentNews.length > 0 ? (
            currentNews.map((news, index) => (
              <div key={index} className="news-item" onClick={() => handleNavigation(index)}>
                <div className="news-fl">
                  <div className="news-time">{news.time}</div>
                  <div className="news-t">
                    {activeSection === 'a' ? t.news.option1 : t.news.option2}
                  </div>
                </div>
                <div className="news-summary">{news.summary}</div>
              </div>
            ))
          ) : (
            <div className="no-news">{t.news.noContent}</div>
          )}
        </div>

        <div
          className="generalbutton"
          style={{ marginLeft: '90px', marginTop: '50px', marginBottom: '50px' }}
        >
          <Link href={`/${lang}/mobile/route/news`}>
            <div className="generalbuttontext">
              <span>{t.top.news_text4}</span>
            </div>
          </Link>
        </div>
      </section>
    </div>
  )
}