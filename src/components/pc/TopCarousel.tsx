'use client' // 确保在文件顶部，无多余空格或换行

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface CustomImage {
  type: 'custom'
  aa: string
  bb: string
}

interface NewsItem {
  time: string
  summary: string
  details: string
}

interface Translations {
  rotate_t1: string
  rotate_t2: string
  noContent: string
}

export default function TopCarousel({
  images,
  lang,
  initialNewsData,
  translations,
}: {
  images: (string | CustomImage)[]
  lang: string
  initialNewsData: NewsItem[]
  translations: Translations
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [newsData] = useState<NewsItem[]>(initialNewsData)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    const currentImage = images[currentIndex]
    const logoUrl =
      typeof currentImage === 'string' && currentImage === '/images/top/pixta_80797973_L.png'
        ? 'url(/images/logo_color2.png)'
        : 'url(/images/xfuture_logo.png)'
    document.documentElement.style.setProperty('--logo-image', logoUrl)
    return () => {
      document.documentElement.style.setProperty('--logo-image', 'url(/images/logo_color.png)')
    }
  }, [currentIndex, images])

  const handleNavigation = () => {
    if (newsData.length > 0) {
      router.push(`/${lang}/route/news/details?section=a&index=0`)
    }
  }

  return (
    <div className="rotate">
      <div className="rotate-img">
        {images.map((image, index) => {
          if (typeof image === 'string') {
            return (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className={`slide ${index === currentIndex ? 'active' : ''}`}
              />
            )
          } else {
            return (
              <div
                key={index}
                className={`slide custom-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img src={image.bb} alt="Background" className="image-bb" />
                <img src={image.aa} alt="Center" className="image-aa" />
              </div>
            )
          }
        })}
      </div>
      <div className="rotate-box">
        <span className="rotate-t1">Beyond a comfortable future</span>
        <span className="rotate-t2">{translations.rotate_t1}</span>
        <span className="rotate-t3">{translations.rotate_t2}</span>
      </div>
      <div className="rotate-news">
        <span>News</span>
        <div className="tnews">
          {newsData.length > 0 ? (
            <div>
              <span className="tnews-time">{newsData[0].time}</span> 
              <span className="tnews-summary">{newsData[0].summary}</span>
            </div>
          ) : (
            <div className="no-tnews">{translations.noContent}</div>
          )}
        </div>
        <img
          src="/images/top/group612.png"
          alt="Contact"
          className="news-img"
          onClick={handleNavigation}
        />
      </div>
    </div>
  )
}