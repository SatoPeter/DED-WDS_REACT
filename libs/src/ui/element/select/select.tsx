import React, { ChangeEvent } from 'react';

interface SelectProps {
  options: { label: string; value: string | number }[];
  placeholder?: string;
  value?: string | number;
  className?: string;
  onChange?: (value: string | number) => void;
}

export const Select: React.FC<SelectProps> = ({
  options,
  placeholder = 'Select',
  value,
  className = '',
  onChange,
}) => {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange && onChange(e.target.value);
  };

  return (
    <div className="ded-select-container">
      <select className="ded-select" value={value} onChange={handleChange}>
        <option value="" disabled hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
export default Select;
