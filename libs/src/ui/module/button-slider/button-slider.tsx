import React, { useEffect } from 'react';
import { Slider, Button } from '@src/ui';

export interface ButtonSliderProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  initValue: number;
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

export const ButtonSlider: React.FC<ButtonSliderProps> = (
  props: ButtonSliderProps
) => {
  const {
    themeColor = 'primary',
    prefix,
    suffix,
    min = 0,
    max = 100,
    step = 1,
    unit,
    initValue,
    onClick,
    onChange,
    isDisabled,
    className,
    ...rest
  } = props;

  const [value, setValue] = React.useState<number>(0);

  const handleIncreaseClick = () => {
    setValue((prev) => Math.min(prev + step, max));
  };

  const handleDecreaseClick = () => {
    setValue((prev) => Math.max(prev - step, min));
  };

  const handleChange = (val: number) => {
    setValue(val);
    onChange && onChange(val);
  };

  useEffect(() => {
    setValue(initValue);
  }, [initValue]);

  return (
    <div className={`button-slider ${className}`}>
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
        initValue={value}
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
export default ButtonSlider;
