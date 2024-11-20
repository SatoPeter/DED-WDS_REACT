import React, { useState, useRef, useEffect } from 'react';
import { getThemeClass } from './styled';

/**
 * 滑桿元件的屬性介面。
 *
 * @interface SliderProps
 * @property {'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info'} [themeColor] - 主題顏色。
 * @property {number} min - 最小值。
 * @property {number} max - 最大值。
 * @property {number} [step] - 每次變動的步長。
 * @property {boolean} [isDisabled] - 是否禁用滑桿。
 * @property {string} [unit] - 值的單位。
 * @property {number} [initValue] - 初始值。
 * @property {string} [className] - 自訂樣式類名。
 * @property {(value: number) => void} [onChange] - 當值變動時的回調函數。
 */
export interface SliderProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  min: number;
  max: number;
  step?: number;
  label?: string;
  initValue: number;
  isDisabled?: boolean;
  className?: string;
  onChange?: (value: number) => void;
}

/**
 * Slider 元件
 *
 * @component
 * @param {SliderProps} props - Slider 元件的屬性
 * @param {string} [props.themeColor='primary'] - 主題顏色
 * @param {boolean} [props.isDisabled=false] - 是否禁用 Slider
 * @param {number} [props.min=0] - Slider 的最小值
 * @param {number} [props.max=100] - Slider 的最大值
 * @param {number} [props.step=1] - Slider 的步進值
 * @param {string} [props.unit='%'] - Slider 值的單位
 * @param {number} [props.initValue=0] - Slider 的初始值
 * @param {string} [props.className] - 自定義 CSS 類名
 * @param {function} [props.onChange] - 當 Slider 值改變時的回調函數
 *
 * @returns {JSX.Element} Slider 元件的 JSX
 */
export const Slider: React.FC<SliderProps> = ({
  themeColor = 'primary',
  isDisabled = false,
  min = 0,
  max = 100,
  step = 1,
  label = '',
  initValue = 0,
  onChange,
  className,
}: SliderProps): JSX.Element => {
  const [value, setValue] = useState<number>(initValue || min);
  const [thumbPosition, setThumbPosition] = useState<number>(0);
  const rangeRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const thumbWidth = 20;
  const tooltipWidth = 40;

  const updateThumbPosition = (val: number) => {
    if (!rangeRef.current) return;
    const rangeWidth = rangeRef.current.offsetWidth - thumbWidth;
    const newThumbPosition = ((val - min) / (max - min)) * rangeWidth;
    setThumbPosition(newThumbPosition);
  };

  const updateRangeBackground = (val: number) => {
    const value = ((val - min) / (max - min)) * 100;
    if (containerRef.current) {
      containerRef.current.style.setProperty('--progress', `${value}%`);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    updateRangeBackground(newValue);
    updateThumbPosition(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  useEffect(() => {
    updateRangeBackground(value);
    updateThumbPosition(value);

    window.addEventListener('resize', () => {
      updateRangeBackground(value);
      updateThumbPosition(value);
    });

    return () => {
      window.removeEventListener('resize', () => {
        updateRangeBackground(value);
        updateThumbPosition(value);
      });
    };
  }, [value, min, max]);

  return (
    <div className="ded-slider-container" ref={containerRef}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <input
          ref={rangeRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={isDisabled}
          onChange={handleChange}
          className={`ded-slider 
            ${
              isDisabled
                ? 'ded-slider-disable'
                : className || getThemeClass(themeColor, 'ded-slider')
            }`}
        />
      </div>

      <div
        className={`ded-tooltip 
        ${
          isDisabled
            ? 'ded-tooltip-disable'
            : className || getThemeClass(themeColor, 'ded-tooltip')
        }`}
        style={{
          left: `calc(${thumbPosition}px + ${thumbWidth / 2}px - ${
            tooltipWidth / 2
          }px)`,
        }}
      >
        <span>{value}</span>
        {label && <span>{label}</span>}
      </div>
    </div>
  );
};

export default Slider;
