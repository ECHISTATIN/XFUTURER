'use client'

import { useState, useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

interface NewsData {
  id: number
  title: string
  title_cn: string
  title_en: string
  content: string
  content_cn: string
  content_en: string
  publishDate: string
  status: number
  category: string
  imageBase64: string
}

interface Translations {
  title: string
  home: string
  title2: string
  title3: string
  option1: string
  option2: string
  goback: string
  noContent: string
}

export default function NewsDetailsClient({
  lang,
  newsData,
  initialIndex,
  section,
  category,
  translations,
}: {
  lang: string
  newsData: NewsData[]
  initialIndex: number
  section: string
  category: string
  translations: Translations
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const router = useRouter()
  const searchParams = useSearchParams()

  const formatDate = (date: string) => {
    const parsedDate = new Date(date)
    const year = parsedDate.getFullYear()
    const month = (parsedDate.getMonth() + 1).toString().padStart(2, '0')
    const day = parsedDate.getDate().toString().padStart(2, '0')
    return `${year}/${month}/${day}`
  }

  useEffect(() => {
    const indexFromParams = parseInt(searchParams?.get('index') || '0', 10)
    setCurrentIndex(indexFromParams >= 0 && indexFromParams < newsData.length ? indexFromParams : initialIndex)
  }, [searchParams, initialIndex, newsData.length])

  const currentNews = newsData[currentIndex]

  const goToPrevious = () => {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1
      setCurrentIndex(newIndex)
      router.push(`/${lang}/route/news/details?section=${section}&index=${newIndex}&category=${category}`)
    }
  }

  const goToNext = () => {
    if (currentIndex < newsData.length - 1) {
      const newIndex = currentIndex + 1
      setCurrentIndex(newIndex)
      router.push(`/${lang}/route/news/details?section=${section}&index=${newIndex}&category=${category}`)
    }
  }

  const goBackToList = () => {
    router.push(`/${lang}/route/news`)
  }

  if (!currentNews) {
    return <div>{translations.noContent}</div>
  }

  const getLocalizedTitle = () => {
    switch (lang) {
      case 'en':
        return currentNews.title_en
      case 'zh':
        return currentNews.title_cn
      case 'ja':
      default:
        return currentNews.title
    }
  }

  const getLocalizedContent = () => {
    switch (lang) {
      case 'en':
        return currentNews.content_en
      case 'zh':
        return currentNews.content_cn
      case 'ja':
      default:
        return currentNews.content
    }
  }

  return (
    <div className="news-page">
      <div className="c-title">
        <div className="c-time">{formatDate(currentNews.publishDate)}</div>
        <div className="pnews-tt">
          {section === 'a' ? translations.option1 : translations.option2}
        </div>
      </div>
      <div className="psummary">{getLocalizedTitle()}</div>
      <div className="summary-line"></div>
      <div className="pnews-text">{getLocalizedContent()}</div>

      {currentNews.imageBase64 ? (
        <div className="news-image">
          <img src={currentNews.imageBase64} alt={getLocalizedTitle()} />
        </div>
      ) : (
        <div></div>
      )}

      <div>
        <div className="summary-line"></div>
        <div className="navigation-buttons">
          <div className="bts-line"></div>
          <button
            onClick={goToPrevious}
            disabled={currentIndex === 0}
            className="bts"
            style={{ marginLeft: '25.85px' }}
          >
            Prev
          </button>
          <button
            onClick={goToNext}
            disabled={currentIndex === newsData.length - 1}
            className="bts"
            style={{ marginRight: '14px', marginLeft: '550px' }}
          >
            Next
          </button>
          <div className="bts-line"></div>
        </div>
        <button onClick={goBackToList} className="goback">
          {translations.goback}
        </button>
      </div>
    </div>
  )
}