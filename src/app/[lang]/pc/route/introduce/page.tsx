import { getTranslations } from '@/lib/i18n'
import MapComponent from '@/components/pc/MapComponent' // 直接导入，不使用 dynamic
import Link from 'next/link'
import '../../../../../styles/pc/route.css'
import '../../../../../styles/pc/introduce.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.introducepage,
    description: t.introduce_meta_d,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_icon.jpg",
    alternates: {
      canonical: `/${lang}/route/introduce`,
      languages: {
        'en': '/en/route/introduce',
        'zh': '/zh/route/introduce',
        'ja': '/ja/route/introduce',
      },
    },
  }
}

export default async function IntroducePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  // 将 timeline 转换为数组
  const timeline = t.introduce.timeline ? (t.introduce.timeline as { year: string; month: string; event: string }[]) : []

  return (
    <div className='introduce-backimg'>
      <div className="route-select">
        <div className="route-f1">{t.introduce.company_overview}</div>
        <div className="route-line">
          <span className="route-f2">{t.introduce.home}</span>
          <img src="/images/Polygon2.png" alt="Contact" />
          <span className="route-f3">{t.introduce.company_overview}</span>
        </div>
      </div>

      <div className="message-in">
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          Message
        </span>
        <img
          src="/images/line62.png"
          alt="Contact"
          style={{ height: '0.5px', width: '159px' }}
        />
        <span
          style={{
            marginTop: '-10px',
            marginLeft: '188px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.introduce.message}
        </span>
        <span
          style={{
            marginTop: '60px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '30px',
            letterSpacing: '2.7px',
            lineHeight: '50px',
            width: '700px',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            display: 'block',
          }}
        >
          {t.introduce.trust_and_growth}
        </span>
        <div
          style={{
            marginTop: '56px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '400',
            fontSize: '16px',
            letterSpacing: '1px',
            lineHeight: '33px',
            width: '1100px',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            display: 'block',
          }}
        >
          <div>{t.introduce.welcome_message}</div>
          <br />
          <div>{t.introduce.welcome_message2}</div>
          <br />
          <div>{t.introduce.welcome_message3}</div>
          <br />
          <div>{t.introduce.welcome_message4}</div>
          <br />
          <div>{t.introduce.welcome_message5}</div>
        </div>
        <span
          style={{
            marginTop: '40px',
            marginLeft: '962px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '500',
            fontSize: '16px',
            letterSpacing: '1px',
            lineHeight: '33px',
          }}
        >
          {t.introduce.ceo_name}
        </span>
      </div>

      <div className="profile">
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          Company profile
        </span>
        <img
          src="/images/line62.png"
          alt="Contact"
          style={{ height: '0.5px', width: '159px' }}
        />
        <span
          style={{
            marginTop: '-10px',
            marginLeft: '188px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.introduce.company_profile}
        </span>
        <div className="profile-tb">
          <div
            style={{
              marginTop: '90px',
              width: '800px',
              height: '808px', // 修正为合法值
              borderSpacing: '0',
            }}
          >
            <div className="tb-line" style={{ borderTop: '1px solid #CECECE' }}>
              <div className="tb-f1">{t.introduce.company_name}</div>
              <div className="tb-f2">{t.introduce.company_name_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.establishment_date}</div>
              <div className="tb-f2">{t.introduce.establishment_date_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.address}</div>
              <div className="tb-f2">
                <span>{t.introduce.address_value1}</span>
                <span>{t.introduce.address_value2}</span>
              </div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.ceo}</div>
              <div className="tb-f2">{t.introduce.ceo_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.capital}</div>
              <div className="tb-f2">{t.introduce.capital_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.business_hours}</div>
              <div className="tb-f2">{t.introduce.business_hours_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.main_banks}</div>
              <div className="tb-f2">
                <span>{t.introduce.main_banks_value}</span>
                <span>{t.introduce.main_banks_value2}</span>
              </div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.holidays}</div>
              <div className="tb-f2">{t.introduce.holidays_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.business_activities}</div>
              <div
                className="tb-f2"
                style={{ display: 'flex', flexDirection: 'column' }}
              >
                <span>{t.introduce.business_activities_value1}</span>
                <span>{t.introduce.business_activities_value2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="access">
        <span
          style={{
            marginLeft: '287px',
            fontFamily: 'Poppins, sans-serif',
            marginTop: '77px',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          Access
        </span>
        <span
          style={{
            marginLeft: '417px',
            marginTop: '-10px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.introduce.access}
        </span>
        <div>
          <MapComponent />
        </div>
        <span
          style={{
            marginTop: '23px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.introduce.xfuture}
        </span>
        <span
          style={{
            marginTop: '4px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '400',
            fontSize: '15px',
            letterSpacing: '0.9px',
            width: '700px',
            wordWrap: 'break-word',
            wordBreak: 'break-word',
            display: 'block',
          }}
        >
          {t.introduce.address_full}
        </span>
        <div className="traffic" style={{ display: 'flex', marginTop: '21px',alignItems:'center' }}>
          <img src="/images/group630.png" alt="Traffic icon" />
          <div className="traffic-way">
            <ul>
              <li>{t.introduce.station_access1}</li>
              <li>{t.introduce.station_access2}</li>
              <li>{t.introduce.station_access3}</li>
            </ul>
          </div>
        </div>
        <div className="google">
          <a
            href="https://www.google.com/maps?q=〒103-0007+東京都中央区日本橋浜町３-２３-１ACN日本橋リバーサイドビル８Ｆ"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.introduce.view_google_map}
          </a>
        </div>
      </div>

      <div className="history">
        <span
          style={{
            marginLeft: '339px',
            fontFamily: 'Poppins, sans-serif',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          History
        </span>
        <span
          style={{
            marginLeft: '476px',
            marginTop: '-10px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.introduce.history}
        </span>
        <div className="history-axis">
          {timeline.map((event, index) => (
            <div className="axis" key={index}>
              <span className="axis-1">{event.year} </span>
              <span className="axis-2">{event.month}</span>
              <span className="axis-3">{event.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}