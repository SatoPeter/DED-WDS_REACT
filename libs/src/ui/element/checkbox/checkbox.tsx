import React, { useState, useEffect } from 'react';
import { CheckIcon } from '@src/assets';
import { getThemeClass } from './styled';

interface InputProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  className?: string;
  options?: { label: string; value: string }[];
  initValue?: string[];
  direction?: 'row' | 'column';
  onChange?: (value: string[]) => void;
}

/**
 * Checkbox 組件。
 *
 * @component
 * @param {Object} props - 屬性對象。
 * @param {string} [props.themeColor='primary'] - Checkbox 的主題顏色。
 * @param {string} [props.className] - Checkbox 的自定義 CSS 類名。
 * @param {Array} [props.options=[]] - Checkbox 的選項列表。
 * @param {string} [props.direction='row'] - Checkbox 的排列方向，可以是 'row' 或 'column'。
 * @param {Array} [props.value=[]] - 當前選中的選項值列表。
 * @param {function} [props.onChange] - 當選中的選項改變時的回調函數。
 * @param {Object} [props.rest] - 傳遞給 input 元素的其他屬性。
 */
export const Checkbox: React.FC<InputProps> = (props: InputProps) => {
  const {
    themeColor = 'primary',
    className,
    options = [],
    direction = 'row',
    initValue = [],
    onChange,
    ...rest
  } = props;
  const [currOptions, setCurrOptions] = useState<string[]>([]);

  useEffect(() => {
    setCurrOptions(initValue || []);
  }, [initValue]);

  return (
    <div
      className={`checkbox-container ${
        direction === 'row'
          ? 'checkbox-container-row'
          : 'checkbox-container-column'
      }`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`checkbox ${className}`}
        >
          <input
            {...rest}
            className="checkbox-input"
            id={option.value}
            value={option.value}
            onChange={(e) => {
              if (e.target.checked) {
                setCurrOptions([...currOptions, option.value]);
                return onChange && onChange([...currOptions, option.value]);
              } else {
                setCurrOptions(
                  currOptions.filter((target) => target !== option.value)
                );
                return (
                  onChange &&
                  onChange(
                    currOptions.filter((target) => target !== option.value)
                  )
                );
              }
            }}
            name="option"
            type="checkbox"
          />
          {currOptions.includes(option.value) ? (
            <div
              className={`checkbox-icon ${getThemeClass(
                'checked',
                themeColor
              )}`}
            >
              <CheckIcon></CheckIcon>
            </div>
          ) : (
            <div
              className={`checkbox-icon ${getThemeClass(
                'unchecked',
                themeColor
              )}`}
            ></div>
          )}

          <span className="checkbox-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Checkbox;
