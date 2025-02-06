import React from 'react';
import { Image, Title, Button } from '@src/ui';
import { getCombinedClassName } from '@src/utils/string';

/**
 * 卡片元件的屬性介面
 * @interface CardProps
 * @property {('vertical'|'horizontal')} [layout] - 卡片的佈局方向，預設為 vertical
 * @property {string} imgSrc - 卡片圖片的來源網址
 * @property {string} [buttonName] - 按鈕的顯示文字
 * @property {('center'|'left'|'right')} [align] - 內容的對齊方式
 * @property {boolean} [hasBorder] - 是否顯示卡片邊框
 * @property {string} title - 卡片標題
 * @property {string} [subtitle] - 卡片副標題
 * @property {string} [description] - 卡片描述內容
 */
export interface CardProps {
  layout?: 'vertical' | 'horizontal';
  imgSrc: string;
  buttonName?: string;
  align?: 'center' | 'left' | 'right';
  hasBorder?: boolean;
  title: string;
  subtitle?: string;
  description?: string;
}

/**
 * 簡易卡片元件
 * @component
 * @param {Object} props - 元件屬性
 * @param {'vertical' | 'horizontal'} [props.layout='vertical'] - 卡片佈局方向，預設為垂直
 * @param {string} props.imgSrc - 圖片來源URL
 * @param {string} [props.buttonName] - 按鈕文字，若未提供則不顯示按鈕
 * @param {'left' | 'center'} [props.align='left'] - 內容對齊方式，預設靠左
 * @param {boolean} [props.hasBorder=true] - 是否顯示邊框，預設顯示
 * @param {string} props.title - 卡片標題
 * @param {string} [props.subtitle] - 卡片副標題，選填
 * @param {string} [props.description] - 卡片描述文字，選填
 * @returns {JSX.Element} 返回簡易卡片元件
 */
export const CardSimple: React.FC<CardProps> = ({
  layout = 'vertical',
  imgSrc,
  buttonName,
  align = 'left',
  hasBorder = true,
  title,
  subtitle,
  description,
}) => {
  return (
    <div
      className={`ded-card-simple 
        ${getCombinedClassName('ded-card-simple', layout)}
        ${hasBorder ? 'ded-card-simple-border' : ''}
      `}
    >
      <div className="ded-card-simple-image">
        <Image
          src={imgSrc}
          alt="placeholder"
          ratio={`${layout === 'vertical' ? '16x9' : '1x1'}`}
          objectFit="cover"
        />
      </div>

      <div className="ded-card-simple-content">
        <div
          className={`ded-card-simple-text 
          ${getCombinedClassName('ded-card-simple-text', layout)}
        `}
        >
          <Title themeColor="primary" level={3}>
            {title}
          </Title>
          {subtitle && (
            <p className="ded-card-simple-text-subtitle">{subtitle}</p>
          )}
          {description && (
            <p className="ded-card-simple-text-desc ded-multiline-ellipsis">
              {description}
            </p>
          )}
        </div>

        {buttonName && (
          <div
            className={`ded-card-simple-content-button-group 
            ${getCombinedClassName(
              'ded-card-simple-content-button-group',
              align
            )}
          `}
          >
            <Button
              variant="filled"
              width={align === 'center' ? 'fluid' : 'fit'}
              size={layout === 'vertical' ? 'medium' : 'large'}
              onClick={() => ({})}
            >
              {buttonName}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
export default CardSimple;
