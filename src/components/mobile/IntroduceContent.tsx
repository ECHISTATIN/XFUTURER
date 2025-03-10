"use client";

import dynamic from "next/dynamic";
import Link from "next/link";

const MapComponent = dynamic(() => import("@/components/mobile/MapComponent"), {
  ssr: false,
});

interface Translations {
  [key: string]: any; // 根据你的翻译文件结构调整类型
}

export default function IntroduceContent({
  lang,
  translations: t,
}: {
  lang: string;
  translations: Translations;
}) {
  const timeline =
    (t.introduce.timeline as {
      year: string;
      month: string;
      event: string;
    }[]) || [];
  return (
    <div className="introducepage">
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
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "75px",
          }}
        >
          Message
        </span>

        <img
          src="/images/li ne62.png"
          alt="Contact"
          style={{
            height: "1px",
            width: "159px",
          }}
        />

        <span
          style={{
            marginTop: "-20px",
            marginLeft: "168px",

            fontWeight: "700",
            fontSize: "28px",
            letterSpacing: "1.7px",
          }}
        >
          {t.introduce.message}
        </span>

        <span
          style={{
            marginTop: "60px",
            marginBottom: "60px",

            fontWeight: "700",
            fontSize: "30px",
            letterSpacing: "3.6px",
            lineHeight: "60px",
            width: "654px",
            wordWrap: "break-word", // 允许长单词换行
            wordBreak: "break-word", // 强制文本换行
            display: "block", // 强制元素为块级显示
          }}
        >
          {t.introduce.trust_and_growth}
        </span>
        <div
          style={{
            fontWeight: "500",
            fontSize: "28px",
            letterSpacing: "1.7px",
            lineHeight: "57px",
            width: "700px",
            wordWrap: "break-word", // 允许长单词换行
            wordBreak: "break-word", // 强制文本换行
            display: "block", // 强制元素为块级显示
          }}
        >
          <div>{t.introduce.welcome_message}</div>
          <br></br>
          <div>{t.introduce.welcome_message2}</div>
          <br></br>
          <div>{t.introduce.welcome_message3}</div>
          <br></br>
          <div>{t.introduce.welcome_message4}</div>
          <br></br>
          <div>{t.introduce.welcome_message5}</div>
        </div>

        <span
          style={{
            marginTop: "40px",
            marginLeft: "400px",

            fontWeight: "700",
            fontSize: "26px",
            letterSpacing: "1.6px",
            lineHeight: "33px",
          }}
        >
          {t.introduce.ceo_name}
        </span>
      </div>

      <div className="profile">
        <div className="profilebi"></div>
        <span
          style={{
            fontFamily: "Poppins, sans-serif",
            fontWeight: "600",
            fontSize: "75px",
          }}
        >
          Company profile
        </span>

        <img
          src="/images/line62.png"
          alt="Contact"
          style={{
            height: "1px",
            width: "159px",
          }}
        />

        <span
          style={{
            marginTop: "-20px",
            marginLeft: "188px",
            fontWeight: "700",
            fontSize: "28px",
            letterSpacing: "1.7px",
          }}
        >
          {t.introduce.company_profile}
        </span>

        <div className="profile-tb">
          <div
            style={{
              marginLeft: "60px",
              marginTop: "70px",
              marginBottom: "65px",
              width: "580px",
              borderSpacing: "0",
            }}
          >
            <div className="tb-line" style={{ borderTop: "1px solid #CECECE" }}>
              <div className="tb-f1">{t.introduce.company_name}</div>
              <div className="tb-f2">{t.introduce.company_name_value}</div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.establishment_date}</div>
              <div className="tb-f2">
                {t.introduce.establishment_date_value}
              </div>
            </div>
            <div className="tb-line">
              <div className="tb-f1">{t.introduce.address}</div>
              <div className="tb-f2">{t.introduce.address_value}</div>
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
                style={{
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <span>{t.introduce.business_activities_value1}</span>
                <span>{t.introduce.business_activities_value2}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="access">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              marginTop: "30px",
              fontWeight: "600",
              fontSize: "75px",
            }}
          >
            Access
          </span>

          <span
            style={{
              marginTop: "-30px",
              marginBottom: "20px",
              fontWeight: "700",
              fontSize: "28px",
              letterSpacing: "1.7px",
            }}
          >
            {t.introduce.access}
          </span>
        </div>
        <div>
          <MapComponent />
        </div>

        <span
          style={{
            marginTop: "23px",
            fontWeight: "700",
            fontSize: "30px",
            letterSpacing: "1.8px",
          }}
        >
          {t.introduce.xfuture}
        </span>

        <span
          style={{
            marginTop: "4px",
            fontWeight: "400",
            fontSize: "26px",
            letterSpacing: "1.6px",
            width: "700px",
            lineHeight: "38px",
            wordWrap: "break-word", // 允许长单词换行
            wordBreak: "break-word", // 强制文本换行
            display: "block", // 强制元素为块级显示
          }}
        >
          {t.introduce.address_full_1}
        </span>
        <span
          style={{
            fontWeight: "400",
            fontSize: "26px",
            letterSpacing: "1.6px",
            width: "700px",
            lineHeight: "38px",
            wordWrap: "break-word", // 允许长单词换行
            wordBreak: "break-word", // 强制文本换行
            display: "block", // 强制元素为块级显示
          }}
        >
          {t.introduce.address_full_2}
        </span>

        <div
          className="traffic"
          style={{
            display: "flex",
            marginTop: "21px",
            alignItems: "center",
          }}
        >
          <img
            src="/images/group630.png"
            alt="group630"
            style={{
              width: "34px",
              height: "46px",
            }}
          ></img>
          <div className="traffic-way">
            <ul>
              <li>{t.introduce.station_access1}</li>
              <li>{t.introduce.station_access2}</li>
              <li>{t.introduce.station_access3}</li>
            </ul>
          </div>
        </div>

        <div className="google">
          <Link
            href="https://www.google.com/maps?q=〒103-0007+東京都中央区日本橋浜町３-２３-１ACN日本橋リバーサイドビル８Ｆ"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t.introduce.view_google_map}
          </Link>
        </div>
      </div>

      <div className="history">
        <div className="historybi"></div>
        <div
          style={{
            marginTop: "70px",
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "center",
          }}
        >
          <span
            style={{
              fontFamily: "Poppins, sans-serif",
              fontWeight: "600",
              fontSize: "75px",
            }}
          >
            History
          </span>

          <span
            style={{
              marginTop: "-30px",
              fontWeight: "700",
              fontSize: "28px",
              letterSpacing: "1.7px",
            }}
          >
            {t.introduce.history}
          </span>
        </div>

        <div className="history-axis">
          {timeline.map((event, index) => (
            <div className="axis" key={index}>
              <span className="axis-1">{event.year}&nbsp;</span>
              <span className="axis-2">{event.month}</span>
              <span className="axis-3">{event.event}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
