"use client";

import { useRouter, usePathname } from "next/navigation";

export default function LanguageSelect({
  currentLang,
}: {
  currentLang: string;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newLang = event.target.value;
    // 获取当前路径，去掉语言部分
    const currentPath = pathname.replace(/^\/[^\/]+/, "");
    // 构建新路径
    const newPath = `/${newLang}${currentPath || "/top"}`;
    // 重定向到新路径
    router.push(newPath);
  };

  return (
    <div className="language">
      <select
        id="language-select"
        defaultValue={currentLang}
        onChange={handleLanguageChange}
        className="language-select"
      >
        <option value="ja">日本語</option>
        <option value="en">English</option>
        <option value="zh">简体中文</option>
      </select>
    </div>
  );
}
