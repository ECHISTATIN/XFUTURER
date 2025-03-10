"use client";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios'
import dayjs from 'dayjs'

// 定义新闻项的类型
interface NewsItem {
  time: string;      // 发布的时间
  summary: string;   // 新闻的摘要（标题）
  details: string;   // 新闻的详细内容（内容）
}

interface Translations {
    [key: string]: any // 根据你的翻译文件结构调整类型
  }

export default function ServicePage({
    lang,
    translations: t,
}: {
    lang:string,
    translations: Translations
}) {
  const [isClient, setIsClient] = useState(false); // 用于检测是否在客户端渲染

  const [activeSection, setActiveSection] = useState("a"); // 当前活动的部分
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [newsData1, setNewsData1] = useState<NewsItem[]>([]); // 明确指定 newsData1 的类型为 NewsItem[]
  const [newsData2, setNewsData2] = useState<NewsItem[]>([]); // 明确指定 newsData2 的类型为 NewsItem[]
  const router = useRouter(); // 使用 useRouter 导航   // 确保只在客户端运行相关代码
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  // 格式化日期为 YY-MM-DD
  const formatDate = (date: string) => dayjs(date).format('YYYY/MM/DD');

  // 获取新闻数据
  const fetchNewsData = async () => {
    try {
      const response = await axios.get('/api/news'); // 调用后端接口
      const data = response.data.data; // 假设接口返回的数据结构是 { data: [...] }
      console.log("Received data:", data);  // 打印返回的原始数据

      // 格式化数据并根据 category 分配到 newsData1 或 newsData2
      const formattedData1: NewsItem[] = [];
      const formattedData2: NewsItem[] = [];

      data.forEach((item: { 
        publishDate: string; 
        title: string; 
        content: string; 
        category: string; 
        title_cn: string; 
        content_cn: string; 
        title_en: string; 
        content_en: string;
      }) => {
        const newsItem: NewsItem = {
          time: formatDate(item.publishDate), // 格式化时间
          summary: t.language === 'en' ? item.title_en : (t.language === 'zh' ? item.title_cn : item.title), // 根据语言显示对应标题
          details: t.language === 'en' ? item.content_en : (t.language === 'zh' ? item.content_cn : item.content), // 根据语言显示对应内容
        };

        // 根据 category 分配新闻到不同的数组
        if (item.category === "a") {
          formattedData1.push(newsItem);
        } else if (item.category === "b") {
          formattedData2.push(newsItem);
        }
      });

      setNewsData1(formattedData1);  // 将 category 为 "1" 的新闻赋值给 newsData1
      setNewsData2(formattedData2);  // 将 category 为 "2" 的新闻赋值给 newsData2
      console.log("Formatted newsData1:", formattedData1);
      console.log("Formatted newsData2:", formattedData2);
    } catch (error) {
      console.error('Failed to fetch news data:', error);
    }
  };

  // 在组件加载时请求新闻数据，并监听语言变化
  useEffect(() => {
    fetchNewsData();
  }, [t.language]); // 监听语言变化

  // 事件处理函数示例
  // 修改导航逻辑
  const handleNavigation = (newsIndex: number) => {
    router.push(`/mobile/route/news/details?section=${activeSection}&index=${newsIndex}&category=${activeSection}`);
  };

  const newsPerPage = 10;
  const currentData = activeSection === "a" ? newsData1 : newsData2;
  const indexOfLastNews = currentPage * newsPerPage;
  const indexOfFirstNews = indexOfLastNews - newsPerPage;
  const currentNews = currentData.slice(indexOfFirstNews, indexOfLastNews);

  // 下一页
  const nextPage = () => {
    if (currentPage * newsPerPage < currentData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 上一页
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  // 计算分页按钮
  const totalPages = Math.ceil(currentData.length / newsPerPage);

  const getPaginationButtons = () => {
    const buttons = [];

    // 如果总页数少于等于5页，显示所有页码
    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(i);
      }
    } else {
      if (currentPage < 5) {
        buttons.push(1);
        buttons.push(2);
        buttons.push(3);
        buttons.push(4);
        buttons.push(5);
        buttons.push('...');
        buttons.push(totalPages);
      } else if (currentPage > totalPages - 5) {
        buttons.push(1);
        buttons.push('...');
        buttons.push(totalPages - 4);
        buttons.push(totalPages - 3);
        buttons.push(totalPages - 2);
        buttons.push(totalPages - 1);
        buttons.push(totalPages);
      } else {
        buttons.push(1);
        buttons.push('...');
        buttons.push(currentPage - 1);
        buttons.push(currentPage);
        buttons.push(currentPage + 1);
        buttons.push('...');
        buttons.push(totalPages);
      }
    }

    return buttons;
  };

  return (
    <div>
      <div className="route-select">
        <div className="route-f1"> {t.news.title}</div>
        <div className="route-line">
          <span className="route-f2">{t.news.home}</span>
          <img src="/images/Polygon2.png" alt="Contact"/>
          <span className="route-f3">{t.news.title2}</span>
        </div>
      </div>

      <div className='nnews-line'>
        <div className="nrequirements-button">
          <button 
            className={`${activeSection === "a" ? "active" : ""}`} 
            onClick={() => {
              setActiveSection("a");
              setCurrentPage(1); // 点击按钮时重置为第一页
            }}
          >
            {t.news.option1}
          </button>
          <button 
            className={`${activeSection === "b" ? "active" : ""}`} 
            onClick={() => {
              setActiveSection("b");
              setCurrentPage(1); // 点击按钮时重置为第一页
            }}
          >
            {t.news.option2}
          </button>
        </div>

        {/* 新闻列表 */}
        <div className="nnews-list">
          {currentNews.length > 0 ? (
            currentNews.map((news, index) => (
              <div key={index} className="mnews-item" onClick={() => handleNavigation(index)}>
                <div className='nnews-fl'> 
                <div className="nnews-time">{news.time}</div>
                <div className='nnews-t'> {activeSection === "a" ? t.news.option1 : t.news.option2}</div>
                </div>
               <div className="nnews-summary">{news.summary}</div>
              </div>
            ))
          ) : (
            <div className="no-news">
              {t.news.noContent} {/* 在语言包中添加一个翻译条目 */}
            </div>
          )}
        </div>

        {/* 分页 */}
        <div className="pagination">
          <button 
            className="arrow" 
            onClick={prevPage} 
            disabled={currentPage === 1}
          >
            ←
          </button>

          {getPaginationButtons().map((button, index) => (
            <button
              key={index}
              className={`page-num ${button === currentPage ? "active" : ""}`}
              onClick={() => {
                if (typeof button === 'number') setCurrentPage(button); // 只设置数字页码
              }}
              disabled={button === '...'} // 禁用省略符号
            >
              {button}
            </button>
          ))}

          <button 
            className="arrow" 
            onClick={nextPage} 
            disabled={currentPage * newsPerPage >= currentData.length}
          >
            →
          </button>
        </div>
      </div>
    </div>
  )
}
