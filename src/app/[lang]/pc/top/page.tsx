import { getTranslations } from "@/lib/i18n";
import TopCarousel from "@/components/pc/TopCarousel";
import NewsSection from "@/components/pc/NewsSection";
import Link from "next/link";
import axios from "axios";
import dayjs from "dayjs";
import "@/styles/pc/top.css";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);

  return {
    title: t.toppage,
    description: t.toppage_description,
    keywords: [t["keyword1"], t["keyword2"], t["keyword3"], t["keyword4"], t["keyword5"], t["keyword6"], t["keyword7"], t["keyword8"], t["keyword9"], t["keyword10"], t["keyword11"], t["keyword12"]], // 添加关键词
    icons:"/images/xfuture_logo.png",
    alternates: {
      canonical: `/${lang}/top`,
      languages: {
        en: "/en/top",
        zh: "/zh/top",
        ja: "/ja/top",
      },
    },
  };
}

const images: (string | { type: "custom"; aa: string; bb: string })[] = [
  {
    type: "custom",
    aa: "/images/top/group605.png",
    bb: "/images/top/pixta_83375229_XL_dark.png",
  },
  "/images/top/pixta_44374269_XL.png",
  "/images/top/pixta_80797973_L.png",
  "/images/top/pixta_90741248_L.png",
];

interface NewsItem {
  time: string;
  summary: string;
  details: string;
}

async function fetchNewsData(lang: string) {
  try {
    const response = await axios.get("http://localhost:3000/api/news");
    const data = response.data.data;

    const formattedData1: NewsItem[] = data
      .filter((item: any) => item.category === "a")
      .map((item: any) => ({
        time: dayjs(item.publishDate).format("YYYY/MM/DD"),
        summary:
          lang === "en"
            ? item.title_en
            : lang === "zh"
            ? item.title_cn
            : item.title,
        details:
          lang === "en"
            ? item.content_en
            : lang === "zh"
            ? item.content_cn
            : item.content,
      }));
    const formattedData2: NewsItem[] = data
      .filter((item: any) => item.category === "b")
      .map((item: any) => ({
        time: dayjs(item.publishDate).format("YYYY/MM/DD"),
        summary:
          lang === "en"
            ? item.title_en
            : lang === "zh"
            ? item.title_cn
            : item.title,
        details:
          lang === "en"
            ? item.content_en
            : lang === "zh"
            ? item.content_cn
            : item.content,
      }));

    return { newsData1: formattedData1, newsData2: formattedData2 };
  } catch (error) {
    console.error("Failed to fetch news data:", error);
    return { newsData1: [], newsData2: [] };
  }
}

export default async function PCTopPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  const { newsData1, newsData2 } = await fetchNewsData(lang);

  return (
    <main>
      <div className="toppage">
        <TopCarousel
          images={images}
          lang={lang}
          initialNewsData={newsData1}
          translations={{
            rotate_t1: t.top.rotate_t1,
            rotate_t2: t.top.rotate_t2,
            noContent: t.news.noContent,
          }}
        />

        <section className="introduce">
          <div className="intr_wwa">
            <div className="text-container">
              <div className="mt">Who we are?</div>
              <img
                src="/images/line62.png"
                alt="Line"
                style={{ height: "0.5px", width: "159px" }}
              />
              <span>{t.top.intr_wwa1}</span>
              <p className="intr-p1">{t.top.intr_wwa2}</p>
              <p className="intr-p2">{t.top.intr_wwa3}</p>
            </div>
          </div>

          <div className="intr_service">
            <div className="service-h2">
              <div className="mt">Service</div>
              <br />
              <span>{t.top.st}</span>
            </div>
            <div className="service-items">
              <div className="row">
                <div className="text">
                  <div
                    style={{
                      fontFamily: "Noto Sans JP",
                      fontSize: "23px",
                      letterSpacing: "2.3px",
                      fontWeight: "700",
                    }}
                  >
                    SES
                  </div>
                  <p style={{ width: "451px", marginTop: "20px" }}>
                    {t.top.service_text1}
                  </p>
                  <Link href={`/${lang}/route/service`} style={{
                    textDecoration:'none',
                  }}>
                    <span style={{
                      color:"#333333"
                    }}>View more</span>
                  </Link>
                </div>
                <div className="image">
                  <img
                    src="/images/pixta_79124435_XL.png"
                    alt="Service Image"
                  />
                </div>
              </div>
              <div className="row" style={{ marginTop: "40px" }}>
                <div className="image">
                  <img
                    src="/images/pixta_55069107_XL.png"
                    alt="Service Image"
                  />
                </div>
                <div className="text" style={{ marginLeft: "20px" }}>
                  <div
                    style={{
                      fontFamily: "Noto Sans JP",
                      fontSize: "23px",
                      letterSpacing: "2.3px",
                      fontWeight: "700",
                      width: "451px",
                    }}
                  >
                    {t.top.service_text2}
                  </div>
                  <p style={{ width: "451px", marginTop: "20px" }}>
                    {t.top.service_text3}
                  </p>
                  <Link href={`/${lang}/route/service`}style={{
                    textDecoration:'none',
                  }}>
                  <span style={{
                      color:"#333333"
                    }}>View more</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="service-page-back">
            <Link href={`/${lang}/route/service`}>
              <div className="button">
                <span>{t.top.intr_service_button}</span>
              </div>
            </Link>
          </div>
        </section>

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

        <section className="recruit">
          <Link href={`/${lang}/route/recruit`}>
            <div className="bkpicture">
              <div className="pic-1"></div>
              <div className="text-1" style={{ width: "133px" }}>
                <p>{t.top.recruit_text1}</p>
              </div>
              <div className="text-2">
                <div className="mt" style={{color:'white'}}>Recruit</div>
                <p>{t.top.recruit_text2}</p>
              </div>
              <div className="icon">
                <img src="/images/group588.png" alt="Recruit icon" />
              </div>
            </div>
          </Link>
        </section>

        <section className="introduce">
          <div className="intr_company">
            <div style={{ marginRight: "40px" }}>
              <div className="text">
                <div className="mt">Company</div>
                <span>{t.top.introduce_text1}</span>
                <br />
                <p style={{ width: "451px" }}>{t.top.introduce_text2}</p>
              </div>
              <div className="go-company">
                <Link href={`/${lang}/route/introduce`}>
                  <div>{t.top.introduce_text3}</div>
                </Link>
              </div>
            </div>
            <div>
              <img src="/images/pixta_98693490_XL.png" alt="Company" />
            </div>
          </div>
        </section>

        <NewsSection
          lang={lang}
          newsData1={newsData1}
          newsData2={newsData2}
          translations={{
            news_text1: t.top.news_text1,
            news_text4: t.top.news_text4,
            option1: t.news.option1,
            option2: t.news.option2,
            noContent: t.news.noContent,
          }}
        />
      </div>
    </main>
  );
}
