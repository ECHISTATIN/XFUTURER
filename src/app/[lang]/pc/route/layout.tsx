import { getTranslations } from '@/lib/i18n'
import Link from 'next/link'
import '@/styles/pc/route.css'
export default async function FontsLayout({
  children,
  params,
}: {
  children: React.ReactNode
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  // 调试翻译加载
  console.log('Lang:', lang)
  console.log('Translations:', t)

  return (
      <div>
        <div className="route">
          <div className="route-picc">
            <img 
              src="/images/pixta_83375229_XL_dark.png"
              alt="Contact"
            />
          </div>
        </div>

        {children}

        <section className="contact">
          <div className="contact-picture">
            <img src="/images/pixta_98322039_XL.png" alt="Contact" />
          </div>
          <div className="items">
            <div className="phone">
              <div className="icon-1">
                <img src="/images/group591.png" alt="Phone icon" />
              </div>
              <div className="text">
                <div>{t.top.contact_text1}</div>
                <div>
                  <span>Tel</span>  
                  <span>03-6826-0688</span>
                </div>
                <div>{t.top.contact_text2} / 9:00-18:00</div>
              </div>
            </div>
            <div className="message">
              <Link href={`/${lang}/route/contact`}>
                <div className="mes">
                  <div className="icon-2">
                    <img src="/images/group593.png" alt="Message icon" />
                  </div>
                  <div className="text">{t.top.message}</div>
                  <div className="icon-3">
                    <img src="/images/group596.png" alt="Icon" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </div>
  )
}