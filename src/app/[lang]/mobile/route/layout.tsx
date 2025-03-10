import Link from "next/link";
import { getTranslations } from "@/lib/i18n";
export default async function RoutePage({
  params,
  children,
}: {
  params: Promise<{ lang: string }>;
  children: React.ReactNode;
}) {
  const { lang } = await params;
  const t = await getTranslations(lang);
  return (
    <div>
      <div className="route">
        <div className="route-pic">
          <img src="/images/mobile/pixta_83375229_XL_dark.png" alt="Contact" />
        </div>
      </div>

      {children}

      {/* 联系方式 */}
      <section className="contact">
        <div className="contact-picture">
          <img src="/images/mobile/group1230.png" alt="Contact" />
        </div>
        <div className="items">
          <div className="phone">
            <div className="icon-1">
              <img src="/images/mobile/group592.png" alt="Phone icon" />
            </div>
            <div className="text">
              <div className="text1">{t.top.contact_text1}</div>
              <div className="text2">{t.top.contact_text2} / 9:00-18:00</div>
            </div>
          </div>

          <div className="message">
            <Link href="/mobile/route/consult">
              <div
                className="mes"
                style={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <div className="icon-2">
                  <img src="/images/mobile/group595.png" alt="Message icon" />
                </div>
                <div className="text1">{t.top.message}</div>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
