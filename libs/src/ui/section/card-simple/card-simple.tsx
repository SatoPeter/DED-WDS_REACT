import React from 'react';
import { Image, Title, Button } from '@src/ui';
import { getCombinedClassName } from '@src/utils/string';

interface CardProps {
  layout?: 'vertical' | 'horizontal';
  imgSrc: string;
  buttonName?: string;
  align?: 'center' | 'left' | 'right';
  hasBorder?: boolean;
  title: string;
  subtitle?: string;
  description?: string;
}

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
