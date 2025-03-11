'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface NewsItem {
  time: string
  summary: string
  details: string
}

interface Translations {
  news_text1: string
  news_text4: string
  option1: string
  option2: string
  noContent: string
}

export default function NewsSection({
  lang,
  newsData1,
  newsData2,
  translations,
}: {
  lang: string
  newsData1: NewsItem[]
  newsData2: NewsItem[]
  translations: Translations
}) {
  const [activeSection, setActiveSection] = useState<'a' | 'b'>('a')
  const router = useRouter()

  const currentData = activeSection === 'a' ? newsData1 : newsData2
  const newsPerPage = 4
  const indexOfLastNews = 1 * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = currentData.slice(indexOfFirstNews, indexOfLastNews)

  const handleNavigation = (newsIndex: number) => {
    router.push(`/${lang}/route/news/details?section=${activeSection}&index=${newsIndex}`)
  }

  return (
    <section className="news-line">
      <div className="title">
        <div className='title_n1'>News / Blog</div>
        <span>{translations.news_text1}</span>
        <br />
      </div>
      <div className="rrequirements-button" style={{ marginLeft: '500px' }}>
        <button
          className={`${activeSection === 'a' ? 'active' : ''}`}
          onClick={() => setActiveSection('a')}
        >
          {translations.option1}
        </button>
        <button
          className={`${activeSection === 'b' ? 'active' : ''}`}
          onClick={() => setActiveSection('b')}
        >
          {translations.option2}
        </button>
      </div>

      <div className="news-list">
        {currentNews.length > 0 ? (
          currentNews.map((news, index) => (
            <div
              key={index}
              className="news-item"
              onClick={() => handleNavigation(index)}
            >
              <div className="news-time">{news.time}</div>
              <div className="news-t">
                {activeSection === 'a' ? translations.option1 : translations.option2}
              </div>
              <div className="news-summary">{news.summary}</div>
            </div>
          ))
        ) : (
          <div className="no-news">{translations.noContent}</div>
        )}
      </div>

      <div className="go-news_blog">
        <Link href={`/${lang}/route/news`} style={{
                    textDecoration:'none',
                  }}>
          <div className="topgobutton">
            <span>{translations.news_text4}</span>
          </div>
        </Link>
      </div>
    </section>
  )
}