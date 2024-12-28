import React, { useState } from 'react';
import { CheckIcon } from '@src/assets';
import { getCombinedClassName } from '@src/utils/string';

/**
 * CheckboxProps 介面定義了 Checkbox 元件的屬性。
 *
 * @property {('primary' | 'secondary' | 'neutral' | 'info' | 'success' | 'warning' | 'error')} [themeColor] - 選擇框的主題顏色。
 * @property {{ label: string; value: string; isDisabled: boolean }[]} [dataSource] - 選項的陣列，每個選項包含標籤和值。
 * @property {string[]} [initValue] - 初始選中的值。
 * @property {('row' | 'column')} [direction] - 選項排列的方向，可以是 'row' 或 'column'。
 * @property {string} [className] - 自訂的 CSS 類名。
 * @property {(value: string[]) => void} [onChange] - 當選中的值改變時的回調函數。
 */
export interface CheckboxProps {
  dataSource: { label: string; value: string; isDisabled: boolean }[];
  initValue: string[];
  direction?: 'row' | 'column';
  size?: 'small' | 'medium' | 'large';
  className?: string;
  onChange?: (value: string[]) => void;
}

/**
 * Checkbox 元件
 *
 * @param {CheckboxProps} props - Checkbox 元件的屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {Array} props.dataSource - 選項資料來源
 * @param {Array} [props.initValue=[]] - 初始選中的值
 * @param {string} [props.direction='row'] - 排列方向 ('row' 或 'column')
 * @param {string} [props.className] - 自訂樣式類別
 * @param {Function} [props.onChange] - 當選項變更時的回呼函數
 *
 * @returns {JSX.Element} Checkbox 元件的 JSX
 */
export const Checkbox: React.FC<CheckboxProps> = ({
  dataSource,
  initValue,
  direction = 'row',
  size = 'medium',
  className = '',
  onChange,
}: CheckboxProps) => {
  const [currOptions, setCurrOptions] = useState<string[]>(initValue);

  const handleChange = (value: string, checked: boolean) => {
    const updatedOptions = checked
      ? [...currOptions, value]
      : currOptions.filter((target) => target !== value);

    setCurrOptions(updatedOptions);
    if (onChange) {
      onChange(updatedOptions);
    }
  };

  return (
    <div
      className={`ded-checkbox-container
        ${
          direction === 'row'
            ? 'ded-checkbox-container-row'
            : 'ded-checkbox-container-column'
        }
      `}
    >
      {dataSource.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`ded-checkbox     
            ${getCombinedClassName('ded-text', size)}        
            ${option.isDisabled ? 'ded-checkbox-input-disabled' : ''} 
            ${className}`}
        >
          <input
            className="ded-checkbox-input"
            id={option.value}
            value={option.value}
            checked={currOptions.includes(option.value)}
            onChange={(e) => handleChange(option.value, e.target.checked)}
            name="option"
            type="checkbox"
          />
          <div
            className={`ded-checkbox-icon 
              ${getCombinedClassName(
                'ded-checkbox',
                currOptions.includes(option.value) ? 'checked' : 'unchecked'
              )}
              ${getCombinedClassName('ded-icon', size)}
              ${option.isDisabled ? 'ded-checkbox-icon-disabled' : ''}`}
          >
            {currOptions.includes(option.value) && <CheckIcon />}
          </div>
          <span
            className={`ded-checkbox-text 
              ${option.isDisabled ? 'ded-checkbox-text-disabled' : ''}`}
          >
            {option.label}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
