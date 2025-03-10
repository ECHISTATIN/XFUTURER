// src/components/pc/MessageCarousel.tsx
'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

interface Message {
  img: string
  text: string
}

export default function MessageCarousel({
  messages,
  lang,
}: {
  messages: Message[]
  lang: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const router = useRouter()
  const previousIndex = currentIndex === 0 ? messages.length - 1 : currentIndex - 1
  const nextIndex = currentIndex === messages.length - 1 ? 0 : currentIndex + 1

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? messages.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <>
      <div className="message-rotation">
        <div
          className="message-box"
          style={{
            position: 'absolute',
            left: '-490px',
            objectFit: 'cover',
          }}
        >
          <img
            src={messages[previousIndex].img}
            alt="Message"
            className="message-img"
          />
          <div className="message-text">{messages[previousIndex].text}</div>
        </div>

        <img
          src="/images/group1200.png"
          alt="Previous"
          className="message-arrow left-arrow"
          onClick={goToPrevious}
        />

        <div className="message-box">
          <img src={messages[currentIndex].img} alt="Message" className="message-img" />
          <div className="message-text">{messages[currentIndex].text}</div>
        </div>

        <img
          src="/images/group1196.png"
          alt="Next"
          className="message-arrow right-arrow"
          onClick={goToNext}
        />

        <div
          className="message-box"
          style={{
            position: 'absolute',
            right: '-490px',
            objectFit: 'cover',
          }}
        >
          <img
            src={messages[nextIndex].img}
            alt="Message"
            className="message-img"
          />
          <div className="message-text">{messages[nextIndex].text}</div>
        </div>
      </div>

      <div
        className="dots-container"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: '25px',
        }}
      >
        {messages.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            style={{
              width: index === currentIndex ? '8px' : '5px',
              height: index === currentIndex ? '8px' : '5px',
              margin: '0 5px',
              backgroundColor: index === currentIndex ? '#EA5506' : '#1A1A1A',
              borderRadius: '50%',
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </>
  )
}