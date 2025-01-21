import React from 'react';
import { useNavigate } from 'react-router';
import { SvgHome, SvgArrowDown } from '@src/assets';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      {/* 錯誤代碼 */}
      <h1 className="text-9xl font-bold text-gray-800">404</h1>

      {/* 旋轉動畫的圓圈 */}
      <div className="animate-spin-slow relative">
        <div className="w-32 h-32 border-8 border-gray-200 rounded-full" />
        <div className="w-32 h-32 border-8 border-blue-500 rounded-full border-t-transparent absolute top-0 left-0" />
      </div>

      {/* 錯誤訊息 */}
      <div className="text-center mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          糟糕！找不到頁面
        </h2>
        <p className="text-gray-600 mb-8">
          您要尋找的頁面可能已被移除、名稱變更或暫時無法使用。
        </p>
      </div>

      {/* 操作按鈕 */}
      <div className="flex gap-4">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          <SvgArrowDown width={24} height={24} className="mr-2 rotate-90" />
          返回上一頁
        </button>

        <button
          onClick={() => navigate('/')}
          className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <SvgHome width={24} height={24} className="mr-2" />
          回到首頁
        </button>
      </div>
    </div>
  );
};

export default NotFound;
