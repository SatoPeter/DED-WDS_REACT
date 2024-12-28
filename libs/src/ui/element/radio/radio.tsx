import React, { useState, useEffect } from 'react';
import { getCombinedClassName } from '@src/utils/string';

/**
 * 定義 Radio 元件的屬性介面。
 *
 * @interface InputProps
 * @property {('primary' | 'secondary' |'neutral' | 'info' |  'success' | 'warning' | 'error')} [themeColor] - 主題顏色，可選值包括 'primary'、'secondary'、'neutral'、'success'、'warning'、'error' 和 'info'。
 * @property {{ label: string; value: string; isDisabled: boolean }[]} [dataSource] - 選項列表，每個選項包含標籤和值。
 * @property {string} [initValue] - 初始選定值。
 * @property {('row' | 'column')} [direction] - 排列方向，可選值包括 'row' 和 'column'。
 * @property {string} [className] - 自訂樣式類別名稱。
 * @property {(value: string) => void} [onChange] - 當選定值改變時的回調函數。
 */
export interface RadioProps {
  dataSource: { label: string; value: string; isDisabled: boolean }[];
  direction?: 'row' | 'column';
  initValue: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onChange?: (value: string) => void;
}

/**
 * @description 表示一個單選框元件。
 * @param {Object} props - 元件的屬性。
 * @param {string} [props.themeColor='primary'] - 元件的主題顏色。
 * @param {Array} [props.options=[]] - 元件的選項列表。
 * @param {string} [props.initValue=''] - 元件的初始值。
 * @param {string} [props.direction='row'] - 元件的排列方向。
 * @param {string} [props.className] - 元件的類名。
 * @param {Function} [props.onChange] - 當值發生變化時的回調函數。
 * @returns {JSX.Element} 單選框元件的 JSX 元素。
 */
export const Radio: React.FC<RadioProps> = ({
  dataSource,
  initValue,
  direction = 'row',
  size = 'medium',
  className = '',
  onChange,
}: RadioProps): JSX.Element => {
  const [currOptions, setCurrOptions] = useState<string>('');

  useEffect(() => {
    setCurrOptions(initValue || '');
  }, [initValue]);

  return (
    <div
      className={`ded-radio-container ${
        direction === 'row'
          ? 'ded-radio-container-row'
          : 'ded-radio-container-column'
      }`}
    >
      {dataSource.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`ded-radio 
            ${getCombinedClassName('ded-text', size)}
            ${option.isDisabled ? 'ded-radio-input-disabled' : ''} 
            ${className}`}
        >
          <input
            className={`ded-radio-input`}
            id={option.value}
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                setCurrOptions(option.value);
                return onChange && onChange(option.value);
              } else {
                setCurrOptions('');
                return onChange && onChange('');
              }
            }}
            name="option"
            type="radio"
          />

          <div
            className={`ded-radio-icon 
                ${getCombinedClassName(
                  'ded-radio',
                  currOptions.includes(option.value) ? 'checked' : 'unchecked'
                )}
                ${getCombinedClassName('ded-icon', size)}
                ${option.isDisabled ? 'ded-radio-icon-disabled' : ''}`}
          />

          <span
            className={`ded-radio-text 
              ${option.isDisabled ? 'ded-radio-text-disabled' : ''}`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
