'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface NewsItem {
  time: string
  summary: string
  details: string
}

interface Translations {
  option1: string
  option2: string
  noContent: string
}

export default function NewsList({
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
  const [currentPage, setCurrentPage] = useState(1)
  const router = useRouter()

  const newsPerPage = 10
  const currentData = activeSection === 'a' ? newsData1 : newsData2
  const indexOfLastNews = currentPage * newsPerPage
  const indexOfFirstNews = indexOfLastNews - newsPerPage
  const currentNews = currentData.slice(indexOfFirstNews, indexOfLastNews)

  const handleNavigation = (newsIndex: number) => {
    router.push(`/${lang}/route/news/details?section=${activeSection}&index=${newsIndex}&category=${activeSection}`)
  }

  const nextPage = () => {
    if (currentPage * newsPerPage < currentData.length) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const totalPages = Math.ceil(currentData.length / newsPerPage)

  const getPaginationButtons = () => {
    const buttons: (number | string)[] = []
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i)
      }
    } else {
      if (currentPage < 5) {
        buttons.push(1, 2, 3, 4, 5, '...', totalPages)
      } else if (currentPage > totalPages - 5) {
        buttons.push(1, '...', totalPages - 4, totalPages - 3, totalPages - 2, totalPages - 1, totalPages)
      } else {
        buttons.push(1, '...', currentPage - 1, currentPage, currentPage + 1, '...', totalPages)
      }
    }
    return buttons
  }

  return (
    <div className="nnews-line">
      <div className="nrequirements-button">
        <button
          className={`${activeSection === 'a' ? 'active' : ''}`}
          onClick={() => {
            setActiveSection('a')
            setCurrentPage(1)
          }}
        >
          {translations.option1}
        </button>
        <button
          className={`${activeSection === 'b' ? 'active' : ''}`}
          onClick={() => {
            setActiveSection('b')
            setCurrentPage(1)
          }}
        >
          {translations.option2}
        </button>
      </div>

      <div className="nnews-list">
        {currentNews.length > 0 ? (
          currentNews.map((news, index) => (
            <div key={index} className="nnews-item" onClick={() => handleNavigation(index)}>
              <div className="nnews-time">{news.time}</div>
              <div className="nnews-t">
                {activeSection === 'a' ? translations.option1 : translations.option2}
              </div>
              <div className="nnews-summary">{news.summary}</div>
            </div>
          ))
        ) : (
          <div className="no-news">{translations.noContent}</div>
        )}
      </div>

      <div className="pagination">
        <button
          className="arrow"
          onClick={prevPage}
          disabled={currentPage === 1}
        >
          ←
        </button>

        {getPaginationButtons().map((button, index) => (
          <button
            key={index}
            className={`page-num ${button === currentPage ? 'active' : ''}`}
            onClick={() => {
              if (typeof button === 'number') setCurrentPage(button)
            }}
            disabled={button === '...'}
          >
            {button}
          </button>
        ))}

        <button
          className="arrow"
          onClick={nextPage}
          disabled={currentPage * newsPerPage >= currentData.length}
        >
          →
        </button>
      </div>
    </div>
  )
}