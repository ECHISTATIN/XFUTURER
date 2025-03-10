import { getTranslations } from '@/lib/i18n'
import MessageCarousel from '@/components/pc/MessageCarousel'
import '@/styles/pc/route.css'
import '@/styles/pc/service.css'

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  return {
    title: t.servicepage || 'Service',
    description: t.servicepage || 'Service overview',
    alternates: {
      canonical: `/${lang}/route/service`,
      languages: {
        'en': '/en/route/service',
        'zh': '/zh/route/service',
        'ja': '/ja/route/service',
      },
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ lang: string }>
}) {
  const { lang } = await params
  const t = await getTranslations(lang)

  const messages = [
    { img: '/images/group1215.png', text: t.service.messages[0].text  },
    { img: '/images/group1216.png', text: t.service.messages[1].text  },
    { img: '/images/group1215.png', text: t.service.messages[2].text  },
  ]
  return (
    <div className='service-backimg'>
      <div className="route-select">
        <div className="route-f1">{t.servicepage}</div>
        <div className="route-line">
          <span className="route-f2">{t.service.home}</span>
          <img src="/images/Polygon2.png" alt="Contact" />
          <span className="route-f3">{t.servicepage}</span>
        </div>
      </div>

      <div className="brief">
        <div className="brief-box">
          <img
            src="/images/pixta_79124435_XL.png"
            alt="Contact"
            style={{
              position: 'absolute',
              top: '560px',
              left: '450px',
              width: '450px',
            }}
          />
          <span
            style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontWeight: 'bold',
              fontSize: '23px',
              letterSpacing: '2.3px',
            }}
          >
            {t.service.SES}
          </span>
          <br />
          <span
            style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontWeight: 'bold',
              fontSize: '15px',
              letterSpacing: '1.5px',
            }}
          >
            ({t.service.System})
          </span>
          <div
            style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontWeight: 'Regular',
              fontSize: '14px',
              letterSpacing: '0.8px',
              lineHeight: '33px',
              marginTop: '30px',
            }}
          >
            {t.service.Through}
          </div>
        </div>
        <div className="brief-box">
          <img
            src="/images/pixta_55069107_XL.png"
            alt="Contact"
            style={{
              position: 'absolute',
              top: '560px',
              left: '1026px',
              width: '450px',
            }}
          />
          <span
            style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontWeight: 'bold',
              fontSize: '23px',
              letterSpacing: '2.3px',
            }}
          >
            {t.service.Development}
          </span>
          <div
            style={{
              fontFamily: 'Noto Sans JP, sans-serif',
              fontWeight: 'Regular',
              fontSize: '14px',
              lineHeight: '33px',
              letterSpacing: '0.8px',
              marginTop: '30px',
            }}
          >
            {t.service.We}
          </div>
        </div>
      </div>

      <div className="supported">
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            marginTop: '77px',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          {t.service.Supported_languages}
        </span>
        <span
          style={{
            marginTop: '-10px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.service.Support}
        </span>
        <div className="supported-box">
          <div className="box-img">
            <img
              src="/images/group1203.png"
              alt="group1203"
              style={{ marginTop: '60px' }}
            />
            <span className="box-l">Java</span>
          </div>
          <div className="box-img">
            <img
              src="/images/mobile/Microsoftnet.png"
              alt="Microsoftnet"
              style={{ height: '130px', marginTop: '70px' }}
            />
            <span className="box-l">Microsoft.NET</span>
          </div>
          <div className="box-img">
            <img
              src="/images/group1210.png"
              alt="group1210"
              style={{ marginTop: '76px' }}
            />
            <span className="box-l">JavaScript</span>
          </div>
        </div>
        <div className="supported-box">
          <div className="box-img">
            <img
              src="/images/group1212.png"
              alt="group1212"
              style={{ marginTop: '112px' }}
            />
            <span className="box-l">Go</span>
          </div>
          <div className="box-img">
            <img
              src="/images/group1214.png"
              alt="group1214"
              style={{ marginTop: '99px' }}
            />
            <span className="box-l">AWS</span>
          </div>
          <div className="box-img">
            <img
              src="/images/group1209.png"
              alt="group1209"
              style={{ marginTop: '103px' }}
            />
            <span className="box-l">PHP</span>
          </div>
        </div>
      </div>

      <div className="case">
        <span
          style={{
            fontFamily: 'Poppins, sans-serif',
            marginTop: '77px',
            fontWeight: '600',
            fontSize: '90px',
          }}
        >
          {t.service.Case_study}
        </span>
        <span
          style={{
            marginTop: '-10px',
            fontFamily: 'Noto Sans JP, sans-serif',
            fontWeight: '700',
            fontSize: '16px',
            letterSpacing: '1px',
          }}
        >
          {t.service.Case}
        </span>

        <MessageCarousel messages={messages} lang={lang} />
      </div>
    </div>
  )
}