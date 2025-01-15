import React from 'react';
import { SvgClose } from '@src/assets';
import { getDisableClass, getThemeClass } from './styled';

/**
 * TagProps 介面定義了 Tag 元件的屬性。
 *
 * @property {('primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error')} [themeColor] - 設定標籤的主題顏色。
 * @property {('filled' | 'ghost')} [variable] - 設定標籤的樣式變體。
 * @property {string} label - 標籤的文字內容。
 * @property {string} [href] - 標籤的連結 URL。
 * @property {React.ReactNode} [prefix] - 標籤前綴的圖示或元素。
 * @property {boolean} [closable] - 是否顯示關閉按鈕。
 * @property {boolean} [isDisabled] - 是否禁用標籤。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {() => void} [onClose] - 關閉標籤時的回調函數。
 */
export interface TagProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variable?: 'filled' | 'ghost';
  label: string;
  href?: string;
  prefix?: React.ReactNode;
  closable?: boolean;
  isDisabled?: boolean;
  className?: string;
  onClose?: () => void;
}

/**
 * 標籤元件
 *
 * @param {TagProps} props - 標籤元件的屬性
 * @param {string} [props.themeColor='primary'] - 標籤的主題顏色
 * @param {string} [props.variable='filled'] - 標籤的變數樣式
 * @param {string} props.label - 標籤的文字內容
 * @param {string} [props.href=''] - 標籤的連結，如果有提供則標籤會變成一個連結
 * @param {React.ReactNode} [props.prefix] - 標籤前綴的圖示或內容
 * @param {boolean} [props.closable=true] - 標籤是否可以關閉
 * @param {boolean} [props.isDisabled=false] - 標籤是否被禁用
 * @param {string} [props.className=''] - 標籤的自訂樣式類別
 * @param {() => void} [props.onClose=() => ({})] - 標籤關閉時的回調函數
 *
 * @returns {JSX.Element} 標籤元件的 JSX 元素
 */
export const Tag: React.FC<TagProps> = ({
  themeColor = 'primary',
  variable = 'filled',
  label,
  href = '',
  prefix,
  closable = true,
  isDisabled = false,
  className = '',
  onClose = () => ({}),
}) => {
  return (
    <div
      className={`ded-tag 
        ${
          isDisabled
            ? getDisableClass(variable)
            : getThemeClass(variable, themeColor)
        } 
        ${className}`}
    >
      {href ? (
        <a href={href} className="ded-tag-text">
          {prefix && <span className="ded-tag-icon">{prefix}</span>}
          {label}
        </a>
      ) : (
        <div className="ded-tag-text">
          {prefix && <span className="ded-tag-icon">{prefix}</span>}
          {label}
        </div>
      )}
      {closable && (
        <SvgClose
          onClick={onClose}
          className={`ded-tag-close 
            ${isDisabled ? 'ded-tag-close-disabled' : ''}`}
        />
      )}
    </div>
  );
};
export default Tag;
