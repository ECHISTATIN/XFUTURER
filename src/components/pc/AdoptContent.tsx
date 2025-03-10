'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Translations {
  [key: string]: any // 根据你的翻译文件结构调整类型
}

export default function AdoptContent({
  lang,
  translations: t,
}: {
  lang: string
  translations: Translations
}) {
  const [activeSection, setActiveSection] = useState<'a' | 'b'>('a')
  const [selectedOption, setSelectedOption] = useState<number>(1)

  return (
    <div>
      <div className="top-line">
        <span className="tline1">{t.adopt.introduction1}</span>
        <span className="tline2">{t.adopt.introduction2}</span>
      </div>

      <div className="numbers-line">
        <span className="title1">Numbers</span>
        <span className="title2">{t.adopt.numbers}</span>
        <div className="ngrid">
          <div className="numbers-box1">
            <span>{t.adopt.numbers_t1}</span>
            <img src="/images/adopt/group1166.png" alt="Contact" />
            <div className="value">99%</div>
          </div>
          <div className="numbers-box1">
            <span>{t.adopt.numbers_t2}</span>
            <img src="/images/adopt/group1162.png" alt="Contact" />
            <div className="value">5:5</div>
          </div>
          <div className="numbers-box2">
            <span>{t.adopt.numbers_t3}</span>
            <img src="/images/adopt/group1173.png" alt="Contact" />
            <img src="/images/adopt/group1180.png" alt="Contact" />
          </div>
          <div className="numbers-box1">
            <span>{t.adopt.numbers_t4}</span>
            <img src="/images/adopt/group1152.png" alt="Contact" />
            <div className="value">{t.adopt.numbers_unit}</div>
          </div>
          <div className="numbers-box1">
            <span>{t.adopt.numbers_t5}</span>
            <img src="/images/adopt/group1157.png" alt="Contact" />
            <div className="value">100%</div>
          </div>
        </div>
      </div>

      <div className="welfare-line">
        <span className="title1">Welfare</span>
        <span className="title2">{t.adopt.welfare}</span>
        <div className="wgrid1">
          <div className="welfare-box1">
            <img src="/images/adopt/pixta_74927305_XL.png" alt="Contact" />
            <div className="welfare-title" style={{ width: '520px' }}>
              {t.adopt.welfare_t1}
            </div>
            <div className="welfare-content" style={{ width: '520px' }}>
              {t.adopt.welfare_c1}
            </div>
          </div>
          <div className="welfare-box1">
            <img src="/images/adopt/pixta_92157790_L.png" alt="Contact" />
            <div className="welfare-title" style={{ width: '520px' }}>
              {t.adopt.welfare_t2}
            </div>
            <div className="welfare-content" style={{ width: '520px' }}>
              {t.adopt.welfare_c2}
            </div>
          </div>
        </div>
        <div className="wgrid2">
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_50255185_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t3}</div>
            <div className="welfare-content">{t.adopt.welfare_c3}</div>
          </div>
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_37768973_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t4}</div>
            <div className="welfare-content">{t.adopt.welfare_c4}</div>
          </div>
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_76384458_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t5}</div>
            <div className="welfare-content">{t.adopt.welfare_c5}</div>
          </div>
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_92266537_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t6}</div>
            <div className="welfare-content">{t.adopt.welfare_c6}</div>
          </div>
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_93874673_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t7}</div>
            <div className="welfare-content">{t.adopt.welfare_c7}</div>
          </div>
          <div className="welfare-box2">
            <img src="/images/adopt/pixta_74854395_XL.png" alt="Contact" />
            <div className="welfare-title">{t.adopt.welfare_t8}</div>
            <div className="welfare-content">{t.adopt.welfare_c8}</div>
          </div>
        </div>
      </div>

      <div className="description-line">
        <span className="title1" style={{ textAlign: 'left' }}>
          job description
        </span>
        <img
          src="/images/line62.png"
          alt="Contact"
          style={{ height: '0.5px', width: '159px' }}
        />
        <span className="title2" style={{ marginRight: '600px' }}>
          {t.adopt.description}
        </span>
        <span className="di1">{t.adopt.description_introduction1}</span>
        <span className="di2">{t.adopt.description_introduction2}</span>

        <div className="dgrid">
          <div className="description-box2">
            <img src="/images/adopt/pixta_79124435_XL.png" alt="Contact" />
            <div className="description-title">SES</div>
            <div className="description-content">
              {t.adopt.description_content1}
            </div>
          </div>
          <div className="description-box">
            <img src="/images/adopt/pixta_55069107_XL.png" alt="Contact" />
            <div className="description-title">
              {t.adopt.description_title}
            </div>
            <div className="description-content">
              {t.adopt.description_content2}
            </div>
          </div>
        </div>

        <div className="service">
          <Link href={`/${lang}/route/service`}>
            <div>{t.adopt.service}</div>
          </Link>
        </div>
      </div>

      <div className="sign-box">
        <div className="sign-title">{t.adopt.sign}</div>
        <div className="sign-line"></div>
        <span className="sign-element1">{t.adopt.sign_element1}</span>
        <span className="sign-element2">{t.adopt.sign_element2}</span>
        <span className="sign-element3">{t.adopt.sign_element3}</span>
        <span className="sign-element4">{t.adopt.sign_element4}</span>
        <span className="sign-element5">{t.adopt.sign_element5}</span>
        <div className="sgrid">
          <div className="sbox">
            <div className="stitle">{t.adopt.sign_element1}</div>
            <div className="sdetail">{t.adopt.sign_element_d1}</div>
          </div>
          <div className="sbox">
            <div className="stitle">{t.adopt.sign_element2}</div>
            <div className="sdetail">{t.adopt.sign_element_d2}</div>
          </div>
          <div className="sbox">
            <div className="stitle">{t.adopt.sign_element3}</div>
            <div className="sdetail">{t.adopt.sign_element_d3}</div>
          </div>
          <div className="sbox">
            <div className="stitle">{t.adopt.sign_element4}</div>
            <div className="sdetail">{t.adopt.sign_element_d4}</div>
          </div>
          <div className="sbox">
            <div className="stitle">{t.adopt.sign_element5}</div>
            <div className="sdetail">{t.adopt.sign_element_d5}</div>
          </div>
        </div>
      </div>

      <div className="requirements-line">
        <span className="title1">Requirements</span>
        <span className="title2">{t.adopt.requirements}</span>

        <div className="requirements-button">
          <button
            className={`toggle-button ${activeSection === 'a' ? 'active' : ''}`}
            onClick={() => setActiveSection('a')}
          >
            {t.adopt.requirements_A}
          </button>
          <button
            className={`toggle-button ${activeSection === 'b' ? 'active' : ''}`}
            onClick={() => setActiveSection('b')}
          >
            {t.adopt.requirements_B}
          </button>
        </div>

        <div className="requirements-container">
          {activeSection === 'a' && (
            <div className="containerA">
              <div className="containerA-grid">
                <button
                  className={`container-option ${selectedOption === 1 ? 'active' : ''}`}
                  onClick={() => setSelectedOption(1)}
                >
                  <span>{t.adopt.container_option1}</span>
                  <div
                    className={`option-line ${selectedOption === 1 ? 'active' : ''}`}
                  ></div>
                </button>
                <div
                  className={`container-option ${selectedOption === 2 ? 'active' : ''}`}
                  onClick={() => setSelectedOption(2)}
                >
                  <span>{t.adopt.container_option2}</span>
                  <div
                    className={`option-line ${selectedOption === 2 ? 'active' : ''}`}
                  ></div>
                </div>
                <div
                  className={`container-option ${selectedOption === 3 ? 'active' : ''}`}
                  onClick={() => setSelectedOption(3)}
                >
                  <span>{t.adopt.container_option3}</span>
                  <div
                    className={`option-line ${selectedOption === 3 ? 'active' : ''}`}
                  ></div>
                </div>
              </div>
              {(selectedOption === 1 || selectedOption === 2 || selectedOption === 3) && (
                <table className="table">
                  <tbody>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title1}</td>
                      <td className="table-col2">
                        <span>{t.adopt.table_A_text1.describe}</span>
                        <span>{t.adopt.table_A_text1.point[0]}</span>
                        <span>{t.adopt.table_A_text1.point[1]}</span>
                        <span>{t.adopt.table_A_text1.point[2]}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title2}</td>
                      <td className="table-col2">{t.adopt.table_A_text2}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title3}</td>
                      <td className="table-col2">{t.adopt.table_A_text3}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title4}</td>
                      <td className="table-col2">{t.adopt.table_A_text4}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title5}</td>
                      <td className="table-col2">
                        <span>{t.adopt.table_A_text5.time[0]}</span>
                        <span>{t.adopt.table_A_text5.time[1]}</span>
                        <span>{t.adopt.table_A_text5.time[2]}</span>
                        <br />
                        <span>{t.adopt.table_A_text5.instructions}</span>
                        <span>{t.adopt.table_A_text5.point[0]}</span>
                        <span>{t.adopt.table_A_text5.point[1]}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title6}</td>
                      <td className="table-col2">
                        <span>{t.adopt.table_A_text6.instructions}</span>
                        <span>{t.adopt.table_A_text6.point[0]}</span>
                        <span>{t.adopt.table_A_text6.point[1]}</span>
                        <span>{t.adopt.table_A_text6.point[2]}</span>
                        <span>{t.adopt.table_A_text6.point[3]}</span>
                        <span>{t.adopt.table_A_text6.point[4]}</span>
                      </td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title7}</td>
                      <td className="table-col2">{t.adopt.table_A_text7}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title8}</td>
                      <td className="table-col2">{t.adopt.table_A_text8}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title9}</td>
                      <td className="table-col2">{t.adopt.table_A_text9}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title10}</td>
                      <td className="table-col2">{t.adopt.table_A_text10}</td>
                    </tr>
                    <tr>
                      <td className="table-col1">{t.adopt.table_A_title11}</td>
                      <td className="table-col2">{t.adopt.table_A_text11}</td>
                    </tr>
                  </tbody>
                </table>
              )}
            </div>
          )}
          {activeSection === 'b' && (
            <div className="containerB">
              <div className="container-option active">
                <span>{t.adopt.container_option4}</span>
                <div className="option-line active"></div>
              </div>
              <span className="containerB-text">{t.adopt.requirements_B_text}</span>
              <table className="table">
                <tbody>
                  <tr>
                    <td className="table-col1">{t.adopt.table_B_title1}</td>
                    <td className="table-col2">
                      <span>{t.adopt.table_B_text1.qualification}</span>
                      <br />
                      <span>{t.adopt.table_B_text1.required}</span>
                      <span>{t.adopt.table_B_text1.required_content[0]}</span>
                      <span>{t.adopt.table_B_text1.required_content[1]}</span>
                      <span>{t.adopt.table_B_text1.required_content[2]}</span>
                      <br />
                      <span>{t.adopt.table_B_text1.condition}</span>
                      <span>{t.adopt.table_B_text1.condition_content[0]}</span>
                      <span>{t.adopt.table_B_text1.condition_content[1]}</span>
                      <span>{t.adopt.table_B_text1.condition_content[2]}</span>
                      <span>{t.adopt.table_B_text1.condition_content[3]}</span>
                      <span>{t.adopt.table_B_text1.condition_content[4]}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-col1">{t.adopt.table_B_title2}</td>
                    <td className="table-col2">{t.adopt.table_B_text2}</td>
                  </tr>
                  <tr>
                    <td className="table-col1">{t.adopt.table_B_title3}</td>
                    <td className="table-col2">
                      <span>{t.adopt.table_B_text3.wages}</span>
                      <span>{t.adopt.table_B_text3.tips}</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="table-col1">{t.adopt.table_B_title4}</td>
                    <td className="table-col2">{t.adopt.table_B_text4}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}