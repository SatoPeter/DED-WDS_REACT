import React, { useState, useRef, useEffect } from 'react';
import { getThemeClass } from './styled';

export interface SliderProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  isDisabled?: boolean;
  min: number;
  max: number;
  step?: number;
  initialValue?: number;
  onChange?: (value: number) => void;
  unit?: string;
  className?: string;
}

export const Slider: React.FC<SliderProps> = ({
  themeColor = 'primary',
  isDisabled = false,
  min = 0,
  max = 100,
  step = 1,
  initialValue = 0,
  onChange,
  unit = '',
  className,
}) => {
  const [value, setValue] = useState<number>(initialValue || min);
  const [thumbPosition, setThumbPosition] = useState<number>(0);
  const rangeRef = useRef<HTMLInputElement>(null);
  const thumbWidth = 20;
  const tooltipWidth = 40;

  useEffect(() => {
    setValue(initialValue);
  }, [initialValue]);

  const updateThumbPosition = (val: number) => {
    if (!rangeRef.current) return;
    const rangeWidth = rangeRef.current.offsetWidth - thumbWidth;
    const newThumbPosition = ((val - min) / (max - min)) * rangeWidth;
    setThumbPosition(newThumbPosition);
  };

  const updateRangeBackground = (val: number) => {
    const value = ((val - min) / (max - min)) * 100;
    document.documentElement.style.setProperty('--progress', `${value}%`);
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
    updateRangeBackground(value);
    updateThumbPosition(value);
  }, [value, min, max]);

  return (
    <div className="slider-container">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        {/* {prefix && (
          <Button
            variant="text"
            onClick={() => setValue((prev) => prev - step)}
          >
            {prefix}
          </Button>
        )} */}
        <input
          ref={rangeRef}
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={isDisabled}
          onChange={handleChange}
          className={`slider 
            ${
              isDisabled
                ? 'slider-disable'
                : className || getThemeClass(themeColor, 'slider')
            }`}
        />
        {/* {suffix && (
          <Button
            variant="text"
            onClick={() => setValue((prev) => prev + step)}
          >
            {suffix}
          </Button>
        )} */}
      </div>

      <div
        className={`tooltip 
        ${
          isDisabled
            ? 'tooltip-disable'
            : className || getThemeClass(themeColor, 'tooltip')
        }`}
        style={{
          left: `calc(${thumbPosition}px + ${thumbWidth / 2}px - ${
            tooltipWidth / 2
          }px)`,
        }}
      >
        <span>{value}</span>
        {unit && <span>{unit}</span>}
      </div>
      {/* <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ width: '48px', textAlign: 'left' }}>0%</div>
        <div style={{ width: '48px', textAlign: 'center' }}>50%</div>
        <div style={{ width: '48px', textAlign: 'right' }}>100%</div>
      </div> */}
    </div>
  );
};

export default Slider;
