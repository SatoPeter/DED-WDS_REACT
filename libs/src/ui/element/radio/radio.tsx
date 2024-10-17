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
  direction?: 'row' | 'column';
  initValue?: string;
  onChange?: (value: string) => void;
}

/**
 * @description 表示一個單選框元件。
 * @param {Object} props - 元件的屬性。
 * @param {string} [props.themeColor='primary'] - 元件的主題顏色。
 * @param {string} [props.className] - 元件的類名。
 * @param {Array} [props.options=[]] - 元件的選項列表。
 * @param {string} [props.direction='row'] - 元件的排列方向。
 * @param {string} [props.value=''] - 元件的當前值。
 * @param {Function} [props.onChange] - 當值發生變化時的回調函數。
 * @returns {JSX.Element} 單選框元件的 JSX 元素。
 */
export const Radio: React.FC<InputProps> = (props: InputProps) => {
  const {
    themeColor = 'primary',
    className,
    options = [],
    direction = 'row',
    initValue = '',
    onChange,
    ...rest
  } = props;

  const [currOptions, setCurrOptions] = useState<string>('');

  useEffect(() => {
    setCurrOptions(initValue || '');
  }, [initValue]);

  return (
    <div
      className={`radio-container ${
        direction === 'row' ? 'radio-container-row' : 'radio-container-column'
      }`}
    >
      {options.map((option) => (
        <label
          key={option.value}
          htmlFor={option.value}
          className={`radio ${className}`}
        >
          <input
            {...rest}
            className="radio-input"
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
          {currOptions.includes(option.value) ? (
            <div
              className={`radio-icon ${getThemeClass('checked', themeColor)}`}
            >
              <CheckIcon></CheckIcon>
            </div>
          ) : (
            <div
              className={`radio-icon ${getThemeClass('unchecked', themeColor)}`}
            ></div>
          )}

          <span className="radio-text">{option.label}</span>
        </label>
      ))}
    </div>
  );
};

export default Radio;
