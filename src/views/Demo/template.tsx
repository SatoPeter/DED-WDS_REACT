import './style.scss';
// 組件引入

import { Title } from '@src/ui';
// icon 引入

// 圖表引入

// 客製化卡片引入

// 動態引入

// 假資料引入

export const Demo = () => {
  // Layout 結構

  // Grid System 結構

  // 動態呼叫

  return (
    <div className="demo flex flex-col gap-4 justify-center items-center">
      <Title level={1}>Welcome to Web Design System</Title>
      <Title level={2}>從 0 到 1 快速打造精緻的頁面</Title>
      <a className="text-3xl underline underline-offset-2" href="/finished">
        I can't wait to see the finished page
      </a>
    </div>
  );
};

export default Demo;
