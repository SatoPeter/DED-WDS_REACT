import React, { useState } from 'react';
import { Input } from '@src/ui/element/input';
import { Button } from '@src/ui/element/button';
import { SvgSearch } from '@src/assets';

/* 組件介面參數 props */
interface SearchProps {
  size?: 'small' | 'medium' | 'large';
  isDisabled?: boolean;
  onClick?: (value: string) => void;
  onChange?: (value: string) => void;
  className?: string;
}

export const Search: React.FC<SearchProps> = ({
  size = 'medium',
  isDisabled = false,
  onClick,
  onChange,
  className = '',
}) => {
  const [value, setValue] = useState('');

  const handleClick = () => {
    onClick && onClick(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  return (
    <div className={`ded-search ${className}`}>
      <Input
        size={size}
        type="text"
        initValue={value}
        prefix={<SvgSearch width={20} height={20} />}
        isDisabled={isDisabled}
        className="ded-search-input"
        onChange={handleChange}
      />
      <Button
        variant="filled"
        themeColor="primary"
        size={size}
        isDisabled={isDisabled}
        onClick={handleClick}
      >
        搜尋
      </Button>
    </div>
  );
};
export default Search;
