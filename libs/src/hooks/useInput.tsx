import { useState, useEffect, ChangeEventHandler } from 'react';

export const useInput = (
  currValue: string,
  type: string,
  onChange: ChangeEventHandler<HTMLInputElement> | undefined
) => {
  const [value, setValue] = useState(currValue);
  const [inputType, setInputType] = useState(type);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    onChange && onChange(e);
  };

  const reset = () => {
    setValue('');
  };

  const switchPassword = () => {
    setInputType((prev) => (prev === 'password' ? 'text' : 'password'));
  };

  useEffect(() => {
    setInputType(type);
  }, [type]);

  useEffect(() => {
    setValue(currValue);
  }, [currValue]);

  return {
    inputType,
    value,
    handleInputChange: handleInputChange,
    onVisibility: switchPassword,
    onClear: reset,
  };
};
