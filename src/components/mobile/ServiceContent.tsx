'use client'
import React, { useState } from 'react';


interface Translations {
    [key: string]: any // 根据你的翻译文件结构调整类型
  }

export default function ServicePage({

    translations: t,
}: {
    translations: Translations
}) {


  const messages = [
    { img: '/images/group1215.png', text: t.service.messages[0].text  },
    { img: '/images/group1216.png', text: t.service.messages[1].text  },
    { img: '/images/group1215.png', text: t.service.messages[2].text  },
  ]
  const [currentIndex, setCurrentIndex] = useState(0);
  const previousIndex = (currentIndex === 0 ? messages.length - 1 : currentIndex - 1);
  const nextIndex=(currentIndex===messages.length -1 ? 0:currentIndex+1);


   // 切换到左边的留言条
   const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? messages.length - 1 : prevIndex - 1));
  };

  // 切换到右边的留言条
  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === messages.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className='servicepage'>
      <div className="route-select">
        <div className="route-f1">{t.servicepage}</div>
        <div className="route-line">
          <span className="route-f2">{t.service.home  }</span>
          <img src="/images/Polygon2.png" alt="Contact"/>
          <span className="route-f3">{t.servicepage}</span>
        </div>
      </div>

      <div className="ser_service">
<div className='servicebi'></div>
          <div className="sservice-items" style={{
            marginTop:'100px'
          }}>
            <div className="row">
            <div className='rowbi'>              </div>
            <div className="image">
            <img src="/images/mobile/pixta_79124435_XL.png" alt="Contact"/>
              </div>
              <div className="text">
                <h2>SES</h2>
                <div className='tit2'>({t.service.System })</div>
                <p style={{width:'451px'}}>{t.top.service_text1 }</p>
              </div>

            </div>

            <div className="row" style={{
              marginTop:'40px'
            }}>
                          <div className='rowbi'>              </div>
              <div className="image">
              <img src="/images/mobile/pixta_55069107_XL.png" alt="Contact"/>
              </div>
              <div className="text">
                <h2>{t.top.service_text2 }</h2>
                <p style={{width:'451px'}}>{t.top.service_text3 }</p>
              </div>
            </div>
          </div>
        </div>

      <div className='supported'>
      <div style={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          alignItems:'center'
        }}>  
      <span style={{
        textAlign:'center',
          fontFamily: 'Poppins, sans-serif',
          marginTop:'77px',
          fontWeight:'600',
          fontSize:'75px',
        }}>{t.service.Supported_languages  }</span>

        <span style={{
          marginTop:'-10px',
          
          fontWeight:'700',
          fontSize:'28px',
          letterSpacing: '1.7px',
        }}>{t.service.Support  }</span>
             </div>

        <div className='supported-box'>
          
          <div className='box-img'>
            <img src="/images/group1203.png"/>
            <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>Java</span>
          </div>
          <div className='box-img'>
          <img src="/images/mobile/Microsoftnet.png" style={{
              height:'130px'
            }}/>
          <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>Microsoft.NET</span>
          </div>

          <div className='box-img'>
          <img src="/images/group1210.png"/>
          <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>JavaScript. </span>
          </div>
        </div>

        <div className='supported-box'>
          
          <div className='box-img'>
          <img src="/images/group1212.png"/>
          <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>Go</span>
          </div>
          <div className='box-img'>
          <img src="/images/group1214.png"/>
          <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>AWS</span>
          </div>
          <div className='box-img'>
          <img src="/images/group1209.png"/>
          <span className='box-l' style={{
              position:'absolute',
              bottom:'-40px'
            }}>PHP</span>
          </div>

        </div>
        </div>
      
      <div className='case'>
      <div style={{
          display:'flex',
          flexDirection:'column',
          width:'100%',
          alignItems:'center'
        }}>  
        <span style={{
          fontFamily: 'Poppins, sans-serif',
          marginTop:'77px',
          fontWeight:'600',
          fontSize:'75px',
        }}>{t.service.Case_study  }</span>

        <span style={{
          marginTop:'-10px',
          
          fontWeight:'700',
          fontSize:'28px',
          letterSpacing: '1.7px',
        }}>{t.service.Case  }</span>
        </div>

       {/* 留言条轮转部分 */}
       <div className="message-rotation">

        {/* 前一个留言条，裁切后显示其后410px的部分 */}
        <div className="message-box"
        style={{
          position: 'absolute',
              left: '-630px',
              objectFit: 'cover',
        }}>
          <img
            src={messages[previousIndex].img}
            alt="Message"
            className="message-img"
          />
          <div className="message-text">{messages[previousIndex].text}</div>
        </div>

        {/* 左侧按钮 */}
        <img
          src="/images/group1200.png"
          alt="Previous"
          className="message-arrow left-arrow"
          onClick={goToPrevious}
        />
        
        
        {/* 当前显示的留言条 */}
        <div className="message-box">
          <img src={messages[currentIndex].img} alt="Message" className="message-img" />
          <div className="message-text">{messages[currentIndex].text}</div>
        </div>


        {/* 右侧按钮 */}
        <img
          src="/images/group1196.png"
          alt="Next"
          className="message-arrow right-arrow"
          onClick={goToNext}
        />

        {/* 后一个留言条，裁切后显示其前410px的部分 */}
        <div className="message-box"
        style={{
          position: 'absolute',
              right: '-630px',
              objectFit: 'cover',
        }}>
          <img
            src={messages[nextIndex].img}
            alt="Message"
            className="message-img"
          />
          <div className="message-text">{messages[nextIndex].text}</div>
        </div>

      </div>

        {/* 灰色圆点部分 */}
        <div className="dots-container" style={{
             display: 'flex',        // 启用 Flexbox 布局
             alignItems: 'center',   // 垂直居中
             justifyContent: 'center',  // 水平居中
             marginTop: '25px' }}>
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
          ></span>
        ))}
      </div>
      </div>
    </div>
  )
}