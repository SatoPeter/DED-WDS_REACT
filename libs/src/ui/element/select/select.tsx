import React, { FC, ChangeEvent } from 'react';

interface Option {
  value: string | number;
  label: string;
}

export interface SelectProps {
  dataSource: Option[];
  value?: string | number;
  placeholder?: string;
  isDisabled?: boolean;
  suffix?: React.ReactNode;
  className?: string;
  onChange?: (value: string | number) => void;
}

export const Select: FC<SelectProps> = ({
  dataSource,
  value,
  onChange,
  placeholder = 'Select an option',
  isDisabled = false,
  suffix,
  className = '',
}) => {
  // 處理選擇變更
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    if (onChange) {
      onChange(e.target.value);
    }
  };

  return (
    <div className={`ded-select-container ${className} `}>
      <select
        value={value}
        onChange={handleChange}
        disabled={isDisabled}
        className={`ded-select ${isDisabled ? 'ded-select-disabled' : ''}`}
      >
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {dataSource.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <div
        className={`ded-select-icon 
          ${isDisabled ? 'ded-select-icon-disabled' : ''}
        `}
      >
        {suffix}
      </div>
    </div>
  );
};

export default Select;
