"use client"; // 这个组件是 Client Component

import { useEffect, useState } from "react";

export default function ScaleContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scale, setScale] = useState(1);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0); // 存储计算后的容器高度

  useEffect(() => {
    const calculateScrollbarWidth = () => {
      // 动态计算滚动条宽度
      return window.innerWidth - document.documentElement.clientWidth;
    };

    const handleResize = () => {
      const screenWidth = window.innerWidth;
      const baseWidth = 1920;
      // 计算滚动条宽度
      const scrollbarWidth = calculateScrollbarWidth();
      setScrollbarWidth(scrollbarWidth);
      console.log("window.innerWidth"+window.innerWidth)
      console.log("document.documentElement.clientWidth"+document.documentElement.clientWidth)
      // 计算缩放比例，预留滚动条空间
      const newScale =
        screenWidth < baseWidth ? (screenWidth - scrollbarWidth) / baseWidth : 1;

      setScale(newScale);

      // 计算 .bottom-gray 元素的位置和高度
      const bottomGray = document.querySelector<HTMLElement>('.bottom-gray');
      if (bottomGray) {
        const rect = bottomGray.getBoundingClientRect();
        const bottomGrayHeight = rect.height;
        const bottomGrayY = rect.top + window.scrollY; // 获取 .bottom-gray 相对于页面顶部的位置

        // 更新容器高度，缩放后的高度应该是 (bottomGrayY + bottomGrayHeight) * scale
        setContainerHeight((bottomGrayY + bottomGrayHeight) * newScale);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []); // 空依赖数组，表示只在组件挂载和尺寸变化时执行

  return (
    <div
      className="scale-container"
      style={{
        transform: `scale(${scale})`,
        transformOrigin: "top left", // 缩放基准点从左上角开始
        width: `${1920 - scrollbarWidth}px`, // 动态调整容器宽度，预留滚动条空间
        height: `${containerHeight}px`, // 动态调整容器高度，等于 .bottom-gray 的 y 值加高度，经过缩放
        margin: "0 auto", // 居中显示
        paddingRight: `${scrollbarWidth}px`, // 预留滚动条空间
      }}
    >
      {children}
    </div>
  );
}
