import React from 'react';
import { Slider, Button } from '@src/ui';

/* 組件介面參數 props */
export interface ButtonSliderProps {
  // size?: 'small' | 'medium' | 'large';
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  isDisabled?: boolean;
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  min?: number;
  max?: number;
  step?: number;
  unit?: string;
  onClick?: () => void;
  onChange?: (value: number) => void;
  className?: string;
}

/* 定義組件 */
export const ButtonSlider: React.FC<ButtonSliderProps> = (
  props: ButtonSliderProps
) => {
  /* 解構組件參數 */
  const {
    themeColor = 'primary',
    prefix,
    suffix,
    min = 0,
    max = 100,
    step = 1,
    unit,
    onClick,
    onChange,
    // size,
    isDisabled,
    className,
    ...rest
  } = props;

  const [value, setValue] = React.useState<number>(0);

  /* 事件控制 */
  const handleIncreaseClick = () => {
    setValue((prev) => Math.min(prev + step, max));
  };

  const handleDecreaseClick = () => {
    setValue((prev) => Math.max(prev - step, min));
  };

  const handleChange = (value: number) => {
    setValue(value);
    onChange && onChange(value);
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <Button
        variant="text"
        themeColor={themeColor}
        isDisabled={isDisabled}
        onClick={handleDecreaseClick}
      >
        {prefix}
      </Button>
      <Slider
        {...rest}
        themeColor={themeColor}
        min={0}
        max={100}
        unit={unit}
        step={step}
        isDisabled={isDisabled}
        initialValue={value}
        onChange={handleChange}
      />
      <Button
        variant="text"
        themeColor={themeColor}
        isDisabled={isDisabled}
        onClick={handleIncreaseClick}
      >
        {suffix}
      </Button>
    </div>
  );
};
/* 修改匯出組件定義名稱 Component */
export default ButtonSlider;
